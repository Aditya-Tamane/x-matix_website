/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://169.254.14.154:3000",
    "http://192.168.0.0/16",
  ],
};

export default nextConfig;
