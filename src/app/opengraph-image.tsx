import { ImageResponse } from "next/og";

export const alt = "Tini Flegar — Full-Stack Developer · IT & Finance";
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
          padding: "72px 80px",
          backgroundColor: "#050505",
          color: "#f7f5f2",
          border: "2px solid #242424",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            color: "#c9c4bc",
            fontWeight: 600,
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Software · IT · Fullstack
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
          Tini Flegar
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "30px",
            color: "#a1a1aa",
            maxWidth: "850px",
          }}
        >
          Full-Stack Developer · IT & Finance
        </div>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "14px",
          }}
        >
          {["Web Applications", "APIs", "Dashboards", "Automation"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: "8px",
                border: "1px solid #3a3a3a",
                backgroundColor: "#111111",
                color: "#dedbd5",
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
