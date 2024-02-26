var crsr  = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr.style.opacity = 1
    blur.style.left = dets.x -60 +"px"
    blur.style.top = dets.y -60 +"px"
    blur.style.opacity = 1
});
var anker = document.querySelectorAll("#anker");
anker.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#96c11f96"
        crsr.style.border = "none"
    })
}) 

gsap.to(".nav",{
    backgroundColor:"black",
    duration: 0.8,
    delay: 0.5,
    height: "55px",
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        backgroundColor: "black",
        //markers: true,
        start: "top -10%",
        end: "top -20%",
        scrub:1,

    }
});
gsap.to(".main",{
    backgroundColor:"black",
    delay: 0.5,
    duration: 1,
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        backgroundColor: "black",
       // markers:true,
        start: "top -50%",
        end: "top 100%",
        scrub: 3,

    }
})

gsap.from(".page2mini img",{
    duration:1.9,
    stagger: 0.8, 
    //scale: 0,
    opacity:0,
    y: -100,
    scrollTrigger:{
        trigger: ".page2mini img",
        scroller: "body", 
        scrub:true,
        //markers: true,
        start: "top 60%",
        end: "top 52%"
    }
})
gsap.from(".page2mini .about",{
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:".page2mini .about",
        scroller: "body",
        scrub: true,
        //markers: true,
        start: "top 80%",
        end:"top 55%"
}
})
/*gsap.from(".cards",{
    duration:1, 
    scale: 0.8,
    opacity:0,
    //x: -100,
    scrollTrigger:{
        trigger: ".cards",
        scroller: "body", 
        scrub:1,
        //markers: true,
        start: "top 60%",
        end: "top 52%"
    }
})*/
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
       // markers:true,
        start: "top 45%",
        end: "top 40%",
        scrub: 3
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        //markers:true,
        start: "top 45%",
        end: "top 40%",
        scrub: 4
    }
});
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });