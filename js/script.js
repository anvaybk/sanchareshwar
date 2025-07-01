// script.js

// Register this service worker as early as possible
//if ('serviceWorker' in navigator) {
//  window.addEventListener('load', () => {
//    navigator.serviceWorker.register('serviceworker.js').catch(console.error);
//  });
//}

// Functions
function startReading() {
    window.location.href = 'home.html';
     // window.location.href = 'chapters.html';
}

function goToChapter(chapterUrl) {
    window.location.href = chapterUrl;
}

function goToHome() {
   // window.location.href = '../home.html';
   // window.location.href = '../index.html';
      window.location.href = '../chapters.html';
}

function goToMainHome() {
    window.location.href = '../home.html';
   // window.location.href = '../index.html';
   //	  window.location.href = '../chapters.html';
}


function goToHomePage() {
     window.location.href = 'index.html';
}

function goToRegistrationHomePage() {
     window.location.href = '../registrations.html';
}

function goToNityaPathHome() {
     window.location.href = '../nityapathhome.html';
}

function goToBavaniHome() {
     window.location.href = 'bavani.html';
}

// Chapter Next Previous link 26062025
function goToChapterPagePrastavana() {
     window.location.href = 'chapterprastavana.html';
}
function goToChapterPage0() {
     window.location.href = 'chapter0.html';
}
function goToChapterPage1() {
     window.location.href = 'chapter1.html';
}
function goToChapterPage2() {
     window.location.href = 'chapter2.html';
}
function goToChapterPage3() {
     window.location.href = 'chapter3.html';
}
function goToChapterPage4() {
     window.location.href = 'chapter4.html';
}
function goToChapterPage5() {
     window.location.href = 'chapter5.html';
}
function goToChapterPage6() {
     window.location.href = 'chapter6.html';
}
function goToChapterPage7() {
     window.location.href = 'chapter7.html';
}
function goToChapterPage8() {
     window.location.href = 'chapter8.html';
}
function goToChapterPage9() {
     window.location.href = 'chapter9.html';
}
function goToChapterPage10() {
     window.location.href = 'chapter10.html';
}
function goToChapterPage11() {
     window.location.href = 'chapter11.html';
}
function goToChapterPage12() {
     window.location.href = 'chapter12.html';
}
function goToChapterPage13() {
     window.location.href = 'chapter13.html';
}
function goToChapterPage14() {
     window.location.href = 'chapter14.html';
}
function goToChapterPage15() {
     window.location.href = 'chapter15.html';
}
function goToChapterPage16() {
     window.location.href = 'chapter16.html';
}
function goToChapterPage17() {
     window.location.href = 'chapter17.html';
}
function goToChapterPage18() {
     window.location.href = 'chapter18.html';
}
function goToChapterPage19() {
     window.location.href = 'chapter19.html';
}
function goToChapterPage20() {
     window.location.href = 'chapter20.html';
}
function goToChapterPage21() {
     window.location.href = 'chapter21.html';
}
function goToChapterPage22() {
     window.location.href = 'chapter22.html';
}
function goToChapterPage23() {
     window.location.href = 'chapter23.html';
}
function goToChapterPage24() {
     window.location.href = 'chapter24.html';
}
function goToChapterPage25() {
     window.location.href = 'chapter25.html';
}
function goToChapterPage26() {
     window.location.href = 'chapter26.html';
}
function goToChapterPage27() {
     window.location.href = 'chapter27.html';
}
function goToChapterPage28() {
     window.location.href = 'chapter28.html';
}

// Chapter Next Previous link for Panchapadi 11042025
function goToPanchapadiHome() {
     window.location.href = '../panchapadi.html';
}
function goToPanchapadiPage1() {
     window.location.href = 'panchapadi1.html';
}
function goToPanchapadiPage2() {
     window.location.href = 'panchapadi2.html';
}
function goToPanchapadiPage3() {
     window.location.href = 'panchapadi3.html';
}
function goToPanchapadiPage4() {
     window.location.href = 'panchapadi4.html';
}
function goToPanchapadiPage5() {
     window.location.href = 'panchapadi5.html';
}
function goToPanchapadiPage6() {
     window.location.href = 'panchapadi6.html';
}

// Chapter Next Previous link for Datta Path 28042025
function goToDattaPathHome() {
     window.location.href = '../dattapath.html';
}
function goToDattaPathPage1() {
     window.location.href = 'dattapath1.html';
}
function goToDattaPathPage2() {
     window.location.href = 'dattapath2.html';
}
function goToDattaPathPage3() {
     window.location.href = 'dattapath3.html';
}
function goToDattaPathPage4() {
     window.location.href = 'dattapath4.html';
}
function goToDattaPathPage5() {
     window.location.href = 'dattapath5.html';
}
function goToDattaPathPage6() {
     window.location.href = 'dattapath6.html';
}

