"use strict"
// cuando hago CLICK en .Comment-content 
// TODOS los .Comment-content le REMOVE la clase isVisible
// al .Comment-content con ese index le ADD la clase isVisible
// TODOS los .Comment-profile le REMOVE la clase isVisible
// al .Comment-profile con ese index le ADD la clase isVisible
// TODOS los .Comment-interaction le REMOVE la clase isVisible
// al .Comment-interaction con ese index le ADD la clase isVisible

const commentContents = document.querySelectorAll('.Comment-content')
const commentProfiles = document.querySelectorAll('.Comment-profile')
const commentInteractions = document.querySelectorAll('.Comment-interaction')
console.log(commentContents)
console.log(commentProfiles)
console.log(commentInteractions)

commentContents.forEach((_, i) => {
    commentContents[i].addEventListener('click', () => {

        commentContents.forEach(content => content.classList.remove('isVisible'))
        commentContents[i].classList.add('isVisible')

        commentProfiles.forEach(profile => profile.classList.remove('isVisible'))
        commentProfiles[i].classList.add('isVisible')

        commentInteractions.forEach(interaction => interaction.classList.remove('isVisible'))
        commentInteractions[i].classList.add('isVisible')
    })
})  