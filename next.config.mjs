/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      SERVER_URL: process.env.SERVER_URL,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "gyorutan-images.s3.ap-northeast-1.amazonaws.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  