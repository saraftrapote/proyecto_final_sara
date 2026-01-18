"use strict"

const carruselItems = document.querySelectorAll('.Carrousel-item')
const carruselTotalItems = carruselItems.length
const carrouselBtn = document.querySelectorAll('.Carrousel-btn')
const carrouselWrapper = document.querySelector('.Carrousel-wrapper')
console.log(carruselItems)
console.log(carruselItems.length)
console.log(carrouselBtn)
console.log(carrouselWrapper)

let contador = 0




carrouselBtn.forEach(( _ , index) => {
    carrouselBtn[index].addEventListener('click', () => {
        console.log('click en el botón')

        contador = index
        console.log(contador)

        carrouselWrapper.style.transform = `translateY(-${contador * (100 / carruselItems.length)}%)`
    }
)
})



const asideBtns = document.querySelectorAll('.Aside-btn')
const subbar = document.querySelector('.Aside-subbar')
const span = document.querySelector('.Aside-span')

let currentStep = 0
const totalSteps = asideBtns.length

asideBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        // AVANZAR
        if (index === currentStep) {
            asideBtns[index].classList.add('isActive')
            currentStep++
        }

        // RETROCEDER
        else if (index === currentStep - 1) {
            asideBtns[index].classList.remove('isActive')
            currentStep--
        }

        // ACTUALIZAR PROGRESO (si hubo cambio)
        else {
            return
        }

        const progressPercentage = (currentStep / totalSteps) * 100
        subbar.style.transform = `translateX(${progressPercentage - 100}%)`
        span.textContent = `${currentStep} / ${totalSteps}`
    })
})


// CUANDO CLICK EN .Hero-btn-svg
// .Hero-btn-svg LE ADD .isInactive
//  .Hero-btn-span LE ADD .isActive


const btnsvg = document.querySelector('.Hero-btn-svg');
const btnspan = document.querySelector('.Hero-btn-span');

    btnsvg.addEventListener('click', () => {
      btnsvg.classList.add('isInactive');
      btnspan.classList.add('isActive');
    })




 