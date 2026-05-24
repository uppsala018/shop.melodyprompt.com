import { ImageResponse } from "next/og";
import { getBookById } from "@/lib/books";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: { bookId: string } }
) {
  const book = getBookById(params.bookId);

  if (!book) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: `linear-gradient(135deg, ${book.bgColor} 0%, #0c0a14 100%)`,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: `radial-gradient(ellipse at 80% 50%, ${book.accentColor}20 0%, transparent 60%)`,
          }}
        />

        {/* Left: Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "640px",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: book.accentColor,
              marginBottom: "16px",
            }}
          >
            Volume {book.volume} · MelodyPrompt
          </span>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            {book.title}
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "1.4",
              marginBottom: "32px",
            }}
          >
            {book.subtitle}
          </p>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: book.accentColor,
                color: "#0c0a14",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "monospace",
              }}
            >
              Save $20 — only $9.99
            </div>
            <span
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "line-through",
                fontFamily: "monospace",
              }}
            >
              $29.99
            </span>
          </div>
        </div>

        {/* Right: cover placeholder with number */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "280px",
            height: "380px",
            borderRadius: "16px",
            background: `linear-gradient(160deg, ${book.accentColor}40, ${book.accentColor}10)`,
            border: `1px solid ${book.accentColor}40`,
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: "80px",
              fontWeight: "800",
              color: book.accentColor,
              fontFamily: "monospace",
            }}
          >
            {book.volume}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
