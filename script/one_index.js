import navbar from "../components/navbar.js";
import footer from "../components/footer.js";


document.getElementById("nav").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

document.getElementById("home").addEventListener("click", ()=>{
    window.location.href = "../game/index.html";
});