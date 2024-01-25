let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=() =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=() =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}
//скриване на меню и  сърч бар
window.onscroll
//хедър функциите
let header = document.querySelector('header');
window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow',window.scrollY>0);
    });
//функции, които да отварят сайта на VW
function openVolkswagenBG() {
    window.open('https://www.volkswagen.bg/', '_blank');
}
function openWikiVolkswagen() {
    window.open('https://en.wikipedia.org/wiki/Volkswagen', '_blank');
}
function openPrivacy() {
    window.open('https://en.wikipedia.org/wiki/Privacy', '_blank');
}
function openCookies() {
    window.open('https://en.wikipedia.org/wiki/HTTP_cookie', '_blank');
}
function openRefund() {
    window.open('https://en.wikipedia.org/wiki/Return_Policy', '_blank');
}
function openFB() {
    window.open('https://www.facebook.com/?locale=bg_BG', '_blank');
}
function openInsta() {
    window.open('https://www.instagram.com/?hl=bg', '_blank');
}
