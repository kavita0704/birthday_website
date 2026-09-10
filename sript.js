const birthday = new Date("September 11, 2026 00:00:00").getTime();

const countdownInterval = setInterval(countdown, 1000);

function countdown() {

    const now = new Date().getTime();
    const distance = birthday - now;

    // Birthday has arrived
    if (distance <= 0) {

        // Stop countdown completely
        clearInterval(countdownInterval);

        // Hide countdown
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "none";

        // Show birthday screen
        document.getElementById("birthday-screen").style.display = "block";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Run immediately
countdown();

// 🎵 Music

const music = document.getElementById("birthday-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicButton.innerText = "🔇 Pause Music";

    } else {

        music.pause();

        musicButton.innerText = "🎵 Play Music";

    }

});


// 🎆 Fireworks

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;

    for (let i = 0; i < 40; i++) {

        const angle = Math.random() * Math.PI * 2;

        const speed = Math.random() * 5 + 2;

        fireworks.push({

            x: x,
            y: y,

            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,

            life: 100

        });

    }
}


function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {

        firework.x += firework.dx;
        firework.y += firework.dy;

        firework.dy += 0.05;

        firework.life--;

        ctx.beginPath();

        ctx.arc(
            firework.x,
            firework.y,
            3,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "hotpink";

        ctx.fill();

        if (firework.life <= 0) {

            fireworks.splice(index, 1);

        }

    });

    requestAnimationFrame(animateFireworks);
}


setInterval(createFirework, 1200);

animateFireworks();

function showMemories() {

    document.getElementById("birthday-screen").style.display = "none";

    document.getElementById("memories-screen").style.display = "block";

    const birthdayMusic = document.getElementById("birthday-music");

    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;

    const memoriesMusic = document.getElementById("memories-music");

    memoriesMusic.play();

    showMemoryGroups();
}
function startCakeSurprise() {

    const birthdayScreen =
        document.getElementById("birthday-screen");

    const cakeScreen =
        document.getElementById("cake-screen");

    const timer =
        document.getElementById("cake-timer");

    const cakeArea =
        document.getElementById("cake-area");

    const blowText =
        document.getElementById("blow-text");

    const memoriesScreen =
        document.getElementById("memories-screen");


    // ==========================================
    // HIDE BIRTHDAY SCREEN
    // ==========================================

    birthdayScreen.style.display = "none";


    // ==========================================
    // SHOW CAKE SCREEN
    // ==========================================

    cakeScreen.style.display = "flex";


    // ==========================================
    // RESET CAKE
    // ==========================================

    cakeArea.style.display = "none";

    timer.style.display = "block";

    let count = 5;

    timer.textContent = count;


    const flames =
        document.querySelectorAll("#cake-area .flame");


    flames.forEach(flame => {
        flame.classList.remove("blown");
    });


    blowText.textContent =
        "🎂 Blow the candles! 💨";


    // ==========================================
    // 5 SECOND COUNTDOWN
    // ==========================================

    const cakeCountdown = setInterval(() => {

        count--;

        if (count > 0) {

            timer.textContent = count;

        } else {

    clearInterval(cakeCountdown);

    // Hide timer
    timer.style.display = "none";

    // Show cake
    cakeArea.style.display = "block";


    // 🎂 Start cake music automatically
    const birthdayMusic =
        document.getElementById("birthday-music");

    const cakeMusic =
        document.getElementById("cake-music");

    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;

    cakeMusic.currentTime = 0;
    cakeMusic.play().catch(() => {});


    // Wait 4 seconds
    setTimeout(() => {


                // Blow candles
                flames.forEach(flame => {
                    flame.classList.add("blown");
                });


                blowText.textContent =
                    "🎉 Make a wish! 💗";


                // ==================================
                // WAIT 1 SECOND
                // ==================================

                setTimeout(() => {


                    // ==================================
                    // HIDE CAKE
                    // ==================================

                    cakeScreen.style.display = "none";


                    // ==================================
                    // HIDE ALL FIRST SCREEN CONTENT
                    // ==================================

                    document.querySelector("body > h1").style.display = "none";

                    document.getElementById("countdown").style.display = "none";

                    document.getElementById("message").style.display = "none";

                    birthdayScreen.style.display = "none";


                    // ==================================
                    // SHOW MEMORIES
                    // ==================================

                    memoriesScreen.style.display = "block";


                    // ==================================
                    // GO TO MEMORIES
                    // ==================================

                    setTimeout(() => {

                        memoriesScreen.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 100);


                    // ==================================
                    // MUSIC
                    // ==================================

                    const birthdayMusic =
                        document.getElementById("birthday-music");

                    const memoriesMusic =
                        document.getElementById("memories-music");


                    birthdayMusic.pause();
                    birthdayMusic.currentTime = 0;


                    memoriesMusic.play().catch(() => {});


                }, 10000);

            }, 4000);
        }

    }, 1000);
}

/* =========================================
   📖 LETTER INTRO
========================================= */

function startLetters() {

    const memoriesScreen =
        document.getElementById("memories-screen");

    const letterIntro =
        document.getElementById("letter-intro");


    // Hide memories
    memoriesScreen.style.display = "none";


    // Show book
    letterIntro.style.display = "flex";


    // Scroll to book
    window.scrollTo(0, 0);

    const memoriesMusic = document.getElementById("memories-music");

if (memoriesMusic) {
    memoriesMusic.pause();
    memoriesMusic.currentTime = 0;
}
// 💌 Start Song 4 for the letters
const letterMusic = document.getElementById("music");

letterMusic.currentTime = 0;
letterMusic.play().catch(() => {});

    // Wait for book animation
    setTimeout(() => {

        letterIntro.style.display = "none";

        startLetter1Typing();

    }, 4000);
}


/* =========================================
   ⌨️ LETTER 1 TYPING
========================================= */

function startLetter1Typing() {

    const screen =
        document.getElementById("letter1-typing");

    const title =
        document.getElementById("typing-title-1");

    const text =
        document.getElementById("typing-text-1");


    screen.style.display = "flex";

    window.scrollTo(0, 0);


    title.textContent = "";
    text.textContent = "";


    const titleText =
        "A letter from chintamani... 💌";

    const bodyText =
        "Because some things are easier to write than to say...";


    typeText(title, titleText, 70, () => {

        setTimeout(() => {

            typeText(text, bodyText, 45, () => {

                setTimeout(() => {

                    screen.style.display = "none";

                    document.getElementById(
                        "letter1-screen"
                    ).style.display = "flex";

                    window.scrollTo(0, 0);

                }, 1500);

            });

        }, 500);

    });
}


/* =========================================
   ⌨️ LETTER 2 TYPING
========================================= */

function openLetter2() {

    document.getElementById(
        "letter1-screen"
    ).style.display = "none";


    const screen =
        document.getElementById("letter2-typing");

    const title =
        document.getElementById("typing-title-2");

    const text =
        document.getElementById("typing-text-2");


    screen.style.display = "flex";

    window.scrollTo(0, 0);


    title.textContent = "";
    text.textContent = "";


    const titleText =
        "And now... another letter for you 💗";

    const bodyText =
        "Because your sunita darling always ready to gyaan chodna...";


    typeText(title, titleText, 70, () => {

        setTimeout(() => {

            typeText(text, bodyText, 45, () => {

                setTimeout(() => {

                    screen.style.display = "none";

                    document.getElementById(
                        "letter2-screen"
                    ).style.display = "flex";

                    window.scrollTo(0, 0);

                }, 1500);

            });

        }, 500);

    });
}


/* =========================================
   ⌨️ TYPEWRITER FUNCTION
========================================= */

function typeText(element, text, speed, callback) {

    let index = 0;

    element.textContent = "";


    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if (callback) {
                callback();
            }

        }

    }

    type();
}

