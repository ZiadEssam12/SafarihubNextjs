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
        // https://res.cloudinary.com/dvwzzqmpm/image/upload/v1745156690/gallery/zi0PLDkeBL.webp
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        // https://res.cloudinary.com/dvwzzqmpm/image/upload/v1745156690/gallery/zi0PLDkeBL.webp
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
