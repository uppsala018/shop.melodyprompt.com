import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0912",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#8b5cf6",
            letterSpacing: "0.2em",
            marginBottom: 24,
          }}
        >
          MELODY·PROMPT · THE SHOP
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Studio-Ready AI Music Prompts
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.55)",
            marginTop: 28,
            textAlign: "center",
          }}
        >
          2,000 prompts · 10 genres · $9.99 each
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
          }}
        >
          {["Suno v4+", "Udio", "Instant PDF Download"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 40,
                padding: "10px 22px",
                color: "rgba(255,255,255,0.6)",
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
