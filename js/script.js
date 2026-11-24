const toggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".nav-menu");

toggle?.addEventListener("click", () => {

    const open = menu.classList.toggle("open");

    toggle.setAttribute("aria-expanded", open);

});


document.querySelectorAll(".nav-menu a").forEach(a =>

    a.addEventListener("click", () => {

        menu.classList.remove("open");

    })

);


/* =========================================
   PORTFOLIO TABS
========================================= */

document.querySelectorAll(".tabs button").forEach(btn => {

    btn.addEventListener("click", () => {

        document
            .querySelectorAll(".tabs button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

    });

});


/* =========================================
   HERO IMAGE SLIDER
========================================= */

const slides =
    document.querySelectorAll(".hero-slide");

const dots =
    document.querySelectorAll(".dots i");

const prev =
    document.querySelector(".hero-arrow.prev");

const next =
    document.querySelector(".hero-arrow.next");

let current = 0;


/* SHOW SLIDE */

function showSlide(index) {

    if (!slides.length) return;


    /* NEXT */

    if (index >= slides.length) {

        current = 0;

    }


    /* PREVIOUS */

    else if (index < 0) {

        current = slides.length - 1;

    }


    /* SELECTED */

    else {

        current = index;

    }


    /* CHANGE IMAGE */

    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === current
        );

    });


    /* CHANGE DOT */

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === current
        );

    });

}


/* NEXT BUTTON */

next?.addEventListener("click", () => {

    showSlide(current + 1);

});


/* PREVIOUS BUTTON */

prev?.addEventListener("click", () => {

    showSlide(current - 1);

});


/* DOT BUTTONS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* AUTOMATIC SLIDER */

setInterval(() => {

    if (!slides.length) return;

    showSlide(current + 1);

}, 4000);