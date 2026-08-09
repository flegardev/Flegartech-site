"use server";

import { siteConfig } from "@/data/site";

export type ContactFormState = {
  status: "idle" | "sent" | "error" | "unconfigured";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never see or fill this field.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "sent", message: "Thanks! Your message has been sent." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length > 5000 || name.length > 200 || email.length > 200) {
    return { status: "error", message: "Your message is too long. Please shorten it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "unconfigured",
      message: "Direct sending is not set up yet. Opening your email app instead.",
    };
  }

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Tini Flegar Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: `${message}\n\n- ${name} (${email})`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error(
      "Resend request failed:",
      error instanceof Error ? error.name : "UnknownError",
    );
    return {
      status: "error",
      message: `The message service is temporarily unavailable. Please email ${siteConfig.email} directly.`,
    };
  }

  if (!response.ok) {
    console.error("Resend API error status:", response.status);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${siteConfig.email} directly.`,
    };
  }

  return { status: "sent", message: "Thanks! Your message has been sent. Expect a reply soon." };
}
