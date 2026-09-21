// Little Kitchen — shared site behavior

(function () {
  'use strict';

  /* ---- Language toggle (persists across pages via localStorage) ---- */
  function initLangToggle() {
    var saved = localStorage.getItem('lk-lang') || 'en';
    document.documentElement.setAttribute('lang', saved);

    var enBtn = document.getElementById('lang-en');
    var zhBtn = document.getElementById('lang-zh');
    if (!enBtn || !zhBtn) return;

    function setActive(lang) {
      document.documentElement.setAttribute('lang', lang);
      localStorage.setItem('lk-lang', lang);
      enBtn.classList.toggle('active', lang === 'en');
      zhBtn.classList.toggle('active', lang === 'zh');
    }
    setActive(saved);
    enBtn.addEventListener('click', function () { setActive('en'); });
    zhBtn.addEventListener('click', function () { setActive('zh'); });
  }

  /* ---- Reviews slider (Home page) ---- */
  function initReviewSlider() {
    var slides = document.querySelectorAll('.review-slide');
    if (!slides.length) return;
    var dots = document.querySelectorAll('.review-dot');
    var prevBtn = document.querySelector('.review-arrow.prev');
    var nextBtn = document.querySelector('.review-arrow.next');
    var current = 0;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
    }
    dots.forEach(function (d, idx) {
      d.addEventListener('click', function () { show(idx); });
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); });
    show(0);
  }

  /* ---- Menu category tabs (Menu page) ---- */
  function initMenuTabs() {
    var tabs = document.querySelectorAll('.menu-tab');
    var cats = document.querySelectorAll('.menu-category');
    if (!tabs.length) return;

    function show(i) {
      tabs.forEach(function (t, idx) { t.classList.toggle('active', idx === i); });
      cats.forEach(function (c, idx) { c.classList.toggle('active', idx === i); });
    }
    tabs.forEach(function (t, idx) {
      t.addEventListener('click', function () { show(idx); });
    });
    show(0);
  }

  /* ---- Robust video looping (hero videos) ---- */
  function initHeroVideos() {
    document.querySelectorAll('.hero-video').forEach(function (video) {
      video.loop = true;
      var tryPlay = function () {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      };
      video.addEventListener('ended', function () { video.currentTime = 0; tryPlay(); });
      video.addEventListener('pause', function () { if (!video.ended) tryPlay(); });
      video.addEventListener('stalled', tryPlay);
      video.addEventListener('suspend', tryPlay);
      video.addEventListener('loadedmetadata', tryPlay);
      tryPlay();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangToggle();
    initReviewSlider();
    initMenuTabs();
    initHeroVideos();
  });
})();
