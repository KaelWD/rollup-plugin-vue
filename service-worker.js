/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8eac2301015e911996e1401d5d1cd3d0"
  },
  {
    "url": "assets/css/6.styles.45ac861a.css",
    "revision": "582f8a61b9cec8b5391ed5c3b441a062"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e705988b.js",
    "revision": "004d65a152f74999b9e86e3812e3c51a"
  },
  {
    "url": "assets/js/1.207899a9.js",
    "revision": "acd5c08a40c0dc78623e3f8a46a05a2d"
  },
  {
    "url": "assets/js/2.fc61ad7d.js",
    "revision": "2d6223f8b5d0ab76b71103d3f1ae9011"
  },
  {
    "url": "assets/js/3.07729f55.js",
    "revision": "702d93681ab75ec24aa290cc491b27d0"
  },
  {
    "url": "assets/js/4.4ba3d6b4.js",
    "revision": "5f47b71785bd7fad3efcae58b15e7f0b"
  },
  {
    "url": "assets/js/5.5daf82f2.js",
    "revision": "a9a2895f0826b9fc300ba8f91eab6e58"
  },
  {
    "url": "assets/js/app.b6eaedfb.js",
    "revision": "126063212b7bfbc11e660f7f1c1d3379"
  },
  {
    "url": "changelog.html",
    "revision": "8be290f2f0317dde29999e69e82ca7ff"
  },
  {
    "url": "cookbook/index.html",
    "revision": "0a83d727048875c98f6618ef41e2d1d5"
  },
  {
    "url": "guide/index.html",
    "revision": "a9f50e8ce6a227cc21a2e70147f7214a"
  },
  {
    "url": "index.html",
    "revision": "b09793dbd38693ba037370a954c5d678"
  },
  {
    "url": "logo.png",
    "revision": "b8c50251399a8890d798d2d531ca4d3b"
  },
  {
    "url": "migrating.html",
    "revision": "c171b27a312f815d27618163ce03932e"
  },
  {
    "url": "options.html",
    "revision": "4c9b3793f4609de8c4db94116a06ef9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
