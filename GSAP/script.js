gsap.from("h1",{
    y:30,
color:"red",
opacity:0,
duration:2,
delay:1,
stagger:1,
repeat:Infinity,
yoyo:true
})

gsap.from("h3",{
    x:-100,
color:"green",
opacity:1,
duration:4,
delay:1.5,
stagger:1
})

gsap.to("#box1",{
    x:900,
    duration:6,
    Delay:3,
    rotate:360,
    backgroundColor:"gold",
    borderRadius:"50%",
    scale:.2,
    repeat:-1,
    yoyo:true
})


var tl = gsap.timeline()

tl.from("h2",{
   
    y:-20,
    opacity:0,
    duration:1.5,
    delay:1,
    stagger:1,
    yoy:true,
   

})
tl.from("#part2",{
   
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:1

})

tl.to("#box2",{
x:900,
duration:6,
dealy:1,
rotate:360,
backgroundColor:"blue",
borderRadius:"60%",
scale:.8,
repeat:Infinity,
yoyo:true
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360  
 
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
 
})
gsap.from("#page4 #box",{
    scale:0,
    delay:1,
    duration:2,
 
})