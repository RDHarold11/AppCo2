document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector(".nav-items").classList.toggle('show')
});

ScrollReveal().reveal('.content');
ScrollReveal().reveal('.features', {delay: 500});
ScrollReveal().reveal('.features__cards__info', {delay: 500});
ScrollReveal().reveal('.help', {delay: 500});
ScrollReveal().reveal('.prices', {delay: 500});
ScrollReveal().reveal('.screenshots', {delay: 500});
ScrollReveal().reveal('.contact', {delay: 500});
ScrollReveal().reveal('.formularios', {delay: 500});
ScrollReveal().reveal('.download', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});