// Chapter Next Previous link for Ashtotarshat Namavali 03052025 + Below section is merged
function goToAshtotarNamavaliHome() {
     window.location.href = '../ashtotarnamavali.html';
}
function goToAshtotarNamavaliPage1() {
     window.location.href = 'ashtotarnamavali1.html';
}
function goToAshtotarNamavaliPage2() {
     window.location.href = 'ashtotarnamavali2.html';
}
function goToAshtotarNamavaliPage3() {
     window.location.href = 'ashtotarnamavali3.html';
}
function goToAshtotarNamavaliPage4() {
     window.location.href = 'ashtotarnamavali4.html';
}
function goToAshtotarNamavaliPage5() {
     window.location.href = 'ashtotarnamavali5.html';
}
function goToAshtotarNamavaliPage6() {
     window.location.href = 'ashtotarnamavali6.html';
}
function goToAshtotarNamavaliPage7() {
     window.location.href = 'ashtotarnamavali7.html';
}
function goToAshtotarNamavaliPage8() {
     window.location.href = 'ashtotarnamavali8.html';
}
function goToAshtotarNamavaliPage9() {
     window.location.href = 'ashtotarnamavali9.html';
}

// Chapter Next Previous link for Sanchareshwar Bhajanganga 27062025
function goToBhajanGangaHome() {
     window.location.href = '../bhajanganga.html';
}
function goToBhajanGangaPage01() {
     window.location.href = 'bhajanganga1.html';
}
function goToBhajanGangaPage02() {
     window.location.href = 'bhajanganga2.html';
}
function goToBhajanGangaPage03() {
     window.location.href = 'bhajanganga3.html';
}
function goToBhajanGangaPage04() {
     window.location.href = 'bhajanganga4.html';
}
function goToBhajanGangaPage05() {
     window.location.href = 'bhajanganga5.html';
}
function goToBhajanGangaPage06() {
     window.location.href = 'bhajanganga6.html';
}
function goToBhajanGangaPage07() {
     window.location.href = 'bhajanganga7.html';
}

// Chapter Next Previous link for Samudaayik Upasana 01072025
function goToSamudayikUpasanaHome() {
     window.location.href = '../samudayikupasana.html';
}
function goToSupasanaPage01() {
     window.location.href = 'supasana1.html';
}
function goToSupasanaPage02() {
     window.location.href = 'supasana2.html';
}
function goToSupasanaPage03() {
     window.location.href = 'supasana3.html';
}
function goToSupasanaPage04() {
     window.location.href = 'supasana4.html';
}
function goToSupasanaPage05() {
     window.location.href = 'supasana5.html';
}
function goToSupasanaPage06() {
     window.location.href = 'supasana6.html';
}
function goToSupasanaPage07() {
     window.location.href = 'supasana7.html';
}
function goToSupasanaPage08() {
     window.location.href = 'supasana8.html';
}
function goToSupasanaPage09() {
     window.location.href = 'supasana9.html';
}
function goToSupasanaPage10() {
     window.location.href = 'supasana10.html';
}
function goToSupasanaPage11() {
     window.location.href = 'supasana11.html';
}
function goToSupasanaPage12() {
     window.location.href = 'supasana12.html';
}
function goToSupasanaPage13() {
     window.location.href = 'supasana13.html';
}
function goToSupasanaPage14() {
     window.location.href = 'supasana14.html';
}
function goToSupasanaPage15() {
     window.location.href = 'supasana15.html';
}
function goToSupasanaPage16() {
     window.location.href = 'supasana16.html';
}
function goToSupasanaPage17() {
     window.location.href = 'supasana17.html';
}
function goToSupasanaPage18() {
     window.location.href = 'supasana18.html';
}
function goToSupasanaPage19() {
     window.location.href = 'supasana19.html';
}
function goToSupasanaPage20() {
     window.location.href = 'supasana20.html';
}
function goToSupasanaPage21() {
     window.location.href = 'supasana21.html';
}
function goToSupasanaPage22() {
     window.location.href = 'supasana22.html';
}
function goToSupasanaPage23() {
     window.location.href = 'supasana23.html';
}
function goToSupasanaPage24() {
     window.location.href = 'supasana24.html';
}
function goToSupasanaPage25() {
     window.location.href = 'supasana25.html';
}
function goToSupasanaPage26() {
     window.location.href = 'supasana26.html';
}
function goToSupasanaPage27() {
     window.location.href = 'supasana27.html';
}



