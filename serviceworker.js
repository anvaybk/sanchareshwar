// Last updated on 05092025162426

const CACHE_NAME = 'sanchareshwar-v1.0.0.7';

// Dynamically determine the base path (e.g., "/sanchareshwar")
const BASE_PATH = self.location.pathname.replace(/\/serviceworker\.js$/, '');

const RESOURCE_PATHS = [
		// your existing list here...
		"/", // Cache the root URL
        "/index.html", // Cache HTML file
        "/css/styles.css", // Cache CSS file
        "/css/homestyles.css",
		"/css/videostyles.css",
		"/bootstrap.min.css",
        "/js/script.js", // Cache JavaScript file
        "/images/SM_Shri_Sanchareshwar_Charitramrut.png",
        "/images/SM_Shri_Sanchareshwar_Charitramrut.webp",
		"/images/SM-Shri_Sanchareshwar_Charitramrut-Main-Image.jpg",
		"/images/SM-Datta-Path.png",
        "/chapters.html",
        "/home.html",
		"/panchapadi.html",
		"/dattapath.html",
		"/offline.html",
		"/panchapadi.html",
		"/ashtotarnamavali.html",
		"/sanchareshwargeeta.html",
		"/samudayikupasana.html",
		"/gurugeeta.html",
		"/changdevpasashti.html",
		"/naradbhaktisutre.html",
		"/katharaghavachi.html",
		"/pages/chapterprastavana.html",
		"/pages/chapter0.html",
		"/pages/chapter1.html",
        "/pages/chapter2.html",
        "/pages/chapter3.html",
        "/pages/chapter4.html",
        "/pages/chapter5.html",
        "/pages/chapter6.html",
        "/pages/chapter7.html",
        "/pages/chapter8.html",
        "/pages/chapter9.html",
        "/pages/chapter10.html",
        "/pages/chapter11.html",
        "/pages/chapter12.html",
        "/pages/chapter13.html",
        "/pages/chapter14.html",
        "/pages/chapter15.html",
        "/pages/chapter16.html",
		"/pages/chapter17.html",
		"/pages/chapter18.html",
		"/pages/chapter19.html",
		"/pages/chapter20.html",
		"/pages/chapter21.html",
		"/pages/chapter22.html",
		"/pages/chapter23.html",
		"/pages/chapter24.html",
		"/pages/chapter25.html",
		"/pages/chapter26.html",
		"/pages/chapter27.html",
		"/pages/chapter28.html",
        "/pages/panchapadi1.html",
        "/pages/panchapadi2.html",
		"/pages/panchapadi3.html",
		"/pages/panchapadi4.html",
		"/pages/panchapadi5.html",
		"/pages/panchapadi6.html",
		"/pages/audiogallery.html",
		"/pages/annualevents.html",
		"/pages/photogallery.html",
		"/pages/videogallery.html",
		"/pages/bavani.html",
        "/pages/atmashatak.html",
		"/pages/atmashatak1.html",
		"/pages/atmashatak2.html",
		"/pages/atmashatak3.html",
		"/pages/atmashatak4.html",
		"/pages/socialmedia.html",
		"/pages/bhajanganga1.html",
		"/pages/bhajanganga2.html",
		"/pages/bhajanganga3.html",
		"/pages/bhajanganga4.html",
		"/pages/bhajanganga5.html",
		"/pages/bhajanganga6.html",
		"/pages/bhajanganga7.html",
		"/pages/bhajanganga8.html",
		"/pages/privacy-policy.html",
		"/pages/terms-conditions.html",
	    "/pages/donations.html",
		"/pages/dattapath1.html",
		"/pages/dattapath2.html",
		"/pages/dattapath3.html",
		"/pages/dattapath4.html",
		"/pages/dattapath5.html",
		"/pages/dattapath6.html",
		"/pages/dattapath7.html",
		"/pages/ashtotarnamavali1.html",
		"/pages/ashtotarnamavali2.html",
		"/pages/ashtotarnamavali3.html",
		"/pages/ashtotarnamavali4.html",
		"/pages/ashtotarnamavali5.html",
		"/pages/ashtotarnamavali6.html",
		"/pages/ashtotarnamavali7.html",
		"/pages/ashtotarnamavali8.html",
		"/pages/ashtotarnamavali9.html",
		"/pages/sgeetaprastavana.html",
		"/pages/sgeeta1.html",	
		"/pages/sgeeta2.html",	
		"/pages/sgeeta3.html",	
		"/pages/sgeeta4.html",	
		"/pages/sgeeta5.html",	
		"/pages/sgeeta6.html",	
		"/pages/sgeeta7.html",	
		"/pages/sgeeta8.html",	
		"/pages/sgeeta9.html",	
		"/pages/sgeeta10.html",	
		"/pages/sgeeta11.html",	
		"/pages/sgeeta12.html",	
		"/pages/sgeeta13.html",	
		"/pages/sgeeta14.html",	
		"/pages/sgeeta15.html",	
		"/pages/sgeeta16.html",	
		"/pages/sgeeta17.html",	
		"/pages/sgeeta18.html",	
		"/pages/supasana1.html",
		"/pages/supasana2.html",
		"/pages/supasana3.html",
		"/pages/supasana4.html",
		"/pages/supasana5.html",
		"/pages/supasana6.html",
		"/pages/supasana7.html",
		"/pages/supasana8.html",
		"/pages/supasana9.html",
		"/pages/supasana10.html",
		"/pages/supasana11.html",
		"/pages/supasana12.html",
		"/pages/supasana13.html",
		"/pages/supasana14.html",
		"/pages/supasana15.html",
		"/pages/supasana16.html",
		"/pages/supasana17.html",
		"/pages/supasana18.html",
		"/pages/supasana19.html",
		"/pages/supasana20.html",
		"/pages/supasana21.html",
		"/pages/supasana22.html",
		"/pages/supasana23.html",
		"/pages/supasana24.html",
		"/pages/supasana25.html",
		"/pages/supasana26.html",
		"/pages/supasana27.html",
		"/pages/supasana28.html",
		"/pages/gurugeeta1.html",
		"/pages/gurugeeta2.html",
		"/pages/gurugeeta3.html",
		"/pages/gurugeeta4.html",
		"/pages/gurugeeta5.html",
		"/pages/gurugeeta6.html",
		"/pages/cpasashti1.html",
		"/pages/cpasashti2.html",
		"/pages/cpasashti3.html",
		"/pages/cpasashti4.html",
		"/pages/cpasashti5.html",
		"/pages/cpasashti6.html",
		"/pages/nbhaktisutre1.html",
		"/pages/nbhaktisutre2.html",
		"/pages/nbhaktisutre3.html",
		"/pages/nbhaktisutre4.html",
		"/pages/nbhaktisutre5.html",
		"/pages/nbhaktisutre6.html",
		"/pages/nbhaktisutre7.html",
		"/pages/nbhaktisutre8.html",
		"/pages/nbhaktisutre9.html",
		"/pages/nbhaktisutre10.html",
		"/pages/nbhaktisutre11.html",
		"/pages/nbhaktisutre12.html",
		"/pages/kraghavachi1.html",
		"/pages/kraghavachi2.html",
		"/pages/kraghavachi3.html",
		"/pages/kraghavachi4.html",
		"/pages/kraghavachi5.html",
		"/pages/kraghavachi6.html",
		"/pages/kraghavachi7.html",
		"/pages/kraghavachi8.html",
		"/pages/kraghavachi9.html",
		"/pages/kraghavachi10.html",
		"/images/SM-Granth-Vachan-Icon-60x60.webp",
		"/images/SM-Panchapadi-60x60.webp",
		"/images/SM-Bavani-60x60.webp",
		"/images/SM-Namavali-60x60.webp",
		"/images/SM-Atmashatak-60x60.webp",
		"/images/SM-Geeta-60x60.webp",
		"/images/AnnualEvent-Icon-60x60.webp",
		"/images/Video-Gallery-Icon-60x60.webp",
        "/images/Audio-Gallery-Icon-60x60.webp",
        "/images/Photo-Gallery-Icon-60x60.webp",
		"/images/ContactUs-Icon-60x60.webp",
		"/images/SM-Samudayik-Upasana-Icon.webp",
		"/images/SM-Sanchareshwar-atmashatak-Icon.webp",
		"/images/SM-Gurugeeta-60x60.webp",
		"/images/SM_Sanchareshwar_Maharaj_Panchapadi-60x60.png",
		"/images/YTube-Icon-40x40.webp",
        "/images/Instagram-Icon-40x40.png",
        "/images/Whatsapp-Icon-40x40.png",
        "/images/Google-maps-Icon-40x40.png",
        "/images/Facebook-Icon-40x40.png",
        "/images/SM-Granth-Vachan-Icon-60x60.png",
        "/images/Registration-Icon-40x40.png",
        "/images/Social-Media-Icon-40x40.png",
        "/images/Donations-Icon-40x40.png",
     	"/images/Audio-Sangrah-Icon-60x60.png",
		"/images/Google_play_store.svg",
		"/images/icon-256x256.png",
		"/images/icon-512x512.png",
		"/images/SM-Sanchareshwar-Bavani-Icon.png",
        "/images/SM_Shree_Sanchareshwar_Maharaj.jpg", 
		"/images/SM-ChangdevPasashti-80x80.webp",
		"/images/Narad-Bhaktisutre-80x80.webp",
		"/images/Katha-Raghavachi-80x80.webp",
		"/images/photo-gallery/Photo-0.webp",	// Cache Photo Gallery images
		"/images/photo-gallery/Photo-1.webp",
		"/images/photo-gallery/Photo-2.webp",
		"/images/photo-gallery/Photo-3.webp",
		"/images/photo-gallery/Photo-4.webp",
		"/images/photo-gallery/Photo-5.webp",
		"/images/photo-gallery/Photo-6.webp",
		"/images/photo-gallery/Photo-7.webp",
		"/images/photo-gallery/Photo-8.webp",
		"/images/photo-gallery/Photo-9.webp",
		"/images/photo-gallery/Photo-10.webp",
		"/images/photo-gallery/Photo-11.webp",
		"/images/photo-gallery/Photo-12.webp",
		"/images/photo-gallery/Photo-13.webp",
		"/images/photo-gallery/Photo-14.webp",
		"/images/photo-gallery/Photo-15.webp",	
		"/images/photo-gallery/Photo-16.webp",	
		"/images/photo-gallery/Photo-17.webp",	
		"/images/photo-gallery/Photo-18.webp",	
		"/images/photo-gallery/Photo-19.webp",	
		"/images/photo-gallery/Photo-20.webp",	
		"/images/photo-gallery/Photo-21.webp",	
		"/images/photo-gallery/Photo-22.webp",	
		"/images/photo-gallery/Photo-23.webp",	
		"/images/photo-gallery/Photo-24.webp",	
		"/images/photo-gallery/Photo-25.webp",	
		"/images/photo-gallery/Photo-26.webp",	
		"/images/photo-gallery/Photo-27.webp",	
		"/images/photo-gallery/Photo-28.webp",	
		"/images/photo-gallery/Photo-29.webp",	
		"/images/photo-gallery/Photo-30.webp",	
		"/images/photo-gallery/Photo-31.webp",	
		"/images/photo-gallery/Photo-32.webp",	
		"/images/photo-gallery/Photo-33.webp",
		"/images/SM-Prastavana-Icon.webp",	
		"/images/SM-Sanchareshwar-atmashatak-Icon.webp",
		"/audios/Sanchareshwar-Adhyay-1.mp3",
		"/audios/Sanchareshwar-Adhyay-2.mp3",
		"/audios/Sanchareshwar-Adhyay-3.mp3",
		"/audios/Sanchareshwar-Adhyay-4.mp3",
		"/audios/Sanchareshwar-Adhyay-5.mp3",
		"/audios/Sanchareshwar-Adhyay-6.mp3",
		"/audios/Sanchareshwar-Adhyay-7.mp3",
		"/audios/Sanchareshwar-Adhyay-8.mp3",
		"/audios/Sanchareshwar-Adhyay-9.mp3",
		"/audios/Sanchareshwar-Adhyay-10.mp3",
		"/audios/Sanchareshwar-Adhyay-11.mp3",
		"/audios/Sanchareshwar-Adhyay-12.mp3",
		"/audios/Sanchareshwar-Adhyay-13.mp3",
		"/audios/Sanchareshwar-Adhyay-14.mp3",
		"/audios/Sanchareshwar-Adhyay-15.mp3",
		"/audios/Sanchareshwar-Adhyay-16.mp3",
		"/audios/Sanchareshwar-Adhyay-17.mp3",
		"/audios/Sanchareshwar-Adhyay-18.mp3",
		"/audios/Sanchareshwar-Adhyay-19.mp3",
		"/audios/Sanchareshwar-Adhyay-20.mp3",
		"/audios/Sanchareshwar-Adhyay-21.mp3",
		"/audios/Sanchareshwar-Adhyay-22.mp3",
		"/audios/Sanchareshwar-Adhyay-23.mp3",
		"/audios/Sanchareshwar-Adhyay-24.mp3",
		"/audios/Sanchareshwar-Adhyay-25.mp3",
		"/audios/Sanchareshwar-Adhyay-26.mp3",
		"/audios/Sanchareshwar-Adhyay-27.mp3",
		"/audios/Sanchareshwar-Adhyay-28.mp3",
		"/audios/Sanchareshwar-Adhyay-28.mp3",
		"/audios/Sanchareshwar-Panchapadi-Pad-1.mp3",
		"/audios/Sanchareshwar-Panchapadi-Pad-2.mp3",
		"/audios/Sanchareshwar-Panchapadi-Pad-3.mp3",
		"/audios/Sanchareshwar-Panchapadi-Pad-4.mp3",
		"/audios/Sanchareshwar-Panchapadi-Pad-5.mp3",
		"/audios/Sanchareshwar-Tumhich-Na.mp3",
		"/audios/Sancharesha-Tavasharanam.mp3",
		"/audios/Sanchareshwar-Bavani.mp3"
];