/* =========================================
   🎬 START VIDEOS
========================================= */

/* =========================================
   🎬 START VIDEOS
========================================= */

function startVideos() {

    // Stop Song 4
    const letterMusic = document.getElementById("music");

    if (letterMusic) {
        letterMusic.pause();
        letterMusic.currentTime = 0;
    }

    // Hide second letter
    document.getElementById("letter2-screen").style.display = "none";

    // Hide video intro if visible
    const videoIntro = document.getElementById("videos-intro");

    if (videoIntro) {
        videoIntro.style.display = "none";
    }

    // Show video screen
    const videosScreen = document.getElementById("videos-screen");
    videosScreen.style.display = "flex";

    // Reset and start video
    const mainVideo = document.getElementById("main-video");

    if (mainVideo) {
        mainVideo.currentTime = 0;
        mainVideo.play().catch(() => {});
    }

    // Go to video
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
/* =========================================
    🎬 START CRAZY VIDEO
   ========================================= */

 function startVideos() {

    // Hide second letter
    document.getElementById("letter2-screen").style.display = "none";

    // Show video screen
    document.getElementById("videos-screen").style.display = "flex";

    // Go to video
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// 🎬 When crazy video finishes → show friends' wishes
const mainVideo = document.getElementById("main-video");

if (mainVideo) {
    mainVideo.addEventListener("ended", function () {

        document.getElementById("videos-screen").style.display = "none";

        const wishesScreen = document.getElementById("wishes-screen");
        wishesScreen.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}
// 💗 When friends' wishes video finishes → show final photos

const wishesVideo = document.getElementById("wishes-video");

if (wishesVideo) {

    wishesVideo.addEventListener("ended", function () {

        // Hide wishes video
        document.getElementById("wishes-screen").style.display = "none";

        // Show final photo slideshow
        startFinalPhotos();

        // Go to the photos
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// =============================
// 📸 FINAL PHOTO SLIDESHOW
// =============================

const finalPhotos = [
    "photo9.jpeg",
    "photo10.png",
    "photo11.png",
    "photo12.jpg",
    "photo13.jpg"
];

let currentFinalPhoto = 0;

function startFinalPhotos() {

    const photosScreen =
        document.getElementById("final-photos-screen");

    const photo =
        document.getElementById("final-slideshow-photo");

    photosScreen.style.display = "flex";

    currentFinalPhoto = 0;
    photo.src = finalPhotos[currentFinalPhoto];

    setInterval(() => {

        photo.style.opacity = "0";

        setTimeout(() => {

            currentFinalPhoto++;

            if (currentFinalPhoto >= finalPhotos.length) {
                currentFinalPhoto = 0;
            }

            photo.src = finalPhotos[currentFinalPhoto];

            photo.style.opacity = "1";

        }, 800);

    }, 3000);
}
/*

function startCakeSurprise() {

    const birthdayScreen = document.getElementById("birthday-screen");
    const cakeScreen = document.getElementById("cake-screen");
    const timer = document.getElementById("cake-timer");
    const cakeArea = document.getElementById("cake-area");
    const blowText = document.getElementById("blow-text");
    const memoriesScreen = document.getElementById("memories-screen");

    // --------------------------------
    // 1. HIDE EVERYTHING FROM FIRST SCREEN
    // --------------------------------

    birthdayScreen.style.display = "none";

    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").style.display = "none";

    // --------------------------------
    // 2. SHOW CAKE SCREEN
    // --------------------------------

    cakeScreen.style.display = "flex";

    // --------------------------------
    // 3. RESET CAKE
    // --------------------------------

    cakeArea.style.display = "none";

    const flames = document.querySelectorAll("#cake-area .flame");

    flames.forEach(flame => {
        flame.classList.remove("blown");
    });

    blowText.textContent = "🎂 Blow the candles! 💨";

    // --------------------------------
    // 4. START 5 SECOND COUNTDOWN
    // --------------------------------

    let count = 5;

    timer.style.display = "block";
    timer.textContent = count;

    const cakeCountdown = setInterval(() => {

        count--;

        if (count > 0) {

            timer.textContent = count;

        } else {

            clearInterval(cakeCountdown);

            // --------------------------------
            // 5. SHOW CAKE
            // --------------------------------

            timer.style.display = "none";
            cakeArea.style.display = "block";

            // --------------------------------
            // 6. WAIT 4 SECONDS
            // --------------------------------

            setTimeout(() => {

                // Blow candles
                flames.forEach(flame => {
                    flame.classList.add("blown");
                });

                blowText.textContent = "🎉 Make a wish! 💗";

                // --------------------------------
                // 7. GO TO MEMORIES
                // --------------------------------

                setTimeout(() => {

                    cakeScreen.style.display = "none";

                    memoriesScreen.style.display = "block";

                    // Stop birthday music
                    const birthdayMusic =
                        document.getElementById("birthday-music");

                    birthdayMusic.pause();
                    birthdayMusic.currentTime = 0;

                    // Start memories music
                    const memoriesMusic =
                        document.getElementById("memories-music");

                    memoriesMusic.play().catch(() => {});

                    // Go to top
                    window.scrollTo(0, 0);

                }, 1000);

            }, 4000);
        }

    }, 1000);
}

/*function startCakeSurprise() {

    const cakeScreen = document.getElementById("cake-screen");
    const timer = document.getElementById("cake-timer");
    const cakeArea = document.getElementById("cake-area");
    const blowText = document.getElementById("blow-text");

    // Show cake screen
    cakeScreen.style.display = "flex";

    let count = 5;

    timer.textContent = count;

    const countdown = setInterval(() => {

        count--;

        if (count > 0) {
            timer.textContent = count;
        } 
        
        else {

            clearInterval(countdown);

            // Hide timer
            timer.style.display = "none";

            // Show cake
            cakeArea.style.display = "block";

            // Wait 4 seconds
            setTimeout(() => {

                // Blow out candles
                const flames = document.querySelectorAll("#cake-area .flame");

                flames.forEach(flame => {
                    flame.classList.add("blown");
                });

                blowText.textContent = "🎉 Make a wish! 💗";

                // Wait a little after candles blow
                setTimeout(() => {

                    // Hide cake
                    cakeScreen.style.display = "none";

                    // Show memories
                    document.getElementById("memories-screen").style.display = "block";

                    // Scroll to memories
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 1000);

            }, 4000);
        }

    }, 1000);
}*/