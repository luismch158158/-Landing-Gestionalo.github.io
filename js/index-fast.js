window.fast = ScrollReveal();


const fast = ScrollReveal({
  origin: "top",
  distance: '20px',
  duration: 1000,
  delay: 50,
  reset: true
});

fast.reveal('.acerca-de, .card-acerca', {interval:30});