// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('solid', scrollY > 50); });

// Scroll Up
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Button Scroll
window.addEventListener("scroll", function () {
  const btn = document.getElementById("topBtn");

  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Bigger Pictures
function openLb(img) {
  const lb = document.getElementById("lb");
  const lbImg = document.getElementById("lb-img");

  console.log(img.src); // debug
  lbImg.src = img.src;

  lb.classList.add("show");
}

function closeLb() {
  document.getElementById("lb").classList.remove("show");
}

// Hero parallax trigger
window.addEventListener('load', () => { document.getElementById('heroBg').classList.add('loaded'); });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); window.scrollTo({top: t.getBoundingClientRect().top + scrollY - 80, behavior:'smooth'}); }
  });
});

// Reveal
const revEls = document.querySelectorAll('.reveal');
new IntersectionObserver((entries) => {
  entries.forEach((en, i) => {
    if(en.isIntersecting){ setTimeout(() => en.target.classList.add('vis'), i * 55); }
  });
}, {threshold:0.08}).observe
? (() => { const o = new IntersectionObserver(entries => { entries.forEach((en,i) => { if(en.isIntersecting){ setTimeout(()=>en.target.classList.add('vis'),i*55); } }); },{threshold:0.08}); revEls.forEach(el=>o.observe(el)); })()
: revEls.forEach(el=>el.classList.add('vis'));

// Accordion
document.querySelectorAll('.wh').forEach(hdr => {
  hdr.addEventListener('click', () => {
    const item = hdr.closest('.wi');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.wi').forEach(i => i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

// Tabs
document.querySelectorAll('.stab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.stab').forEach(t=>t.classList.remove('on'));
    document.querySelectorAll('.tab').forEach(c=>c.classList.remove('on'));
    tab.classList.add('on');
    document.getElementById('tab-'+tab.dataset.tab).classList.add('on');
  });
});

// Form
function handleForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent='✓ Anfrage gesendet — Wir melden uns bald!';
  btn.style.background='var(--green)';
  btn.disabled=true;
  setTimeout(()=>{ btn.textContent='Anfrage absenden'; btn.style.background=''; btn.disabled=false; }, 4000);
}