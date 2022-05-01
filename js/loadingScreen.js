const loadingFrame = document.querySelector(".loadingFrame")
const mainBody = document.querySelector(".mainBody")

const tl = new TimelineMax();

$(window).on('load',function(){
    tl.fromTo(loadingFrame,.5,{opacity:'1'},{opacity:'0'},"+=2")
    .to(loadingFrame,1,{display:'none'}).to(mainBody,.25,{display:"grid"},"-=1").to(mainBody,1,{opacity:'1'},"-=1.25")
})