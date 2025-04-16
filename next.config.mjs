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
      {
        // "https://sunpyramidtours.com/storage/media/tours/package-3-days-2-nights-to-white-desert-bahariya-start-from-255/New Project (25).webp"
        protocol: "https",
        hostname: "sunpyramidtours.com",
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
