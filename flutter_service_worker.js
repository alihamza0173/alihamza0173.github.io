'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "7da3f6ba88344e51883ed006005e199f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "3332ff3d3fc1e8d6783861e42abce690",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "d75f93225ec81dfbf2293a3a98bfb6fe",
"index.html": "d322ab81c4a2bcdbf0e055abe79a4456",
"/": "d322ab81c4a2bcdbf0e055abe79a4456",
"splash/img/light-4x.png": "c1dc7d379c28038cf174337ae55ad222",
"splash/img/dark-4x.png": "c1dc7d379c28038cf174337ae55ad222",
"splash/img/dark-3x.png": "908957be063a8a201e5faca6e9741478",
"splash/img/dark-1x.png": "3967e84fa84643400572451b821f3786",
"splash/img/dark-2x.png": "7fc2fec87e06dddb49f6267342d8afff",
"splash/img/light-1x.png": "3967e84fa84643400572451b821f3786",
"splash/img/light-3x.png": "908957be063a8a201e5faca6e9741478",
"splash/img/light-2x.png": "7fc2fec87e06dddb49f6267342d8afff",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "68b3157ab0df97a43fc936a1dfc3d059",
"assets/assets/weather_icons/thunder-showers-night.png": "ea720f7792939e83831c5f67546b12e7",
"assets/assets/weather_icons/partly-cloudy-night.png": "f90edb1a9b7b9b640e4a8ec413e750ba",
"assets/assets/weather_icons/cloudy.png": "a912c43ccf9f3ac099d649522efd9988",
"assets/assets/weather_icons/partly-cloudy-day.png": "16b8acdbc2c5b6e7818e3bf55a19b922",
"assets/assets/weather_icons/snow-showers-day.png": "8b2de19cdd36975d3380855b591ba799",
"assets/assets/weather_icons/thunder.png": "3b9f5b3db4e67b67f21eb4fa9aef2483",
"assets/assets/weather_icons/wind.png": "775be1e009b0bbb8f05aa688212ef249",
"assets/assets/weather_icons/snow-showers-night.png": "bec3165be58c5f784040c5f718a5c7d1",
"assets/assets/weather_icons/clear-day.png": "6ba507a7c385eec93c5046b3b15f1174",
"assets/assets/weather_icons/rain-snow-showers-night.png": "08fc5a413cb838d724f6804cb73874eb",
"assets/assets/weather_icons/clear-night.png": "26191d4be54e07ad99c84ff4f274c36f",
"assets/assets/weather_icons/snow.png": "8b2de19cdd36975d3380855b591ba799",
"assets/assets/weather_icons/thunder-rain.png": "1b46ed5c88bc9c24a12055f66ea76dd3",
"assets/assets/weather_icons/showers-day.png": "de57cd6c843cbb9eccc22cb3660bd52d",
"assets/assets/weather_icons/rain-snow-showers-day.png": "4989c8fe54ec1039ad6c1a2f081d7d45",
"assets/assets/weather_icons/rain-snow.png": "491942abe05d0fd2dd07c1c9dcc968b2",
"assets/assets/weather_icons/hail.png": "4027d37cd09afc8bea72310cef8c5d98",
"assets/assets/weather_icons/sleet.png": "491942abe05d0fd2dd07c1c9dcc968b2",
"assets/assets/weather_icons/fog.png": "db7159a002fedcc828377bcffa25eb15",
"assets/assets/weather_icons/showers-night.png": "9f65905a2bd522bc2890cf55211400b8",
"assets/assets/weather_icons/rain.png": "08deaab523a4765d80873576fe350505",
"assets/assets/weather_icons/thunder-showers-day.png": "d82793dc7820bd3b0f1d5cb2af29d48b",
"assets/fonts/MaterialIcons-Regular.otf": "6fa5a65998b1f38ec3395d38d93e2829",
"assets/NOTICES": "17138541ed3c7decb9e9b9fb4be6a083",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f786ce3662daf86979d15947f7ec41dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "0f20e947e0ef11de78bbd7f2be3d8d8b",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "4999d62f008bb1d342d8ab1b1d3cc21a",
"flutter_bootstrap.js": "d53a6e48864b463a2a028f3a64378dd3",
"version.json": "7804eb643eb875d188221832d4ff86c5",
"main.dart.js": "c9436150ad02113f901108d7c736731a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
