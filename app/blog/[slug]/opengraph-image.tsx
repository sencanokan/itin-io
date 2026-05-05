import { ImageResponse } from "next/og";
import { getBlogPost, getAllSlugs } from "@/data/blog";

export const runtime = "edge";
export const alt = "ITIN.io Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  const title = post?.title || "ITIN.io Blog";
  const category = post?.category || "Guide";
  const readTime = post?.readTime || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a2540 0%, #1a3a5c 50%, #0a2540 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 91, 255, 0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top: Logo + Category */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #635bff, #00d4ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              i
            </div>
            <span style={{ color: "white", fontSize: "28px", fontWeight: 700 }}>
              ITIN.io
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
              }}
            >
              {category}
            </div>
            {readTime && (
              <div
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                {readTime}
              </div>
            )}
          </div>
        </div>

        {/* Center: Title */}
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <h1
            style={{
              color: "white",
              fontSize: title.length > 50 ? "42px" : "52px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom: IRS badge + URL */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "20px",
              border: "1px solid rgba(245, 166, 35, 0.3)",
              background: "rgba(245, 166, 35, 0.1)",
              color: "#f5a623",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#f5a623">
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            IRS-Authorized CAA
          </div>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>
            itin.io/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
