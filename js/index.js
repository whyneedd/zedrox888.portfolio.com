
var tl;

tl = gsap.timeline({ defauts: { ease: "power1.out" } });

tl.to(".header .logo a", { opacity: 1, duration: .5, y: 0, stagger: .25 });
tl.to(".navb a", { opacity: 1, duration: .5, y: 0, stagger: .25 });

tl.to(".content__title", { opacity: 1, x: "0%", duration: .5, stagger: .25 })
tl.to(".content__description", { opacity: 1, x: "0%", duration: .5, stagger: .25 })
tl.to(".btn__content", { opacity: 1, y: "0%", duration: .5, stagger: .25 })




const headerActive = () => {
    window.addEventListener("scroll", function () {
        if (this.scrollY > 0) {
            document.querySelector(".js-header").classList.add("activeNav");

        }
        else {
            document.querySelector(".js-header").classList.remove("activeNav");
        }
    })
}

headerActive();