// Prepend BASE_PATH to every resource
const INITIAL_CACHED_RESOURCES = RESOURCE_PATHS.map(path => `${BASE_PATH}${path}`);

const DONT_UPDATE_RESOURCES = ['/videos/'];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        try {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(INITIAL_CACHED_RESOURCES);
            console.log('Resources cached successfully');
        } catch (error) {
            console.error('Failed to cache resources:', error);
        }
    })());
});

self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    // Ignore non-HTTP(s) requests (e.g., chrome-extension://, file://, etc.)
    if (requestUrl.protocol !== 'http:' && requestUrl.protocol !== 'https:') {
        return;
    }

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
            return cachedResponse;
        }

        try {
            const fetchResponse = await fetch(event.request);
            if (
                event.request.method === 'GET' &&
                !event.request.url.includes('google-analytics') &&
                !event.request.url.includes('browser-sync')
            ) {
                cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
        } catch (e) {
            if (event.request.mode === 'navigate') {
                await rememberRequestedTip(event.request.url);
                return await cache.match(`${BASE_PATH}/offline.html`);
            }
        }
    })());
});

async function rememberRequestedTip(url) {
    let tips = await localforage.getItem('bg-tips') || [];
    tips.push(url);
    await localforage.setItem('bg-tips', tips);
}

