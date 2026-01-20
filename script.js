
let text1=document.querySelector(".text1")
let text2=document.querySelector(".text2")
let bottomtext1=document.querySelector(".bottomtext1")
let bottomtext2=document.querySelector(".bottomtext2")
let bottomtext3=document.querySelector(".bottomtext3")
let bottomtext4=document.querySelector(".bottomtext4")

let bars=document.querySelectorAll(".bar")

let headerimage= document.querySelector(".headerimage")


let text1ar=["Paper & Packaging","Healthcare Private Equity Report","Ai in healthcare","Ai Excecutive Guide"]

let text2ar=["Paper & <br> Packaging Report <br> 2026","Global <br> Healthcare <br> Private Equity <br> Report 2026",
    "Break through <br> Pharma's <br> Innovation <br> Bottleneck with <br> AI","The Pragmatic <br> CEO's Guide to Ai"
]

let images=["./lamp2.webp","./lamp3.webp","./lamp4.webp","./lamp1.webp"  ]
let bottomtexts=[bottomtext1,bottomtext2,bottomtext3,bottomtext4]

let downerp=document.querySelectorAll(".downer-inner div p")

let i=0;
let sliderTimer; 
function repeat(){
    bars.forEach(bar => {
        bar.style.maxWidth = "0";
        bar.style.transition="0s"
    });

    downerp.forEach((p)=>{
        p.style.fontWeight="normal"
    });

    downerp[i].style.fontWeight="bold";

    headerimage.style.transition="none"
    headerimage.style.transform="scale(1)"; 
    
    text1.innerHTML=text1ar[i]
    text2.innerHTML=text2ar[i];
    headerimage.src=images[i]

    clearTimeout(sliderTimer);

    requestAnimationFrame(() => {
        headerimage.style.transition = "transform 2.5s ease";
        headerimage.style.transform = "scale(1.2)";
    });
    bars[i].style.maxWidth="100%"
    bars[i].style.transition="2.5s"
   
    //THe downer-inner
    if (window.innerWidth < 578) {
        let slider = document.querySelector(".downer-inner");
        
        if (i === 2) {
            // Move to show the 3rd and 4th divs
            slider.style.transform = "translateX(-50%)";
            slider.style.transition = "transform 0.8s ease-in-out";
        } else if (i === 0) {
            // Move back to show the 1st and 2nd divs
            slider.style.transform = "translateX(0)";
            slider.style.transition = "transform 0.8s ease-in-out";
        }
    }
    console.log("fire")
    i=(i+1)%text1ar.length;

   
    
    sliderTimer = setTimeout(repeat, 2500);
}

function stopSlider() {
    clearTimeout(sliderTimer);
    console.log("Slider stopped by user interaction.");
    
}
document.querySelectorAll(".downer-inner > div").forEach((tab, index) => {
    tab.addEventListener("click", () => {
        stopSlider();
        bars.forEach(bar => {
            bar.style.maxWidth = "0";
            bar.style.transition="0s"
        });
        downerp.forEach((p)=>{
            p.style.fontWeight="normal"
        });
        downerp[index].style.fontWeight="bold";

        if(window.innerWidth<578){
        document.querySelector(".downerheader").style.overflowX="scroll"
    }else {
        // Ensure overflow is hidden on desktop
        document.querySelector(".downerheader").style.overflowX = "hidden";
    }
    document.querySelector(".downer-inner").style.transform = "translateX(0)";
        text1.innerHTML=text1ar[index]
        text2.innerHTML=text2ar[index];
        headerimage.src=images[index]
        bars[index].style.maxWidth="100%"
        bars[index].style.transition="2.5s"
        
    });
   
    
});

repeat()

//NAVIGATION

let nav = document.querySelector("nav");
let logo=document.querySelector(".logo")
let navdiv=document.querySelectorAll("nav div")
let navul=document.querySelector("nav ul")
let navi=document.querySelectorAll("nav ul i")
let explore=document.querySelector(".explore")

let scrolled=false;
window.addEventListener("scroll", () => {
    const pos = window.scrollY;
    if (pos > 50) {
        scrolled = true;
        nav.style.backgroundColor = "white";
        logo.style.color="red"
        navdiv.forEach((div)=>{
            div.style.color="black"
        })
        navul.style.color="black"
        navi.forEach((div)=>{
            div.style.color="red"
        })
        explore.style.display="none"
    } else {
        scrolled = false;
        nav.style.backgroundColor = "transparent";
        logo.style.color="white"
        navdiv.forEach((div)=>{
            div.style.color="white"
        })
        navul.style.color="white"
        navi.forEach((div)=>{
            div.style.color="white"
        })
        explore.style.display="block"
    }
});

nav.addEventListener("mouseenter",function(){
    nav.style.backgroundColor = "white";
    logo.style.color="red"
    navdiv.forEach((div)=>{
        div.style.color="black"
    })
    navul.style.color="black"
    navi.forEach((div)=>{
        div.style.color="red"
    })
    explore.style.color="black"
})
nav.addEventListener("mouseleave",function(){
    if(!scrolled){
    nav.style.backgroundColor = "transparent"; 
    logo.style.color="white"
    navdiv.forEach((div)=>{
        div.style.color="white"
    })
    navul.style.color="white"
    navi.forEach((div)=>{
        div.style.color="white"
    })
    explore.style.color="white"}
})


