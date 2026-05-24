import { ImageResponse } from "next/og";
import { BOOKS } from "@/lib/books";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const book = BOOKS.find((b) => b.id === params.id);
  if (!book) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: book.bgColor,
          display: "flex",
          flexDirection: "column",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            color: book.accentColor,
            letterSpacing: "0.25em",
            marginBottom: 40,
          }}
        >
          MELODY·PROMPT · THE SHOP
        </div>
        <div
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 14,
            letterSpacing: "0.1em",
          }}
        >
          Volume {book.volume} — {book.genre}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            maxWidth: 820,
          }}
        >
          {book.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            marginTop: 18,
            maxWidth: 680,
            lineHeight: 1.4,
          }}
        >
          {book.subtitle}
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: book.accentColor,
            }}
          >
            $9.99
          </div>
          {["200 Prompts", "Instant PDF", "Lifetime Updates"].map((t) => (
            <div
              key={t}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 40,
                padding: "10px 20px",
                color: "rgba(255,255,255,0.6)",
                fontSize: 18,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
