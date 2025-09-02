//menu change form to movil adjustment
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
// image change part
const images = [
  'images/clients1.jpg',
  'images/clients2.jpg',
  'images/alt1.jpg',
  'images/alt2.jpg'
];
//select image in DOM
const autoImg = document.getElementById('auto-img');
//indice for now the indice of the actual img
let currentIndex = 0;
//change the image each minut
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  autoImg.src = images[currentIndex];
}, 5000); // 60000 ms = 1 minut