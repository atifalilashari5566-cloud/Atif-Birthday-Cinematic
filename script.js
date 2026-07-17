// ==========================================
// HAPPY BIRTHDAY ATIF ❤️
// CINEMATIC VERSION
// ==========================================

// Background Containers
const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");

// Scenes
const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

// Music
const music = document.getElementById("music");

// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

// Loading Screen
const loadingScreen = document.getElementById("loadingScreen");

// =========================
// SHOW SCENE
// =========================

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

}

// =========================
// STARS
// =========================

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// =========================
// HEARTS
// =========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),9000);

}

setInterval(createHeart,500);

// =========================
// ROSES
// =========================

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌹";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*5)+"s";

    flowers.appendChild(flower);

    setTimeout(()=>flower.remove(),11000);

}

setInterval(createFlower,700);
// =========================
// START BUTTON
// =========================

startBtn.addEventListener("click", () => {

    loadingScreen.style.display = "none";

    music.play().catch(() => {});

    currentScene = 1;

    showScene(currentScene);

});

// =========================
// AUTO SCENE CHANGE
// =========================

function nextScene(){

    if(currentScene < scenes.length - 1){

        currentScene++;

        showScene(currentScene);

    }

}

setInterval(()=>{

    if(currentScene > 0 && currentScene < 3){

        nextScene();

    }

},8000);

// =========================
// PHOTO SLIDESHOW
// =========================

const slides = document.querySelectorAll(".slide");

let slideIndex = 0;

function changeSlide(){

    if(slides.length === 0) return;

    slides.forEach(slide=>{

        slide.style.display="none";

    });

    slides[slideIndex].style.display="block";

    slideIndex++;

    if(slideIndex >= slides.length){

        slideIndex = 0;

    }

}

changeSlide();

setInterval(changeSlide,3000);
// =========================
// TYPEWRITER LETTER
// =========================

const typing = document.getElementById("typing");

const message = `Dear Atif ❤️

Happy Birthday! 🎂

May Allah bless you with happiness,
good health,
success,
peace,
and endless smiles.

May every dream of yours come true.

Stay happy...
Stay blessed...
Keep smiling forever. ❤️

✨ Happy Birthday ✨`;

let charIndex = 0;

function typeWriter() {

    if (!typing) return;

    if (charIndex < message.length) {

        typing.innerHTML += message.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 45);

    }

}

// Typewriter starts when Scene 3 opens
setTimeout(typeWriter, 17000);

// =========================
// CONTINUE BUTTON
// =========================

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        currentScene = 3;

        showScene(currentScene);

    });

}

// =========================
// GIFT
// =========================

const gift = document.getElementById("gift");

if (gift) {

    gift.addEventListener("click", () => {

        gift.innerHTML = "❤️";

        gift.style.transform = "scale(1.2)";

        alert("🎉 Happy Birthday Atif ❤️\n\nMay Allah bless you always! 🎂");

    });

}

// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 1000);

    }, 1500);

});
