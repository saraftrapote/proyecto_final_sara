"use strict"


// QUIERO QUE AL HACER CLICK EN ELLAS COMPITEN SALGA UN PEQUEÑO MENU DESPLEGABLE


// cuando hago CLICK en .Header-li Header--interactive
// .Header-int LE ADD CLASS isOpen

const headerInteractive = document.querySelector('.Header--interactive')
const headerInt = document.querySelector('.Header-subul')

console.log (headerInteractive)
console.log (headerInt)

headerInteractive.addEventListener('mouseover',() => {
    headerInt.classList.add('isOpen')
    console.log('mouseover')
})

// cuando hago mouseover en .Header-subul
// .Header-subul LE Remove CLASS isOpen


headerInt.addEventListener('mouseleave',() => {
    headerInt.classList.remove('isOpen')
    console.log('mouseleave')
})


// cuando hago click en .Header-responsive
// .Header-nav LE TOGGLE CLASS isOpen

const headerResponsive = document.querySelector('.Header-responsive')
const headerNav = document.querySelector('.Header-nav')

console.log (headerResponsive)
console.log (headerNav)

headerResponsive.addEventListener('click',() => {
    headerNav.classList.toggle('isOpen')
    console.log('click')
})  
