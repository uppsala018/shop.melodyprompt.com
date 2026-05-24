import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1A0F2E 0%, #0c0a14 50%, #070e1f 100%)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.15) 0%, transparent 60%)",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#A78BFA",
            marginBottom: "20px",
          }}
        >
          Melody·Prompt · The Shop
        </p>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "800",
            color: "#fff",
            lineHeight: "1.1",
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          2,000 Studio-Ready AI Music Prompts
        </h1>
        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "700px",
            lineHeight: "1.4",
            marginBottom: "32px",
          }}
        >
          10 genres · Suno v4 + Udio · Sad songs, cinematic trailer music, hip-hop,
          lo-fi, pop, EDM, and more
        </p>
        <div
          style={{
            background: "#A78BFA",
            color: "#15121C",
            borderRadius: "12px",
            padding: "12px 32px",
            fontSize: "24px",
            fontWeight: "700",
            fontFamily: "monospace",
          }}
        >
          Launch Price $9.99 per book · Save $20
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
