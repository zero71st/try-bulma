"use strict";var precacheConfig=[["/try-bulma/index.html","0cacda94429a144da464a6b1c00c95e0"],["/try-bulma/static/css/main.c0afa4ae.css","a1bf0e36b986411364a05286e1ba099f"],["/try-bulma/static/js/main.ab2eb2e8.js","2c5c4431c07ffc17d63d4ff275cbdc35"],["/try-bulma/static/media/fa-brands-400.48461ea4.woff2","48461ea4e797c9774dabb4a0440d2f56"],["/try-bulma/static/media/fa-brands-400.7b464e27.woff","7b464e274bc331f9a765d765359635a5"],["/try-bulma/static/media/fa-brands-400.947b9537.ttf","947b9537bc0fecc8130d48eb753495a1"],["/try-bulma/static/media/fa-brands-400.9b6c8da3.eot","9b6c8da3c489424e2b3e9c9fb6314b37"],["/try-bulma/static/media/fa-brands-400.b5472631.svg","b5472631dbace30d549357ec325b9c62"],["/try-bulma/static/media/fa-regular-400.381af09a.woff","381af09a1366b6c2ae65eac5dd6f0588"],["/try-bulma/static/media/fa-regular-400.73fe7f1e.ttf","73fe7f1effbf382f499831a0a9f18626"],["/try-bulma/static/media/fa-regular-400.7422060c.eot","7422060ca379ee9939d3b687d072acad"],["/try-bulma/static/media/fa-regular-400.949a2b06.woff2","949a2b066ec37f5a384712fc7beaf2f1"],["/try-bulma/static/media/fa-regular-400.b5a61b22.svg","b5a61b229c9c92a6ac21f5b0e3c6e9f1"],["/try-bulma/static/media/fa-solid-900.0079a0ab.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/try-bulma/static/media/fa-solid-900.14a08198.woff2","14a08198ec7d1eb96d515362293fed36"],["/try-bulma/static/media/fa-solid-900.38508b2e.svg","38508b2e7fac045869a86a15936433f7"],["/try-bulma/static/media/fa-solid-900.70e65a7d.eot","70e65a7d34902f2c350816ecfe2f6492"],["/try-bulma/static/media/fa-solid-900.815694de.woff","815694de1120d6c1e9d1f0895ee81056"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/try-bulma/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});