module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/program': { page: '/program' },
      '/program/1': { page: '/program/[slug]' },
      '/evolution': { page: '/evolution' },
      '/articles': { page: '/articles' },
      '/privacy': { page: '/privacy' },
    }
  },
}
