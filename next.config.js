/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//     reactStrictMode: true, // was there by default
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         config.module.rules.push({
//             test: /\.(png|jpe?g|gif)$/i,
//             use: [
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         publicPath: 'public',
//                     },
//                 },
//             ],
//         });

//         // Important: return the modified config
//         return config;
//     },
// };
