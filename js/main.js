const bth = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

bth.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
})
