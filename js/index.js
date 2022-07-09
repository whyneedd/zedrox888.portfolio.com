
var tl;

tl = gsap.timeline({ defauts: { ease: "power1.out" } });

tl.to(".header .logo a", { opacity: 1, duration: .5, y: 0, stagger: .25 });
tl.to(".navb a", { opacity: 1, duration: .5, y: 0, stagger: .25 });





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