var cacheName = 'pixi-v1';
var filesToCache = [
	'./',
  	'./index.html',
	'./sw.js',
	'./manifest.json',
	'./img/logo.png',
	'./img/icon-192.png',
	'./img/icon-256.png',
	'./img/icon-512.png',
	'./img/bg2.jpg',
	'./img/leper.ability.five.png',
  	'./img/ability_move.png',
	'./js/pixi.js',
	'./css/style.css'
];

self.addEventListener('install', function(event) {
	console.log('sw install');
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('sw caching files');
			return cache.addAll(filesToCache);
		}).catch(function(err) {
			console.log(err);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log('sw fetch');
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		}).catch(function (error) {
			console.log(error);
		})
	);
});

self.addEventListener('activate', function(event) {
	console.log('sw activate');
	event.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName) {
					console.log('sw removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
});
