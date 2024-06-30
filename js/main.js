/* ======================================================== */
// cambio de estado de cada uno de los enlaces de navegación
const navItems = document.querySelectorAll(".navItem"); // lista de enlaces
function activarLinks() {

    navItems.forEach((element) => {
        element.classList.remove("active");
        this.classList.add("active");
    });
}
navItems.forEach((e) => {
    e.addEventListener("click", activarLinks);
});

/* =================================================*/
// hacer que la barra de desplazamiento cambie de color:
const header = document.getElementById("header");
window.addEventListener('scroll', function(){

    // si el desplazamiento es superior a 20 entonces:
    if(this.scrollY > 20){
        header.classList.add("dark");
    }   // si retrocedemos entonces el encabezado retorna  a su estado original:
    else{
        header.classList.remove("dark");
    }
});

/* ================================================== */
// hacer aparecer la barra de navegación cuando la resolución disminuya
const wrapMenu = document.getElementById("wrapMenu");

/* ======================================================  */
// hacer que el contenido de la seccion principal cambie al oprimir una de las flechas de desplazamiento
// flechas:
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
// todos los ítems de la sección principal:
let items = document.querySelectorAll(".swiperItem");
let index = 0;
// desplazar item hacia la derecha(siguente)
function next(){
    items[index].classList.remove("visible");
    index = (index+1) % items.length; // avanza una posicion a la derecha
    items[index].classList.add("visible");
}
// desplazar item hacia la izquierda(atras)
function prev(){
    items[index].classList.remove("visible");
    index = (index-1+items.length) % items.length; // avanza una posicion a la derecha
    items[index].classList.add("visible");
}

leftArrow.addEventListener("click", prev);
rightArrow.addEventListener("click", next);

/* ======= crear los personajes o miembros de equipo */

window.addEventListener("load", crearEquipo);

function crearEquipo() {
    

    /* declaracion del arreglo que traerá nuestros personajes */
    let arrayEquipo= [];
      
        class PERSONAJE {

    constructor(nombre, foto, descripcion) { // clase personaje
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
    }

    }

    let calabaza = new PERSONAJE(
        "Jack",
        "./img/pumpkin.png",
        "El amargado del mes."
    );

    let hechicero = new PERSONAJE(
        "GreySkull",
        "./img/warlock.png",
        "No Molestar."
    );

    let momia = new PERSONAJE(
        "Tut",
        "./img/momia.png",
        "Cat's Lover."
    );

    arrayEquipo.push(calabaza, hechicero, momia); // inyectamos la información de cada uno de los personajes

    let card;  // este es el elemento que guardará las tarjetas
    const teamContainer = document.getElementById("teamContainer"); // class .itemContainer

    arrayEquipo.forEach((e) => { // por cada uno de los elementos de nuestro arreglo html se creará una tarjeta.
        
        card = `
        <div class="item">
            <img src=${e.foto} alt="" class="itemImage">
            <span class="itemName">${e.nombre}</span>
            <p class="itemParagraph">${e.descripcion}</p>
        </div>
        `;

        teamContainer.innerHTML  += card;

        // inyectamos informacion dentro del contenedor:
    });
}
