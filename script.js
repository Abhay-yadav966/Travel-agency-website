

        let v=gsap.timeline({
        repeat:-1
    });

        v
        .to(".cont h1",{
            ease : Expo.easeInOut,
            duration: 5,
            stagger:5,
            top:0
        },"a")

        .to(".cont h1",{
            delay:5,
            ease : Expo.easeInOut,
            duration: 5,
            stagger:5,
            top:"200px"
        },"a")

Array.from(document.getElementsByTagName('input')).forEach((e ,i)=>{
    e.addEventListener('keyup', (el)=>{
        if(e.value.length >0){
            document.getElementsByClassName('fa-solid')[i].style.transform = "rotate(180deg)"
        } else{
            document.getElementsByClassName('fa-solid')[i].style.transform = "rotate(0deg)"
        }
    })
})
