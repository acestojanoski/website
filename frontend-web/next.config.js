/* eslint-disable @typescript-eslint/no-var-requires */
const transpileModules = require('next-transpile-modules')([
	'@acestojanoski/backend',
])
const bundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/**
 *
 * @param {import('next').NextConfig} config
 * @param  {...any} plugins
 * @returns
 */
const withPlugins = (nextConfig, ...plugins) => {
	let finalConfig = nextConfig

	for (const plugin of plugins) {
		finalConfig = plugin(finalConfig)
	}

	return finalConfig
}

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

module.exports = withPlugins(nextConfig, transpileModules, bundleAnalyzer)
