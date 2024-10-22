/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/browse', // Redirect from /browse
          destination: '/browse/ios/apps', // To /browse/ios/apps
          permanent: true, // Indicates a permanent (301) redirect
        },
        {
          source: '/browse/ios', // Redirect from /browse/ios
          destination: '/browse/ios/apps', // To /browse/ios/apps
          permanent: true, // Indicates a permanent (301) redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  