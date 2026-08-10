"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { sendContactMessage, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClasses =
  "h-12 rounded-md border border-white/10 bg-[#050505] px-4 text-white outline-none transition placeholder:text-zinc-400 focus:border-[#eee8de]";

export function ContactForm({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // When email delivery is not configured on the server, fall back to the
  // visitor's email app so the message is never lost.
  useEffect(() => {
    if (state.status !== "unconfigured" || !formRef.current) return;
    const data = new FormData(formRef.current);
    const name = String(data.get("name") ?? "").trim();
    const sender = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Project inquiry from ${name}`;
    const body = `${message}\n\n- ${name} (${sender})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [state, email]);

  useEffect(() => {
    if (state.status === "sent") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "sent") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="grid place-content-center gap-4 rounded-md border border-white/20 bg-white/[0.06] p-8 text-center"
      >
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#eee8de] text-[#090909]">
          <Check className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-lg font-semibold text-white">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-zinc-200">
        Name
        <input
          name="name"
          required
          maxLength={200}
          autoComplete="name"
          className={inputClasses}
          placeholder="Your name…"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-zinc-200">
        Email
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          spellCheck={false}
          className={inputClasses}
          placeholder="you@example.com…"
        />
      </label>
      {/* Honeypot field for bots, hidden from real users and screen readers. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="grid gap-2 text-sm font-medium text-zinc-200">
        Message
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={5}
          autoComplete="off"
          className="resize-none rounded-md border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition placeholder:text-zinc-400 focus:border-[#eee8de]"
          placeholder="Tell me what you want to build…"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#eee8de] px-5 text-sm font-semibold text-[#090909] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            Sending…
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p aria-live="polite" className="text-sm text-zinc-400">
        {state.status === "error" || state.status === "unconfigured" ? state.message : null}
      </p>
    </form>
  );
}
