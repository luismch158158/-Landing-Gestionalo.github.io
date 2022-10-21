window.left = ScrollReveal();


const left = ScrollReveal({
  origin: "left",
  distance: '60px',
  duration: 1500,
  delay: 100,
  reset: true
});

left.reveal('.pasos', {interval:100});
left.reveal('.modo-uso');