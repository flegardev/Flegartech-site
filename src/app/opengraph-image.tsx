import { ImageResponse } from "next/og";

export const alt = "FlegarTech Digital Tools & Web Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#050705",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(117, 177, 131, 0.25), transparent 50%), radial-gradient(circle at 85% 100%, rgba(95, 149, 216, 0.18), transparent 50%)",
          color: "#f7fff9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            color: "#75b183",
            fontWeight: 600,
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          FlegarTech
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "950px",
          }}
        >
          Digital tools, web apps & MVPs that actually work.
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "30px",
            color: "#a1a1aa",
            maxWidth: "850px",
          }}
        >
          Modern web platforms, dashboards and custom software for real-world use.
        </div>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "14px",
          }}
        >
          {["Next.js", "TypeScript", "MVPs", "Dashboards"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: "8px",
                border: "1px solid rgba(117, 177, 131, 0.45)",
                backgroundColor: "rgba(117, 177, 131, 0.12)",
                color: "#bce4c4",
                fontSize: "24px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
