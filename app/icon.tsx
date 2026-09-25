import { ImageResponse } from "next/og";

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
          background: "#082b4c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0891b2",
          fontWeight: 800,
          borderRadius: 8,
          border: "1.5px solid rgba(8, 145, 178, 0.4)",
          fontFamily: "sans-serif",
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}
