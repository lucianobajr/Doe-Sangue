document.querySelector("header button").addEventListener("click", function() {
    document.querySelector(".form").classList.toggle("hide");
});
(function() {
    // Theme switch
    var themeSwitch = document.getElementById("themeSwitch");
    if (themeSwitch) {
        initTheme(); // if user has already selected a specific theme -> apply it
        themeSwitch.addEventListener("change", function(event) {
            resetTheme(); // update color theme
        });

        function initTheme() {
            var darkThemeSelected =
                localStorage.getItem("themeSwitch") !== null &&
                localStorage.getItem("themeSwitch") === "dark";
            // update checkbox
            themeSwitch.checked = darkThemeSelected;
            // update body data-theme attribute
            darkThemeSelected
                ?
                document.body.setAttribute("data-theme", "dark") :
                document.body.removeAttribute("data-theme");
        }

        function resetTheme() {
            if (themeSwitch.checked) {
                // dark theme has been selected
                document.body.setAttribute("data-theme", "dark");
                localStorage.setItem("themeSwitch", "dark");
            } else {
                document.body.removeAttribute("data-theme");
                localStorage.removeItem("themeSwitch");
            }
        }
    }
})();

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function(letra, i) {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
const titulo = document.querySelector(".titulo-principal");
typeWrite(titulo);