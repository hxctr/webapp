let hamburguer_icon = document.querySelector('.hamburguer-icon');
let close_icon = document.querySelector('.close')

hamburguer_icon.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.overlay').style.width = '100%';
})

close_icon.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.overlay').style.width = '0%';
})
