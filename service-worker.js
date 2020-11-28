/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","e1f3554e1db091275286b1d8efd1d09e"],["Assets/Animationframe1.png","8753075edc40561d08b93c7680fa3267"],["Assets/Animationframe2.png","8cc41de2d1c0d4685331fff0452346f3"],["Assets/AppleTouchIcon.png","3dd98864878c8b13440281badbdef812"],["Assets/Icon.png","b209b58162b2e55d2af15c7846e5156a"],["Assets/ODIconFiveHundredTwelve.png","648c7e5ab1f6340fe8ccf9480caaa285"],["Assets/ODIconOneHundredNinetyTwo.png","6d1e1005efa3535d08165807e0bd20f0"],["Assets/favicon.ico","c278c81dfc23962fa8d6bec8e4da48e0"],["README.md","f5717e615a132cbe8aa1c51cc6e566b7"],["forums.html","55198861d926089b1caa8b2b952a2567"],["index.html","8ca9b75706e1d1a2d017a3a903f59ac2"],["manifest.json","f6f3c4553b05cbb6ea9c9be4e2fedab2"],["menu.html","b38444f17a0cfd7efabce29572705914"],["privacy-policy/index.html","1b5c0254022d38fcacabdfbaa80e947c"],["pupil/index.html","62fddb97679079275b2f70a8277dff87"],["pupil/menu.html","169344b6d07e68f10a8e2c8bbe407a64"],["t-o-s/index.html","d53f362c9392995ec75e3015c3b859d7"],["teacher/index.html","54171b6aaf2d6b42e1b7eda92e8f353c"],["teacher/keystage1/index.html","0aa74ebcca39dbcfb0a07237cc490f27"],["teacher/keystage1/reception/index.html","eea322f013a0e4a11f868f186b11b42f"],["teacher/keystage1/year1/art/index.html","7819dfff1fbd3de7abc224e368f73af6"],["teacher/keystage1/year1/art/landscapes/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/art/pencil-holding/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/art/portraits/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/art/shapes/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/english/index.html","1e328f8e2fc4aa2fe88c5e58d894fbd9"],["teacher/keystage1/year1/english/sounds/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/english/spelling/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/index.html","387fad6dd478546d4a0b69431e1a0f1f"],["teacher/keystage1/year1/maths/addition/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/maths/index.html","99ef9951f7573ff115cc471f1b32682c"],["teacher/keystage1/year1/maths/multiples/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/maths/subtraction/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/science/animal-families/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/science/index.html","a62ad38f8270615f1b4046c9447f6796"],["teacher/keystage1/year1/science/lab-safety/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year1/science/skeleton/index.html","2f8e2e73326a52e1c90af99598cb22bf"],["teacher/keystage1/year2/index.html","75473af18e430d7e11d02c7b28cc914b"],["teacher/keystage2/index.html","0b50f592e5588bf1c3d3ddc0edecffbd"],["teacher/keystage2/year3/index.html","661ef8430ef248dba0f6031deb919113"],["teacher/keystage2/year4/index.html","c4050db61c19d040fd10290294948b86"],["teacher/keystage2/year5/index.html","2a53a4ddf96f6497a9e6dfaed24de800"],["teacher/keystage2/year6/index.html","0281dabd10d1a1687bc84d54e8405ebc"],["teacher/keystage3/index.html","d2905c5fc8e7bb804aa94361ca0bd0f2"],["teacher/keystage4/index.html","a7356b3e6630ce8d6e0b6f320808c4a1"],["teacher/menu.html","57313cd1bfc016c819bd129c45dd6605"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







