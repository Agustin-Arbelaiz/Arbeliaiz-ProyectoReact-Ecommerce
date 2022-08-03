// Objeto base

class Birra {
    constructor (estilo, ibu, alcohol, precio, imagen,descripcion){
        this.estilo = estilo;
        this.ibu = ibu;
        this.alcohol = alcohol;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
//carga de objetos
const birra1 = new Birra ("Indian Pale Ale","45","6","450", "./images/jamineta.jpg", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra2 = new Birra ("Scottish export", "18", "5", "300", "./images/scottish.jpg", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra3 = new Birra ("Session Ipa", "25","4,5","400","./images/sessionipa.jpg", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra4 = new Birra ("Neipa","x","6,5","550","./images/neipa.jpg", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra5 = new Birra ("Catharina sour", "8","4,5","400", "./images/sour.jpg", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra6 = new Birra ("Golden Summer Ale","20","5,5","300","./images/goldeneta.webp", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
const birra7 = new Birra ("Doble Hazy Ipa", "x", "7,1","550","./images/copaipa.webp", "Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra Birra ");
//array de objetos
const cervezas = [];

cervezas.push(birra1);
cervezas.push(birra2);
cervezas.push(birra3);
cervezas.push(birra4);
cervezas.push(birra5);
cervezas.push(birra6);
cervezas.push(birra7);

function mostrarDetalles(cerveza){
    const contenedorDeBirras = document.getElementById("contenedor-de-birras");
    contenedorDeBirras.innerHTML= "";
    
    contenedorDeBirras.innerHTML= `
    <img src= "${cerveza.imagen}" alt="${cerveza.estilo}" >
    <h3>${cerveza.estilo}</h3>
    <br>
    <h4> ${cerveza.descripcion}</h4>
    <br>
    <p>${cerveza.ibu}</p>
    <p>${cerveza.alcohol}</p>
    <h5>${cerveza.precio} Pesitos </h5>

    `;

};

function mostrarBirras (cervezas){

    const contenedorDeBirras = document.getElementById("contenedor-de-birras");
    contenedorDeBirras.innerHTML ="";

    cervezas.forEach(cerveza => {
        const divCerveza = document.createElement ("div");
        divCerveza.classList.add("cerveza");
        divCerveza.innerHTML = `
            <img src= "${cerveza.imagen}" alt="${cerveza.estilo}" >
            <h3>${cerveza.estilo}</h3>
            <p>${cerveza.ibu}</p>
            <p>${cerveza.alcohol}</p>
            <h5>${cerveza.precio} Pesitos </h5>

        `;
        const detalleBirra = document.createElement("button");
        detalleBirra.innerText = "Caracteristicas generales";
        detalleBirra.addEventListener ("click", ()=> {
            mostrarDetalles(cerveza);
            botonVolver();
        });
        divCerveza.appendChild(detalleBirra);
        contenedorDeBirras.appendChild(divCerveza);
    });
};

function botonVolver(){
    const backButton = document.createElement("button");
    backButton.classList.add("boton-volver");
    backButton.innerText = "Atras";
    backButton.addEventListener("click", ()=>{
        mostrarBirras(cervezas);
    });
    document.getElementById("contenedor-de-birras").prepend(backButton);
}
mostrarBirras(cervezas);


