var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 2
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor ="transparent"
//     })
//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95C11E"
//         crsr.style.backgroundColor ="#95C11E"
//     })
// })

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 4
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        // markers: true,
        end: "top -80%",
        scrub: 2
    }
})

// gsap.from("#about-us img, #about-us-in",{
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     // stagger: 4,
//     scrollTrigger:{
//         trigger: "page2",
//         scroller: "#about-us",
//         // markers: true,
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 3
//     }
// })