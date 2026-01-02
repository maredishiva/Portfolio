//! INITIALIZE AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
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

// Load theme preference from localStorage
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark")
    theme.classList.remove("fa-solid","fa-moon")
    theme.classList.add("fa-solid","fa-sun")
}

theme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        theme.classList.remove("fa-solid","fa-moon")
        theme.classList.add("fa-solid","fa-sun")
        localStorage.setItem("theme", "dark")
    }else{
        theme.classList.remove("fa-solid","fa-sun")
        theme.classList.add("fa-solid","fa-moon")
        localStorage.setItem("theme", "light")
    }
})