import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gregory Garcia - Senior Full Stack Developer in Dublin, Ireland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 88px",
          background: "linear-gradient(135deg, #000000 0%, #1e1035 55%, #4c1d95 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={320}
          height={320}
          alt=""
          style={{ borderRadius: 9999, border: "8px solid #8b5cf6", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>Gregory Garcia</div>
          <div style={{ fontSize: 40, color: "#c4b5fd", marginTop: 20, fontWeight: 700 }}>
            Senior Full Stack Developer
          </div>
          <div style={{ fontSize: 30, color: "#d1d5db", marginTop: 28 }}>
            Node.js · React · Next.js · TypeScript · MongoDB · PostgreSQL
          </div>
          <div style={{ fontSize: 28, color: "#a78bfa", marginTop: 36 }}>
            Dublin, Ireland · gregorygarcia.dev
          </div>
        </div>
      </div>
    ),
    size
  );
}
