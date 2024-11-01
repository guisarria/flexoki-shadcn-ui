import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
}

export default nextConfig
