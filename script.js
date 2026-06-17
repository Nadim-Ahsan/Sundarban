/* =========================
   SUNDARBAN MAIN SCRIPT
   ========================= */

/* AOS INIT (animation) */
AOS.init({
    duration: 1000,
    once: true
});


/* =========================
   SMOOTH NAV SCROLL
   ========================= */
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e){
        const target = this.getAttribute("href");

        if(target.startsWith("#")){
            e.preventDefault();

            const section = document.querySelector(target);
            if(section){
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        }
    });
});


/* =========================
   HEADER SCROLL EFFECT
   ========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
        header.style.background = "rgba(255,255,255,0.95)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        header.style.background = "rgba(255,255,255,0.9)";
    }
});


/* =========================
   BUTTON CLICK EFFECT
   ========================= */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "translateY(-5px)";
        }, 150);
    });
});


/* =========================
   FLOATING HERO IMAGE BOOST
   ========================= */
const heroImg = document.querySelector(".hero-image img");

if(heroImg){
    setInterval(() => {
        heroImg.style.filter = "drop-shadow(0 10px 20px rgba(15,141,93,0.3))";
    }, 2000);
}


/* =========================
   SCROLL REVEAL EXTRA EFFECT
   ========================= */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if(rect.top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        } else {
            card.style.opacity = "0.7";
            card.style.transform = "translateY(20px)";
        }
    });
});


/* =========================
   INIT CARD STYLE (safe fallback)
   ========================= */
cards.forEach(card => {
    card.style.transition = "0.5s ease";
});
