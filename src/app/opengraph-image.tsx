import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "FlegarDev — Software · IT · Fullstack";
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
          background: "#f7f7f5",
          color: "#080808",
          border: "2px solid #080808",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>
            Software · IT · Fullstack
          </div>
          <div style={{ display: "flex", marginTop: 30, fontFamily: "serif", fontSize: 92, lineHeight: 0.95 }}>
            FlegarDev
          </div>
          <div style={{ display: "flex", marginTop: 30, width: 520, height: 2, background: "#080808" }} />
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#555" }}>
            Digital products, built end to end.
          </div>
        </div>
        <div
          style={{
            width: 260,
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #080808",
            borderRadius: 999,
            background: "#fff",
            fontFamily: "serif",
            fontSize: 210,
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
