/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https", // Cambiamos a https
        hostname: "pepa-backend-production-6425.up.railway.app", // Pon TU link de Railway aquí sin https://
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
