import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      // Perfect Game
      { protocol: "https", hostname: "web-cdn.perfectgame.tv" },
      { protocol: "https", hostname: "perfectgame.org" },
      { protocol: "https", hostname: "www.perfectgame.org" },

      // MLB
      { protocol: "https", hostname: "www.mlb.com" },
      { protocol: "https", hostname: "mlb.com" },

      // MLB Trade Rumors
      { protocol: "https", hostname: "www.mlbtraderumors.com" },
      { protocol: "https", hostname: "cdn.mlbtraderumors.com" }, // ✅ Added this

      // Baseball America
      { protocol: "https", hostname: "www.baseballamerica.com" },

      // Baseball Factory
      { protocol: "https", hostname: "www.baseballfactory.com" },

      // D1Baseball
      { protocol: "https", hostname: "d1baseball.com" },

      // Houston Chronicle (future)
      { protocol: "https", hostname: "www.houstonchronicle.com" },
    ],
  },
};

export default nextConfig;
