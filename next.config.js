/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects: async () => [
		{
			source: '/projects',
			destination: '/repositories',
			permanent: true,
		},
	],
}

module.exports = nextConfig