// Chapter Next Previous link for Video Gallery 27062025
function goToVideoSangrahHome() {
     window.location.href = 'videogallery.html';
}
function goToAudioSangrahHome() {
     window.location.href = 'audiogallery.html';
}
function goToPhotoSangrahHome() {
     window.location.href = 'photosangrah.html';
}
function goToAtmashatakHome() {
     window.location.href = 'atmashatak.html';
}
function goToAnnualEventHome() {
     window.location.href = 'annualevents.html';
}

// Chapter Next Previous link for Sanchareshwar Geeta 18052025
function goToSanchareshwarGeetaHome() {
     window.location.href = '../sanchareshwargeeta.html';
}
function goToSgeetaPage01() {
     window.location.href = 'sgeeta1.html';
}
function goToSgeetaPage02() {
     window.location.href = 'sgeeta2.html';
}
function goToSgeetaPage03() {
     window.location.href = 'sgeeta3.html';
}
function goToSgeetaPage04() {
     window.location.href = 'sgeeta4.html';
}
function goToSgeetaPage05() {
     window.location.href = 'sgeeta5.html';
}
function goToSgeetaPage06() {
     window.location.href = 'sgeeta6.html';
}
function goToSgeetaPage07() {
     window.location.href = 'sgeeta7.html';
}
function goToSgeetaPage08() {
     window.location.href = 'sgeeta8.html';
}
function goToSgeetaPage09() {
     window.location.href = 'sgeeta9.html';
}
function goToSgeetaPage10() {
     window.location.href = 'sgeeta10.html';
}
function goToSgeetaPage11() {
     window.location.href = 'sgeeta11.html';
}
function goToSgeetaPage12() {
     window.location.href = 'sgeeta12.html';
}
function goToSgeetaPage13() {
     window.location.href = 'sgeeta13.html';
}
function goToSgeetaPage14() {
     window.location.href = 'sgeeta14.html';
}
function goToSgeetaPage15() {
     window.location.href = 'sgeeta15.html';
}
function goToSgeetaPage16() {
     window.location.href = 'sgeeta16.html';
}
function goToSgeetaPage17() {
     window.location.href = 'sgeeta17.html';
}
function goToSgeetaPage18() {
     window.location.href = 'sgeeta18.html';
}

// JavaScript to disable right-click context menu globally and on a specific section
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click context menu globally
    document.body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable right-click context menu on a specific section
    const sectionElement = document.getElementById('youDivSectionId');
    if (sectionElement) {
        sectionElement.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }
    
    // Disable cut, copy, and paste actions
    document.addEventListener('cut', function(e) {
        e.preventDefault();
    });
    document.addEventListener('copy', function(e) {
        e.preventDefault();
    });
    document.addEventListener('paste', function(e) {
        e.preventDefault();
    });

    // Disable certain key combinations
    document.addEventListener('keydown', function(event) {
        // Disable F12 (Developer Tools)
        if (event.keyCode === 123) {
            event.preventDefault();
        }
        // Disable Ctrl+U (View Page Source), Ctrl+A (Select All), Ctrl+S (Save)
        if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode === 65)) {
            event.preventDefault();
        }
        // Disable Ctrl+Shift+I (Developer Tools)
        if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
            event.preventDefault();
        }
        // Disable Ctrl+P (Print)
        if (event.ctrlKey && event.keyCode === 80) {
            event.preventDefault();
        }
        // Disable Ctrl+V (Paste)
        if (event.ctrlKey && event.keyCode === 86) {
            event.preventDefault();
        }
    });
});


// Get all audio elements for Audio Gallery
const audioElements = document.querySelectorAll('audio');
// Add event listener for each audio element
audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
        // Pause all other audio elements
        audioElements.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});

// Get all Video elements for Video Gallery
var currentlyPlaying;

function onYouTubeIframeAPIReady() {
    // Initialize video players
    var videos = document.querySelectorAll('.youtube-video');
    
    videos.forEach(function(video) {
        var videoId = video.getAttribute('data-video-id');
        new YT.Player(video.id, {
            height: '450',
            width: '640',
            videoId: videoId,
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });

    // Initialize playlists
    var playlists = document.querySelectorAll('.youtube-playlist');
    playlists.forEach(function(playlist) {
        var playlistId = playlist.getAttribute('data-playlist-id');
        new YT.Player(playlist.id, {
            height: '450',
            width: '1542',
            playerVars: {
                list: playlistId
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        if (currentlyPlaying && currentlyPlaying !== event.target) {
            currentlyPlaying.pauseVideo(); // Pause the currently playing video
        }
        currentlyPlaying = event.target; // Update currentlyPlaying to the new video
    } else if (event.data === YT.PlayerState.ENDED) {
        currentlyPlaying = null; // Reset when video ends
    }
}
