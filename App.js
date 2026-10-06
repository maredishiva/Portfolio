//! INITIALIZE AOS
AOS.init({
    duration: 800,
    once: true,
    mirror: false,
    offset: 40
});

//! GET IN TOUCH FORM
function validateForm(){
    let form = document.getElementById("contactForm")
    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let message = document.getElementById("message").value.trim()

    if(!name || !email || !message){
        alert("Please fill all the details before submitting")
        return false; //stops the form from submitting
    }
    setTimeout(()=>{
        alert("Form Submitted Successfully")
        form.reset()
    },500)
    return true;
}

//! DARK/LIGHT THEME
let theme = document.getElementById("themetoggle")

// Defensive: if the toggle isn't present, create a no-op object.
if (!theme) {
    theme = document.createElement('i')
    theme.id = 'themetoggle'
    theme.className = 'fa-solid fa-moon'
    // don't append to DOM automatically
}

// Load theme preference from localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
    if (theme.classList) {
        theme.classList.remove("fa-solid","fa-moon")
        theme.classList.add("fa-solid","fa-sun")
    }
}

if (theme.addEventListener) {
    theme.addEventListener("click", () => {
        document.body.classList.toggle("dark")

        if (document.body.classList.contains("dark")) {
            theme.classList.remove("fa-solid","fa-moon")
            theme.classList.add("fa-solid","fa-sun")
            localStorage.setItem("theme", "dark")
        } else {
            theme.classList.remove("fa-solid","fa-sun")
            theme.classList.add("fa-solid","fa-moon")
            localStorage.setItem("theme", "light")
        }
    })
}

const navLinks = document.querySelectorAll("#nav_aside_two > a")
const navigation = document.querySelector("nav")
const navToggle = document.getElementById("nav-toggle")

function closeMobileNavigation(){
    if (!navigation || !navToggle) return
    navigation.classList.remove("menu-open")
    navToggle.classList.remove("fa-xmark")
    navToggle.classList.add("fa-bars")
    navToggle.setAttribute("aria-expanded", "false")
    navToggle.setAttribute("aria-label", "Open navigation")
    navToggle.setAttribute("title", "Open navigation")
}

navToggle?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("menu-open")
    navToggle.classList.toggle("fa-bars", !isOpen)
    navToggle.classList.toggle("fa-xmark", isOpen)
    navToggle.setAttribute("aria-expanded", String(isOpen))
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation")
    navToggle.setAttribute("title", isOpen ? "Close navigation" : "Open navigation")
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"))
        link.classList.add("active")
        closeMobileNavigation()
    })
})

//! HERO SKILLS ORBIT
const heroOrbit = document.querySelector(".hero-orbit")

function positionHeroOrbitNodes(){
    if (!heroOrbit) return

    heroOrbit.querySelectorAll(".orbit-track").forEach((track) => {
        const radius = track.getBoundingClientRect().width / 2
        const center = track.clientWidth / 2
        track.querySelectorAll(".orbit-node").forEach((node) => {
            const angle = Number.parseFloat(node.style.getPropertyValue("--angle")) * Math.PI / 180
            node.style.left = `${center + Math.cos(angle) * radius}px`
            node.style.top = `${center + Math.sin(angle) * radius}px`
        })
    })
}

positionHeroOrbitNodes()
window.addEventListener("resize", positionHeroOrbitNodes)