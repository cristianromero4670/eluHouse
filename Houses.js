/* background de la imagen */

window.addEventListener("scroll", function() {
    const bg = document.querySelector(".bg-parallax")
    let scrollPos =  window.scrollY
    bg.style.backgroundPosition = `center ${scrollPos * 0.3}px`
});