// captura de elementos:
const navItems = document.querySelectorAll(".navItem"); // lista de enlaces

// esta funcion cambia el estado de cada uno de los enlaces de navegacion:
function activarLinks() {

    navItems.forEach((element) => {
        element.classList.remove("active");
        this.classList.add("active");
    });
}

navItems.forEach((e) => {
    e.addEventListener("click", activarLinks);
});

