/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // this is deprecated 
       // domains: ['utfs.io'],
      // now remotPatterns is the passing the different domains which have resource sharing with the applications
       remotePatterns:[
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
