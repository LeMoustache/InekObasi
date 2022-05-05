const header = document.querySelector("header");

const faders = document.querySelectorAll(".onScroll");
const fadersright = document.querySelectorAll(".fadein-rigth");
const faderswidth = document.querySelectorAll(".fadeWidth");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -10px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

fadersright.forEach(faderright => {
  appearOnScroll.observe(faderright);
});

faderswidth.forEach(faderwidth => {
  appearOnScroll.observe(faderwidth);
});

