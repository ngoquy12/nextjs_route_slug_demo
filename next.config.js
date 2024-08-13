// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/products/:slug",
        destination: "/products/:slug.html",
      },
    ];
  },
};
