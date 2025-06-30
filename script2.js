let box=document.querySelector('.rec')
window.addEventListener("mousemove",(details)=>{
    gsap.to(box,{
        left:details.clientX+"px",
        top:details.clientY+"px",
        ease:"power3"
    })
})