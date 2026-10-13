import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tini Flegar — Thoughtful software, built end to end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "76px 86px",
          background: "#f4f6f3",
          color: "#183d35",
          borderLeft: "14px solid #256b57",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>
            Tini Flegar / Software engineer
          </div>
          <div style={{ display: "flex", marginTop: 30, fontFamily: "sans-serif", fontSize: 92, lineHeight: 0.95 }}>
            FlegarDev
          </div>
          <div style={{ display: "flex", marginTop: 30, width: 520, height: 2, background: "#256b57" }} />
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#555" }}>
            Thoughtful software, built end to end.
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #256b57",
            borderRadius: 24,
            background: "#e2eee5",
            fontFamily: "sans-serif",
            fontSize: 160,
            lineHeight: 1,
          }}
        >
          F
        </div>
      </div>
    ),
    size,
  );
}
