function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}
function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
  document
    .querySelector("#page1 .links i")
    .addEventListener("click", function () {
      scroll.scrollTo("#page2");
    });
}
function showimg() {
  var elems = document.querySelectorAll(".elem");
  var main = document.querySelector("#page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      main.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
function slide() {
  var flag = 0; // Variable to track the state (0: closed, 1: open)

  document
    .querySelector("#nav .nav-links i")
    .addEventListener("click", function () {
      var slideelm = document.querySelector("#nav .nav-links #slide");
      var slideprj = document.querySelector("#nav .nav-links #prj");
      // Toggle the state using if-else condition
      if (flag === 0) {
        slideelm.style.transform = "translateX(500%)";
        slideprj.style.transform = "translateX(250%)";

        flag = 1; // Set the flag to open state
      } else {
        slideelm.style.transform = "translateX(0)";
        slideprj.style.transform = "translateX(0)";

        flag = 0; // Set the flag to closed state
      }

      console.log(slideelm);
    });
}



loading();
locomotive();
showimg();
slide();
