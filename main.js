let active = 3;

let mncircles = document.querySelectorAll('.mncircle');
let sec = document.querySelectorAll('.sec');

gsap.to(mncircles[active - 1], {
    opacity: .5,
})
gsap.to(sec[active - 1], {
    opacity: 1,
})

mncircles.forEach(function(val,index) {
    val.addEventListener('click', function() {
        gsap.to('#circle', {
            rotate: (3-(index+1))* 10,
        })

        greyout();
        gsap.to(this, {
            opacity: .5,
            ease: Expo.easeInOut,
            duration: .5
        })
        gsap.to(sec[index], {
            opacity:1
        })

    })

})

function greyout () {
    gsap.to(mncircles, {
        opacity: .08
    })

    gsap.to(sec, {
        opacity:.4,
    })
}

gsap.to("#circle", {
    rotate:0,
    ease: Expo.easeInOut,
    duration:2,
})