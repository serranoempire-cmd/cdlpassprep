/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/trainer", destination: "/trainer/index.html" }];
  },
};

export default nextConfig;
