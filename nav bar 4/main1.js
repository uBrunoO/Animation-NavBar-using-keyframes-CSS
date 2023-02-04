// adicionar traço azul em baixo de cada link da barra de navegação quando for clicado

const links = document.querySelectorAll('.nav_links a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


// MENU

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open')
const closeNavBtn = document.querySelector('#nav_toggle-close')

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
}

openNavBtn.addEventListener('click', openNav);




const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNav);


//outra funcionalidade para recarregar a página quando a janela/navegador é redimensionada no javascript

window.addEventListener("resize", function () {
    if (document.body.clientWidth >= 900 && document.body.clientWidth <= 1200) {
        location.reload();
    }
});

const originalWidth = window.innerWidth;

window.addEventListener("resize", function () {
    if (originalWidth !== window.innerWidth) {
        location.reload();
    }
});


if (document.body.clientWidth < 1023) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    });
}


//observar a página do usuário quando ele começar a ver determinada seção da página, para poder adicionar uma animação

const observerOne = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            observerOne.unobserve(entry.target);
        }
    });
});

const sectionOne = document.querySelector('.zoom-section_one');
observerOne.observe(sectionOne);



const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            observerTwo.unobserve(entry.target);
        }
    });
});

const sectionTwo = document.querySelector('.zoom-section_two');
observerTwo.observe(sectionTwo);



const observerThree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            observerThree.unobserve(entry.target);
        }
    });
});

const sectionThree = document.querySelector('.zoom-section_three');
observerThree.observe(sectionThree);


const observerFour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            observerFour.unobserve(entry.target);
        }
    });
});

const sectionFour = document.querySelector('.zoom-section_four');
observerFour.observe(sectionFour);




