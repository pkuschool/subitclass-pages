var clickBtn = document.querySelector('.modal_open')
var closeBtn = document.querySelector('.modal_use')
var modal = document.querySelector('.modal_float')
clickBtn.addEventListener('click', function () {
    modal.classList.toggle('modal_show')
})
closeBtn.addEventListener('click', function (){
    modal.classList.toggle('modal_show')
})