// main.js — Nicola Battistello personal site

(function () {
  "use strict";

  // NAV scroll shadow
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Mobile menu toggle
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
    // close on link click
    mobileMenu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => mobileMenu.classList.remove("open"))
    );
  }

  // Intersection Observer — entrance animations
  const animEls = document.querySelectorAll("[data-anim]");
  if (animEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      observer.observe(el);
    });
  }

  // Hero elements animate on load immediately
  document.querySelectorAll(".hero [data-anim]").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 100 + i * 150);
  });

})();