self.addEventListener('sync', event => {
    if (event.tag === 'bg-load-tip') {
        event.waitUntil(backgroundSyncLoadTips());
    }
});

async function backgroundSyncLoadTips() {
    const tips = await localforage.getItem('bg-tips');
    if (!tips || tips.length === 0) return;

    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(tips);

    registration.showNotification(`${tips.length} tips loaded`, {
        icon: `${BASE_PATH}/images/icon-256x256.png`,
        body: "Tap to view",
        data: tips[0]
    });

    await localforage.removeItem('bg-tips');
}

self.addEventListener('notificationclick', event => {
    event.notification.close();
    clients.openWindow(event.notification.data);
});

self.addEventListener('periodicsync', event => {
    if (event.tag === 'update-cached-content') {
        event.waitUntil(updateCachedContent());
    }
});

async function updateCachedContent() {
    const requests = await findCacheEntriesToBeRefreshed();
    const cache = await caches.open(CACHE_NAME);

    for (const request of requests) {
        try {
            const fetchResponse = await fetch(request);
            await cache.put(request, fetchResponse.clone());
        } catch (e) {
            // Fail silently
        }
    }
}

async function findCacheEntriesToBeRefreshed() {
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    return requests.filter(request => {
        return !DONT_UPDATE_RESOURCES.some(pattern => request.url.includes(pattern));
    });
}