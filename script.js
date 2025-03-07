const showBtn = document.getElementById('btn')
const showMenu = document.querySelector('.nav-links ul')
const incrementBtn = document.getElementById('addBtn')
const decrementBtn = document.getElementById('minusBtn')
const orderCount = document.getElementById('orderCount')
const amounttoPay = document.getElementById('amount')

const pricePerItem = 125;

showBtn.addEventListener('click', ()=> {
    showMenu.classList.add('active')
} )

showMenu.addEventListener('mouseleave', ()=> {
    showMenu.classList.remove('active')
})


incrementBtn.addEventListener('click', ()=> {
    let currentOrderCount = parseInt(orderCount.value)
    orderCount.value = currentOrderCount + 1
   
    const totalAmount = parseInt(orderCount.value) * pricePerItem;
    amounttoPay.innerHTML = `$${totalAmount}.00`;
})

decrementBtn.addEventListener('click', ()=> {
    if (orderCount.value > 0) {
        let currentOrderCount = parseInt(orderCount.value)
        orderCount.value = currentOrderCount - 1
    }

    const totalAmount = parseInt(orderCount.value) * pricePerItem;
        amounttoPay.innerHTML = `$${totalAmount}.00`;
})


const allImg = document.querySelectorAll('.images-list img');
const mainImg = document.getElementById('focusImg');

allImg.forEach((img) => {
    img.addEventListener('click', ()=> {
        mainImg.src = img.src ;
    })
})