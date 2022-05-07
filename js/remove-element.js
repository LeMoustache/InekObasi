const pcElement = document.querySelectorAll('.pc');
const phoneElement = document.querySelectorAll('.phone')


if ($(window).width() < 500) {
    pcElement.forEach(element => {
        element.remove()
    });
}else{
    phoneElement.forEach(element =>{
        element.remove()
    })
}