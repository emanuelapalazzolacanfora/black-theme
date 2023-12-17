const allNavBtn = document.querySelectorAll('nav ul li');
const btnBurger = document.querySelector('#menu-icon');

btnBurger.addEventListener('click', () => {
    document.querySelector('nav').style.height = '';
})

allNavBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('nav').style.height = 0;
        document.querySelector('#close-icon').click();
    })
});