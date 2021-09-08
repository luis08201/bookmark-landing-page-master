

const btn = document.getElementById('header__toggle');

btn.addEventListener('click', () =>{
    btn.classList.toggle('active');
    const menu = document.getElementById('header__nav');
    menu.classList.toggle('active');
    const headerlogo = document.getElementById('header__svg');
    headerlogo.classList.toggle('active');
    const headercirclelogo = document.getElementById('header__svg1');
    headercirclelogo.classList.toggle('active');
    const headerbglogo = document.getElementById('header__svg2');
    headerbglogo.classList.toggle('active');
})