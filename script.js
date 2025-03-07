const showBtn = document.getElementById('btn')
const showMenu = document.querySelector('.nav-links ul')

showBtn.addEventListener('click', ()=> {
    showMenu.classList.add('active')
} )

showMenu.addEventListener('mouseleave', ()=> {
    showMenu.classList.remove('active')
})