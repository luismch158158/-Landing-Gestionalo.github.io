// Scroll reveal
window.sr = ScrollReveal();

const sr = ScrollReveal({
  origin: "top",
  distance: '60px',
  duration: 1500,
  delay: 100,
  reset: true
});



sr.reveal('.home_section, .nuestro-equipo, .tecnologias, .mensaje-final');

sr.reveal('.introduccion, .card-caracteristica, .acerca-de, .card-acerca, .equipo-card, .tecnologias-iconos, .botones-link, .card-icon-angular, .card-icon-jwt, .card-icon-sql, .card-icon-csharp', {interval:100});

