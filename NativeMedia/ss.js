function adjustCubeHeight() {
    const faces = document.querySelectorAll('.face');
    const cubeContainer = document.querySelector('.cube-container');
    
    let maxHeight = 0;
    faces.forEach(face => {
        const height = face.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    cubeContainer.style.height = `${maxHeight+10}px`;
    const features = document.querySelectorAll('.featuresbox');
    let maxHeight1 = features.offsetHeight;
    document.querySelector(".featuresbox").style.height= `${maxHeight1}px`;
    console.log(maxHeight);
    faces[0].style.transform = `rotateX(0deg) translateZ(${maxHeight/2-1}px)`;
    faces[1].style.transform = `rotateX(180deg) translateZ(${maxHeight/2-1}px)`;
    faces[2].style.transform = `rotateX(90deg) translateZ(${maxHeight/2-1}px)`;
    faces[3].style.transform = `rotateX(-90deg) translateZ(${maxHeight/2-1}px)`;
}

window.addEventListener('load', adjustCubeHeight);
window.addEventListener('resize', adjustCubeHeight);

const cube = document.querySelector('.cube');
const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
tl.to(cube, {
    duration: 1,
    rotationX: -90,
    ease: "power2.inOut",
    delay:0,
})
.fromTo(
    ".err1",
    {
        opacity:0,
        scale:1
    },
    {
        opacity:1,
        scale:1.5,
        duration:1,
        ease:"power2.inOut",
        delay:0
    },
     "-=1"
)
.fromTo(
    ".err2",
    {
        opacity:0,
        scale:1
    },
    {
        opacity:1,
        scale:1.3,
        duration:1,
        ease:"power2.inOut",
        delay:0
    },
    "-=1"
)
.to(cube, {
    duration:1,
    rotationX: -180,
    ease: "power2.inOut",
    delay:2,
})
.to(
    ".imgtwo",
    {
        opacity:0,
    },
    "-=1"
)
.fromTo(
    ".imgone",
    {
        opacity:0,
        scale:0.8
    },
    {
        opacity:1,
        scale:1,
        duration:1,
        ease: "power2.inOut",
        delay:0
    },
    "-=1"
)
.to(cube, {
    duration: 1,
    rotationX: -270,
    ease: "power2.inOut",
    delay:2,
})
.to(
    ".imgone",
    {
        opacity:0,
    },
    "-=1"
)
.fromTo(
    ".img3",
    {
        opacity:0,
        scale:0.8
    },
    {
        opacity:1,
        scale:1,
        duration:1,
        ease: "power2.inOut",
        delay:0
    },
    "-=1"
)
.to(cube, {
    duration: 1,
    rotationX: -360,
    ease: "power2.inOut",
    delay:2,
})
.to(
    ".img3",
    {
        opacity:0,
    },
    "-=1"
)
.fromTo(
    ".imgone",
    {
        opacity:0,
        scale:0.8
    },
    {
        opacity:1,
        scale:1,
        duration:1,
        ease: "power2.inOut",
        delay:0
    },"-=1"
);

let t2=gsap.timeline(
    {
        scrollTrigger:{
            trigger:".cube",
            start:"90% center",
            end:"90% center",
            markers:false,
            toggleActions: "play none none reset",
        }
    }
);
t2.to(".f11",
    {
        x:"-25%",
        y:"34%",
        duration :1,
        ease:"power2.inOut",
    }
)
t2.to(".f12",
    {
        x:"-100%",
        y:"18%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t2.to(".f13",
    {
        x:"-43%",
        y:"-26%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t2.to(".f14",
    {
        x:"27%",
        y:"-15%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t2.to(".f15",
    {
        x:"95%",
        y:"-30%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t2.to(".f16",
    {
        x:"120%",
        y:"10%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t2.from(".c1",
    {
        opacity:0,
        duration:1,
        ease:"power2.inOut",
        scale:0.8,
    },
    0
);


let t3=gsap.timeline(
    {
        scrollTrigger:{
            trigger:".box1",
            start:"center center",
            end:"center center",
            markers:false,
            toggleActions: "play none none reset",
        }
    }
);
t3.to(".f21",
    {
        x:"-25%",
        y:"34%",
        duration :1,
        ease:"power2.inOut",
    }
)
t3.to(".f22",
    {
        x:"-100%",
        y:"18%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t3.to(".f23",
    {
        x:"-43%",
        y:"-26%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t3.to(".f24",
    {
        x:"27%",
        y:"-15%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t3.to(".f25",
    {
        x:"95%",
        y:"-30%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t3.to(".f26",
    {
        x:"120%",
        y:"10%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t3.from(".c2",
    {
        opacity:0,
        duration:1,
        ease:"power2.inOut",
        scale:0.8,
    },
    0
);



let t4=gsap.timeline(
    {
        scrollTrigger:{
            trigger:".box2",
            start:"center center",
            end:"center center",
            markers:false,
            toggleActions: "play none none reset",
        }
    }
);
t4.to(".f31",
    {
        x:"-25%",
        y:"34%",
        duration :1,
        ease:"power2.inOut",
    }
)
t4.to(".f32",
    {
        x:"-100%",
        y:"18%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t4.to(".f33",
    {
        x:"-43%",
        y:"-26%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t4.to(".f34",
    {
        x:"27%",
        y:"-15%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t4.to(".f35",
    {
        x:"95%",
        y:"-30%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t4.to(".f36",
    {
        x:"120%",
        y:"10%",
        duration :1,
        ease:"power2.inOut",
    },
    0
)
t4.from(".c3",
    {
        opacity:0,
        duration:1,
        ease:"power2.inOut",
        scale:0.8,
    },
    0
);



let t5 =gsap.timeline({
    scrollTrigger:{
        trigger:".box3",
        start:"center center",
        end:"center center",
        markers:false,
        toggleActions: "play none none reset",
    }
});
t5.from(
    ".pc1",
    {
        x:"-40%",
        duration:1,
        ease:"power2.inOut",
    }
)
t5.from(
    ".pc3",
    {
        x:"40%",
        duration:1,
        ease:"power2.inOut",
    },0
)
t5.from(
    ".pc2",
    {
        opacity:0,
        duration:1,
        ease:"power2.inOut",
    },0
)
t5.from(
    ".priceimg",
    {
        opacity:0,
        duration:1,
        ease:"power1.inOut",
        rotationZ:20,
    }
)

