
gsap.to("#page2 h1",{
    x:-1200,
    scrollTrigger:{
        Trigger:"#page2,h1",
        scroller:"body",
        markers:true,
        start:"top -90%",
        end:"top -110%",
        scrub:2
    }
})

gsap.to("#page2 h1",{
    Transform:"translateX(-200%)",
    scrollTrigger:{
        Trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top -90%",
        end:"top -110%",
        scrub:1,
        pin:true

    }
})