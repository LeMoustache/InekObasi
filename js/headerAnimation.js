const logo = document.querySelector("#logo")
const logoText = document.querySelector("#logoText")

const aboutLink = document.querySelector("#aboutLink")
const projectLink = document.querySelector("#projectLink")
const contactLink = document.querySelector("#contactLink")

const dropbtn = document.querySelector('#dropbtn')


const tl = new TimelineMax();

tl.fromTo(logo,2,{x:'100%'},{x:'0%',ease:Power2.easeOut})
.fromTo(logoText,2,{x:'-50%',opacity:'0'},{x:'0%',opacity:'1',ease:Power2.easeOut},"-=2")
.from(aboutLink,1.5,{y:'-50',opacity:'0',ease:Power4.easeOut},"-=2")
.from(projectLink,1.5,{y:'-50',opacity:'0',ease:Power4.easeOut},"-=1.7")
.from(contactLink,1.5,{y:'-50',opacity:'0',ease:Power4.easeOut},"-=1.4")
.from(dropbtn,1.5,{y:'-50',opacity:'0',ease:Power4.easeOut},"-=2.5")

