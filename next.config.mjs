import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/home", // Redirects root (/) to /home
      //   permanent: true, // This is a 301 (permanent) redirect
      // },
    ];
  },
};

export default withFlowbiteReact(nextConfig);