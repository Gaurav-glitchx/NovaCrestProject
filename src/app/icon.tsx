import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#070A10",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          border: "1.5px solid #00F2FE",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Wing */}
          <path d="M 16 78 L 50 14 L 42 14 L 10 78 Z" fill="#00F2FE" />
          {/* Right Wing */}
          <path d="M 84 78 L 50 14 L 58 14 L 90 78 Z" fill="#F5E6C8" />
          {/* Center Stellar Core */}
          <polygon points="50,38 58,48 50,58 42,48" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
