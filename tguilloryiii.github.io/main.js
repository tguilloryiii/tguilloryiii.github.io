const sections = document.querySelectorAll('section');
const navLi =  document.querySelectorAll('nav');

const overlay = document.getElementById('intro-overlay');

window.addEventListener('scroll', ()=> {
    let current = " ";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id')
        }
    })
    console.log(current)
})

overlay.addEventListener('animationend', () => {
  overlay.style.pointerEvents = 'none'; // allow interaction after animation
  overlay.style.display = 'none'; // optional: fully remove it
});