gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



setTimeout(function mainAnimation(){
  var tl = gsap.timeline()
  tl.from(".nav ,#logo ,#nav-link",{
    opacity: 0,
    y: -50,
    delay: 0.4,
    duration: 0.5,
    stagger: 0.3
})

gsap.from("#hello",{
    opacity: 0,
    x: -60,
    delay: 0.4,
    duration: 0.8,
    stagger: 1
})
gsap.from("#intro",{
    opacity: 0,
    x: 80,
    delay: 0.4,
    duration: 0.8,
    stagger: 1
})
gsap.from("#work",{
    opacity: 0,
    x: -60,
    delay: 0.4,
    duration: 0.8,
    stagger: 1
})
gsap.from("#btn",{
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 1
})
},4099)

gsap.to("#name-div h1", {
  transform: "translateX(calc( -100% - 6vw - 4px))",
    scrollTrigger: {
      trigger: "#name-div",
      scroller: ".main",
      scrub: 0.7,
    }
  })





var text = "";
document.querySelector(".about-part>p").textContent.split(" ").forEach(function(dets){
    text += `<span> ${dets} </span>`
    document.querySelector(".about-part>p").innerHTML = text
})

gsap.to(".about-part>p>span",{
    scrollTrigger:{
        trigger:".about-part>p>span",
        start:"top bottom",
        end:"bottom top",
        scroller:".main",
        duration:0.8,
        delay:2,
        scrub:2
    },
    stagger:1,
    color: "#ffff"

})

gsap.from(".page4>h1",{
  opacity:0,
  scrollTrigger:{
      trigger:".page4>h1",
      start:"top 50%",
      end:"bottom 50%",
      scroller:".main",
      duration: 0.8,
  },
  stagger:1,
  y:60
})
gsap.from(".page2 h4",{
  opacity:0,
  stagger:0.4,
  scrollTrigger:{
      trigger:".page2 h4",
      scroller:".main",
      start:"top 50%",
      delay:0.2
      
  },
  y:60

})
gsap.from(".page2 img",{
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
      trigger:".page2 img",
      scroller:".main",
      start:"top 50%",
      
  },
  x:25

})
function loaderAnimation(){
  var loader = document.querySelector(".loader")
setTimeout(function(){
  loader.style.top="-100%"

},4000)
}
loaderAnimation()