const menu = document.querySelector('.nav-bar')
const close = document.querySelector('.close')
const navs = document.querySelectorAll('.nav')

menu.addEventListener('click', bringInPlace)

function bringInPlace() {

    navs.forEach(nav => {
        nav.classList.add('visible')
    })
}

close.addEventListener('click', bringOutPlace)

function bringOutPlace() {

    navs.forEach(nav => {
        nav.classList.remove('visible')
    })
}