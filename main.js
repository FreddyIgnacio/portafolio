const proyectConainer = document.querySelector(".proyect-card-container");

const proyectList = [];
proyectList.push({
    name: "Movies Project",
    description: "Pagina de peliculas con consumo de una API",
    url: "https://freddyignacio.github.io/curso-api-res-de-platzi/#home",
    image: ("./img/movies.png"),
});
proyectList.push({
    name: "BatataBit",
    description: "Pagina hecha con HTML y CSS",
    url: "https://freddyignacio.github.io/Batatabit-mobaile-first/",
    image: ("./img/BatataBit.png"),
});
proyectList.push({
    name: "Tienda online",
    description: "Pagina responsive hecha con HTML, CSS y JS",
    url: "https://freddyignacio.github.io/proyecto-tienda/",
    image: ("./img/tienda.png"),
});
proyectList.push({
    name: "Game",
    description: "Video juego de laberintos hecho con JavaScript",
    url: "https://freddyignacio.github.io/videojuego-javascript/",
    image: ("./img/game.png"),
});
proyectList.push({
    name: "Figuras geometricas",
    description: "Figuras hecha con HTML, CSS y JavaScript",
    url: "https://freddyignacio.github.io/curso-practico-javascript-platzi/",
    image: ("./img/figuras.png"),
});
proyectList.push({
    name: "Proyecto de menu",
    description: "Pagina de menu hecha con HTML y CSS-GRID",
    url: "https://freddyignacio.github.io/menu-css-grid/",
    image: ("./img/food.png"),
});


for (proyect of proyectList) {
    const proyectCard = document.createElement("article");
    proyectCard.classList.add("proyect-card");

    const a = document.createElement("a");
    a.href = proyect.url;

    const proyectCardImg = document.createElement("div");
    proyectCardImg.classList.add("proyect-card--img");

    const proyectImg = document.createElement("img");
    proyectImg.setAttribute("src", proyect.image)

    const proyectCardTitle = document.createElement("h3")
    proyectCardTitle.classList.add("proyect-card--title")
    proyectCardTitle.innerText = proyect.name;

    const proyectCardDescription = document.createElement("p");
    proyectCardDescription.classList.add("proyect-card--description");
    proyectCardDescription.innerText = proyect.description;

    proyectCardImg.appendChild(proyectImg);

    a.appendChild(proyectCardImg);
    a.appendChild(proyectCardTitle);
    a.appendChild(proyectCardDescription);

    proyectCard.appendChild(a);

    proyectConainer.appendChild(proyectCard);
}