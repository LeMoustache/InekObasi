const header = document.querySelector("header");

const faders = document.querySelectorAll(".onScroll");
const sliders = document.querySelectorAll(".slide");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fade2");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
