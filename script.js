// =========================================
// HAPPY BIRTHDAY ATIF ❤️
// FINAL CINEMATIC VERSION
// =========================================

// Background
const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");

// Scenes
const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

// Music
const music = document.getElementById("music");

// Loading
const loadingScreen = document.getElementById("loadingScreen");

// ==============================
// SHOW SCENE
// ==============================

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

}

// ==============================
// STARS
// ==============================

for(let i=0;i<220;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// ==============================
// FLOATING HEARTS
// ==============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,450);

// ==============================
// FALLING ROSES
// ==============================

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌹";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*4)+"s";

    flowers.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },10000);

}

setInterval(createFlower,650);
// ==============================
// START BUTTON
// ==============================

startBtn.addEventListener("click", () => {

    loadingScreen.style.display = "none";

    if (music) {

        music.play().catch(() => {});

    }

    currentScene = 1;

    showScene(currentScene);

});

// ==============================
// AUTO SCENE CHANGE
// ==============================

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

// ==============================
// PHOTO SLIDESHOW
// ==============================

const slides = document.querySelectorAll(".slide");

let slideIndex = 0;

function changeSlide(){

    if(slides.length === 0) return;

    slides.forEach(slide=>{

        slide.style.display = "none";

    });

    slides[slideIndex].style.display = "block";

    slideIndex++;

    if(slideIndex >= slides.length){

        slideIndex = 0;

    }

}

changeSlide();

setInterval(changeSlide,3000);

// ==============================
// LOADING SCREEN
// ==============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loadingScreen.style.opacity="0";

        setTimeout(()=>{

            loadingScreen.style.display="none";

        },1000);

    },1500);

});
