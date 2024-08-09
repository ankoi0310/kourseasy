/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'play.google.com',
            }
        ],
    }
};

export default nextConfig;
