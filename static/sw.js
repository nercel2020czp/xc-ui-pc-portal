importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8be46a87562e1398b99a.js",
    "revision": "ac03cdd3da73b3805f57aba90608265e"
  },
  {
    "url": "/_nuxt/layouts_default.e119792963570ad70278.js",
    "revision": "a6705b218845b944317c455726eee566"
  },
  {
    "url": "/_nuxt/layouts_default1.af9ba4bbc8f996345fc6.js",
    "revision": "76a52f3a4d30b5f9f230afbe9a3fc764"
  },
  {
    "url": "/_nuxt/layouts_empty-page.9a0a9d610a86ec3b9924.js",
    "revision": "2af82de2c3dfb3ce5717f15894928569"
  },
  {
    "url": "/_nuxt/layouts_test.de9f46e3d59ba448ddb1.js",
    "revision": "5fc6e350613f232703b77cd822457b74"
  },
  {
    "url": "/_nuxt/manifest.b63f9cb09f70268c1322.js",
    "revision": "5ec01f243cd7361eba9f3d373cf216d9"
  },
  {
    "url": "/_nuxt/pages_about.5a49d396f013360dc574.js",
    "revision": "5c9cc84ad47c4a98d9637fa3e336e097"
  },
  {
    "url": "/_nuxt/pages_course_search_index.04892ea932c791186eff.js",
    "revision": "c21f49f03cbae74cbdf317bc0690d2af"
  },
  {
    "url": "/_nuxt/pages_user__id.822310cf449515415248.js",
    "revision": "a84db410c39d9961d68900d47a10cf06"
  },
  {
    "url": "/_nuxt/pages_user_index.4a701eb76d44bad469b9.js",
    "revision": "6ad9e6d57748806956c5ee43b8df06f4"
  },
  {
    "url": "/_nuxt/pages_user_one.5b683aae3047d1293a61.js",
    "revision": "1ac88f0e6dd07a2520574f940c8e9979"
  },
  {
    "url": "/_nuxt/pages_user.6290acddde9aec342f1f.js",
    "revision": "b1b9793b766023db98ba3649595dc951"
  },
  {
    "url": "/_nuxt/vendor.432827a019a2be39ea3e.js",
    "revision": "82a9f5d8c590af70c0b7db9d60dff4b2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

