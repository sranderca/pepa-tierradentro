/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true, // <-- Esta es la llave que quita el bloqueo
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pepa-backend-production-6425.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
