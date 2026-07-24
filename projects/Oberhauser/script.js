// Nav
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => { nav.classList.toggle('solid', scrollY > 60); });

  // Hero zoom
  window.addEventListener('load', () => {
    document.getElementById('heroBg').classList.add('loaded');
  });

  // Top button
  function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }
  window.addEventListener("scroll", () => {
    document.getElementById("topBtn").style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' }); }
    });
  });

  // Reveal
  const ro = new IntersectionObserver(entries => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) { setTimeout(() => en.target.classList.add('vis'), i * 60); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  // Tabs Küche
  document.querySelectorAll('.mtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.mtab').forEach(t => t.classList.remove('on'));
      document.querySelectorAll('.mtab-content').forEach(c => c.classList.remove('on'));
      tab.classList.add('on');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('on');
    });
  });

  // Auto-scroll photo strip
  const strip = document.getElementById('photoStrip');
  let pos = 0, dir = 1;
  function autoScroll() {
    if (!strip) return;
    pos += dir * 0.5;
    if (pos >= strip.scrollWidth - strip.clientWidth) dir = -1;
    if (pos <= 0) dir = 1;
    strip.scrollLeft = pos;
    requestAnimationFrame(autoScroll);
  }
  setTimeout(autoScroll, 2000);

  // Lightbox
  function openLb(img) {
    document.getElementById("lb-img").src = img.src;
    document.getElementById("lb").classList.add("show");
  }
  function closeLb() { document.getElementById("lb").classList.remove("show"); 
  }
