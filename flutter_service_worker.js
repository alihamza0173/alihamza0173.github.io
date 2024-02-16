'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "972023ad1d86663574a8eb1410d752f4",
"assets/fonts/MaterialIcons-Regular.otf": "be78ebade1a5d8707d377fe73f4c345a",
"assets/assets/weather_icons/showers-night.png": "9f65905a2bd522bc2890cf55211400b8",
"assets/assets/weather_icons/fog.png": "db7159a002fedcc828377bcffa25eb15",
"assets/assets/weather_icons/thunder-showers-day.png": "d82793dc7820bd3b0f1d5cb2af29d48b",
"assets/assets/weather_icons/partly-cloudy-day.png": "16b8acdbc2c5b6e7818e3bf55a19b922",
"assets/assets/weather_icons/thunder-rain.png": "1b46ed5c88bc9c24a12055f66ea76dd3",
"assets/assets/weather_icons/sleet.png": "491942abe05d0fd2dd07c1c9dcc968b2",
"assets/assets/weather_icons/snow-showers-night.png": "bec3165be58c5f784040c5f718a5c7d1",
"assets/assets/weather_icons/thunder-showers-night.png": "ea720f7792939e83831c5f67546b12e7",
"assets/assets/weather_icons/showers-day.png": "de57cd6c843cbb9eccc22cb3660bd52d",
"assets/assets/weather_icons/snow.png": "8b2de19cdd36975d3380855b591ba799",
"assets/assets/weather_icons/thunder.png": "3b9f5b3db4e67b67f21eb4fa9aef2483",
"assets/assets/weather_icons/clear-day.png": "6ba507a7c385eec93c5046b3b15f1174",
"assets/assets/weather_icons/rain-snow-showers-night.png": "08fc5a413cb838d724f6804cb73874eb",
"assets/assets/weather_icons/rain.png": "08deaab523a4765d80873576fe350505",
"assets/assets/weather_icons/hail.png": "4027d37cd09afc8bea72310cef8c5d98",
"assets/assets/weather_icons/partly-cloudy-night.png": "f90edb1a9b7b9b640e4a8ec413e750ba",
"assets/assets/weather_icons/clear-night.png": "26191d4be54e07ad99c84ff4f274c36f",
"assets/assets/weather_icons/rain-snow-showers-day.png": "4989c8fe54ec1039ad6c1a2f081d7d45",
"assets/assets/weather_icons/cloudy.png": "a912c43ccf9f3ac099d649522efd9988",
"assets/assets/weather_icons/rain-snow.png": "491942abe05d0fd2dd07c1c9dcc968b2",
"assets/assets/weather_icons/wind.png": "775be1e009b0bbb8f05aa688212ef249",
"assets/assets/weather_icons/snow-showers-day.png": "8b2de19cdd36975d3380855b591ba799",
"assets/NOTICES": "6b2cb24e72ce1761641f237651f48bb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9884fb8f21561d73bbd6b64070bc10ae",
"assets/AssetManifest.json": "875068cf4563e76821eef74c6b7b9067",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cd5fdfa90d55e62277a0b0be6ce3ea5b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fc84cd047054ae5d11199a1f742b331c",
"version.json": "7804eb643eb875d188221832d4ff86c5",
"main.dart.js": "49ec84310af731a39a47c58e4cd41fc1",
"favicon.png": "4999d62f008bb1d342d8ab1b1d3cc21a",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "3332ff3d3fc1e8d6783861e42abce690",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "7da3f6ba88344e51883ed006005e199f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "494e27e0101473d919bcb92fca72ec49",
"/": "494e27e0101473d919bcb92fca72ec49",
"splash/img/light-4x.png": "9d7a39875f99f7e9fddb7890b70712c9",
"splash/img/dark-2x.png": "f23c204e05a457b09a0daba3c1c1ed64",
"splash/img/light-2x.png": "f23c204e05a457b09a0daba3c1c1ed64",
"splash/img/dark-3x.png": "8764ea6e9addad81fd21cd7c279b3fc1",
"splash/img/dark-1x.png": "478bfcbcc984817467ea6ad9851881ec",
"splash/img/light-3x.png": "8764ea6e9addad81fd21cd7c279b3fc1",
"splash/img/light-1x.png": "478bfcbcc984817467ea6ad9851881ec",
"splash/img/dark-4x.png": "9d7a39875f99f7e9fddb7890b70712c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
