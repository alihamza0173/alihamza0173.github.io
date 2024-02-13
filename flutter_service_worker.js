'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "2aca2fd2bed241f5ab8383ebc11407e3",
"assets/fonts/MaterialIcons-Regular.otf": "81ee0b7c4c332cb4f62e346ab9c5d6c6",
"assets/assets/weather_icons/showers-night.png": "b08fa0bc3fb6b092e60c7f6de1714ebe",
"assets/assets/weather_icons/fog.png": "f857b547886118181138ed897af21a04",
"assets/assets/weather_icons/thunder-showers-day.png": "ee7b0ec704e36e86e840fe7cd9255268",
"assets/assets/weather_icons/partly-cloudy-day.png": "7fb1609d037375651f6970c7dd1a1967",
"assets/assets/weather_icons/thunder-rain.png": "fe2410cee6ab5b7c891a87f6c92862cc",
"assets/assets/weather_icons/sleet.png": "4f4d5ad4d44acfe98bb8a0d8176ae8d9",
"assets/assets/weather_icons/snow-showers-night.png": "6904cb997b051ed90c0c68497a129073",
"assets/assets/weather_icons/thunder-showers-night.png": "4705214db0a1c811db5949c775a8d39c",
"assets/assets/weather_icons/showers-day.png": "8522c1c377689e2ccb26315ef773665c",
"assets/assets/weather_icons/snow.png": "ee708eaef0335616cbacff85749373b8",
"assets/assets/weather_icons/thunder.png": "a65678448a2e7797d0c9cb6ceafd31c1",
"assets/assets/weather_icons/clear-day.png": "a2c2cc89cec36563cd07aa8921163ef9",
"assets/assets/weather_icons/rain-snow-showers-night.png": "fbc03754cfc77d58ea6648618f1c4e94",
"assets/assets/weather_icons/rain.png": "3d38625a08bffdd86bda7207f241c415",
"assets/assets/weather_icons/hail.png": "658061a784c6e6c2cf79c1f8ef3f9c60",
"assets/assets/weather_icons/partly-cloudy-night.png": "6b499cc19f22dff81e5f1aabc83b199a",
"assets/assets/weather_icons/clear-night.png": "86018b135c7458c5612d9b0f198cb809",
"assets/assets/weather_icons/rain-snow-showers-day.png": "a1cd98571673b27ec37eff739223d313",
"assets/assets/weather_icons/cloudy.png": "9b26d74454aa850df1185843538a7937",
"assets/assets/weather_icons/rain-snow.png": "62e4128ac35097f8ef100cef6ecb0237",
"assets/assets/weather_icons/wind.png": "44773b4f6a09a8a2dcb05c72ea865255",
"assets/assets/weather_icons/snow-showers-day.png": "f943de6744e451c8394fa8de0481d355",
"assets/NOTICES": "14c3f2bdd92c1e4d344a5ac4b5392779",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9884fb8f21561d73bbd6b64070bc10ae",
"assets/AssetManifest.json": "875068cf4563e76821eef74c6b7b9067",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cd5fdfa90d55e62277a0b0be6ce3ea5b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fc84cd047054ae5d11199a1f742b331c",
"version.json": "7804eb643eb875d188221832d4ff86c5",
"main.dart.js": "67be47ae7527ed568f35e0b923b09465",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "fb433e834d74567fb8839f246780e47f",
"/": "fb433e834d74567fb8839f246780e47f",
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
"assets/AssetManifest.json",
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
