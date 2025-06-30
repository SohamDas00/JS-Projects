let box=document.querySelector(".center")
box.addEventListener("mousemove",(details)=>{
    let corr=box.getBoundingClientRect();
    let corr_x=details.clientX-corr.x;
    if(corr_x>corr.width/2){
        let red_color=gsap.utils.mapRange(corr.width/2,corr.width,0,255,corr_x);
        gsap.to(box,{
            backgroundColor:`rgb(${red_color},0,0)`,
            ease:"power2",
        }) 
    }
    else{
        let blue_color=gsap.utils.mapRange(0,corr.width/2,255,0,corr_x);
        gsap.to(box,{
            backgroundColor:`rgb(0,0,rgb${blue_color})`,
            ease:"power2",
        }) 
    }
})
box.addEventListener("mouseleave",()=>{
    gsap.to(box,{
        backgroundColor:`rgb(255,255,255)`,
        ease:"power2",
    })
})
let value=document.querySelector(".heading")