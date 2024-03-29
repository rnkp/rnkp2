module.exports = {
  env: {
    year: new Date().getFullYear(),
  },
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/404': { page: '/404' },
      '/program': { page: '/program' },
      '/program/1': { page: '/program/[slug]' },
      '/program/2': { page: '/program/[slug]' },
      '/program/3': { page: '/program/[slug]' },
      '/program/4': { page: '/program/[slug]' },
      '/program/5': { page: '/program/[slug]' },
      '/program/6': { page: '/program/[slug]' },
      '/program/7': { page: '/program/[slug]' },
      '/program/8': { page: '/program/[slug]' },
      '/program/9': { page: '/program/[slug]' },
      '/program/10': { page: '/program/[slug]' },
      '/articles/1': { page: '/articles/[slug]' },
      '/articles/2': { page: '/articles/[slug]' },
      '/articles/3': { page: '/articles/[slug]' },
      '/articles/4': { page: '/articles/[slug]' },
      '/articles/5': { page: '/articles/[slug]' },
      '/articles/6': { page: '/articles/[slug]' },
      '/articles/7': { page: '/articles/[slug]' },
      '/evolution': { page: '/evolution' },
      '/articles': { page: '/articles' },
      '/privacy': { page: '/privacy' },
    }
  },
}
