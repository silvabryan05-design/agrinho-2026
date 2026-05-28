// ================= MENU RESPONSIVO =================

// Seleciona elementos
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Abre e fecha menu no mobile
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= SLIDER =================

// Seleciona slides
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

// Botões
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Função para mostrar slide
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

// Próximo slide
nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// Slide anterior
prevBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

// Slider automático
setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);


// ================= ANIMAÇÃO SCROLL =================

// Elementos com animação
const fadeElements = document.querySelectorAll(".fade-in");

// Detecta scroll
function checkScroll() {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            element.classList.add("show");
        }
    });
}

// Evento scroll
window.addEventListener("scroll", checkScroll);

// Executa ao carregar
checkScroll();