let tickIndustries=document.querySelector(".tick-industries")

let industries=document.querySelector(".industries")

let tickConsulting=document.querySelector(".tick-consulting")
let consulting=document.querySelector(".consulting")

let tickInsights=document.querySelector(".tick-insights")
let insights=document.querySelector(".insights")

let tickAbout=document.querySelector(".tick-about")
let about=document.querySelector(".about")


function menter(a,i){
    a.style.display="block";
    navi[i].style.transform="rotate(180deg)"
    navi[i].style.transition="transform 0.8s ease"
}
function mleave(a,i){
    a.style.display="none"
    navi[i].style.transform="rotate(-0deg)"
    navi[i].style.transition="transform 0.8s ease"
}

function lenter(a){
    a.style.display="block";
    nav.style.backgroundColor = "white";
    logo.style.color="red"
    navdiv.forEach((div)=>{
        div.style.color="black"
    })
    navul.style.color="black"
    navi.forEach((div)=>{
        div.style.color="red"
    })
    explore.style.color="black"
   
}
function lleave(a){
    a.style.display="none"
    if(!scrolled){
        nav.style.backgroundColor = "transparent"; 
        logo.style.color="white"
        navdiv.forEach((div)=>{
            div.style.color="white"
        })
        navul.style.color="white"
        navi.forEach((div)=>{
            div.style.color="white"
        })
        explore.style.color="white"}
  
}

industries.addEventListener("mouseenter",()=>{lenter(industries)})
industries.addEventListener("mouseleave",()=>{lleave(industries)})

consulting.addEventListener("mouseenter",()=>{lenter(consulting)})
consulting.addEventListener("mouseleave",()=>{lleave(consulting)})

insights.addEventListener("mouseenter",()=>{lenter(insights)})
insights.addEventListener("mouseleave",()=>{lleave(insights)})

about.addEventListener("mouseenter",()=>{lenter(about)})
about.addEventListener("mouseleave",()=>{lleave(about)})

tickIndustries.addEventListener("mouseenter",()=>{menter(industries,0)})
tickIndustries.addEventListener("mouseleave",()=>{mleave(industries,0)})

tickConsulting.addEventListener("mouseenter",()=>{menter(consulting,1)})
tickConsulting.addEventListener("mouseleave",()=>{mleave(consulting,1)})

tickInsights.addEventListener("mouseenter",()=>{menter(insights,2)})
tickInsights.addEventListener("mouseleave",()=>{mleave(insights,2)})


tickAbout.addEventListener("mouseenter",()=>{menter(about,3)})
tickAbout.addEventListener("mouseleave",()=>{mleave(about,3)})

let searchone=document.querySelector(".searchone");
let searchbar=document.querySelector(".searchbar")
let closeone=document.querySelector(".closeone");

searchone.addEventListener("click",function(){
    searchbar.classList.add("bring")
})
closeone.addEventListener("click",function(){
    searchbar.classList.remove("bring")
})

searchbar.addEventListener("mouseenter",function(){
    nav.style.backgroundColor = "white";
    logo.style.color="red"
    navdiv.forEach((div)=>{
        div.style.color="black"
    })
    navul.style.color="black"
    navi.forEach((div)=>{
        div.style.color="red"
    })
    explore.style.color="black"
})
searchbar.addEventListener("mouseleave",function(){
    if(!scrolled){
    nav.style.backgroundColor = "transparent"; 
    logo.style.color="white"
    navdiv.forEach((div)=>{
        div.style.color="white"
    })
    navul.style.color="white"
    navi.forEach((div)=>{
        div.style.color="white"
    })
    explore.style.color="white"}
})

let openone=document.querySelector(".openone")
let closetwo=document.querySelector(".closetwo")

let sidecontainer=document.querySelector('.sidecontainer')

openone.addEventListener("click",function(){
        sidecontainer.style.transform="translateX(0)"
        sidecontainer.style.transition="transform 0.8s ease"

        openone.style.transform="rotate(90deg)"
        openone.style.transition="transform 0.8s ease"
})

closetwo.addEventListener("click",function(){
    sidecontainer.style.transform="translateX(-100%)"
    sidecontainer.style.transition="transform 0.8s ease"

    openone.style.transform="rotate(0deg)"
        openone.style.transition="transform 0.8s ease"
})

document.addEventListener("click", (e) => {
    if(!sidecontainer.contains(e.target)&& e.target!==openone){
      sidecontainer.style.transform="translateX(-100%)"
    }
  });

  let closethree=document.querySelector(".closethree")
  let view=document.querySelector(".view")
  let cover=document.querySelector(".cover")

  closethree.addEventListener("click",function(){
    cover.style.display="none"
  })
  view.addEventListener("click",function(e){
    e.preventDefault()
    cover.style.display="grid"
  })


  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    allowTouchMove: true,   // ❌ no swiping
    effect: "fade",          // ✅ no sliding
    fadeEffect: {
      crossFade: true
    },
    speed: 300,           // control appear/disappear speed
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });
  