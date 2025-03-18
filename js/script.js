import peliculas from './peliculas.js';

///////////////////////////////////Gen 28

const pelisAccPosterPath = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(28))
  .map(pelicula => pelicula.poster_path);

const pelisAccTitulo = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(28))
  .map(pelicula => pelicula.original_title);

console.log(pelisAccPosterPath);

const catchCajaAcc = document.getElementById("genero-28");


  catchCajaAcc.style.display = "flex";
  catchCajaAcc.style.flexWrap = "wrap";
  catchCajaAcc.style.gap = "10px";

  pelisAccPosterPath.forEach((rutaImagen, index) => {
    // Crear un contenedor para cada película
    const peliculaContainer = document.createElement("div");
    peliculaContainer.style.display = "flex";
    peliculaContainer.style.flexDirection = "column"; // Disponer imagen y título en columna
    peliculaContainer.style.alignItems = "center"; // Centrar horizontalmente
    peliculaContainer.style.justifyContent = "space-between";
    peliculaContainer.style.padding= "20px 0px 20px";

    // Crear la imagen
    const imgElement = document.createElement("img");
    imgElement.src = `https://image.tmdb.org/t/p/w500${rutaImagen}`;
    imgElement.alt = "Poster de película";
    imgElement.style.width = "150px";

    // Crear el título
    const h3Element = document.createElement("h3");
    h3Element.textContent = pelisAccTitulo[index]; // Usar el título correspondiente
    
    
    
    // Añadir imagen y título al contenedor de la película
    peliculaContainer.appendChild(imgElement);
    peliculaContainer.appendChild(h3Element);

    // Añadir el contenedor de la película al contenedor principal
    catchCajaAcc.appendChild(peliculaContainer);
  });



////////////////////////////////////////////////////////////////////Gen 53



const pelisSuspensePosterPath = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(53))
  .map(pelicula => pelicula.poster_path);

const pelisSuspenseTitulo = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(53))
  .map(pelicula => pelicula.original_title);

console.log(pelisSuspensePosterPath);

const catchCajaSuspense = document.getElementById("genero-53");

catchCajaSuspense.style.display = "flex";
catchCajaSuspense.style.flexWrap = "wrap";
catchCajaSuspense.style.gap = "10px";

pelisSuspensePosterPath.forEach((rutaImagen, index) => {
  // Crear un contenedor para cada película
  const peliculaContainer = document.createElement("div");
  peliculaContainer.style.display = "flex";
  peliculaContainer.style.flexDirection = "column"; // Disponer imagen y título en columna
  peliculaContainer.style.alignItems = "center"; // Centrar horizontalmente
  peliculaContainer.style.justifyContent = "space-between";
  peliculaContainer.style.padding = "20px 0px 20px";

  // Crear la imagen
  const imgElement = document.createElement("img");
  imgElement.src = `https://image.tmdb.org/t/p/w500${rutaImagen}`;
  imgElement.alt = "Poster de película";
  imgElement.style.width = "150px";

  // Crear el título
  const h3Element = document.createElement("h3");
  h3Element.textContent = pelisSuspenseTitulo[index];

  // Añadir imagen y título al contenedor de la película
  peliculaContainer.appendChild(imgElement);
  peliculaContainer.appendChild(h3Element);

  // Añadir el contenedor de la película al contenedor principal
  catchCajaSuspense.appendChild(peliculaContainer);
});





/////////////////////////////////////////Gen12

const pelisAventuraPosterPath = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(12))
  .map(pelicula => pelicula.poster_path);

const pelisAventuraTitulo = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(12))
  .map(pelicula => pelicula.original_title);

console.log(pelisAventuraPosterPath);

const catchCajaAventura = document.getElementById("genero-12");

catchCajaAventura.style.display = "flex";
catchCajaAventura.style.flexWrap = "wrap";
catchCajaAventura.style.gap = "10px";

pelisAventuraPosterPath.forEach((rutaImagen, index) => {
  // Crear un contenedor para cada película
  const peliculaContainer = document.createElement("div");
  peliculaContainer.style.display = "flex";
  peliculaContainer.style.flexDirection = "column"; // Disponer imagen y título en columna
  peliculaContainer.style.alignItems = "center"; // Centrar horizontalmente
  peliculaContainer.style.justifyContent = "space-between";
  peliculaContainer.style.padding = "20px 0px 20px";

  // Crear la imagen
  const imgElement = document.createElement("img");
  imgElement.src = `https://image.tmdb.org/t/p/w500${rutaImagen}`;
  imgElement.alt = "Poster de película";
  imgElement.style.width = "150px";

  // Crear el título
  const h3Element = document.createElement("h3");
  h3Element.textContent = pelisAventuraTitulo[index];

  // Añadir imagen y título al contenedor de la película
  peliculaContainer.appendChild(imgElement);
  peliculaContainer.appendChild(h3Element);

  // Añadir el contenedor de la película al contenedor principal
  catchCajaAventura.appendChild(peliculaContainer);
});





 
  