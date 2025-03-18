import peliculas from './peliculas.js';

///////////////////////////////////Gen 28


//Obtener las imagenes y los titulos de las pelis de accion del arrray principal:
const pelisAccPosterPath = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(28))
  .map(pelicula => pelicula.poster_path);

const pelisAccTitulo = peliculas
  .filter(pelicula => pelicula.genre_ids.includes(28))
  .map(pelicula => pelicula.original_title);

//Una vez obtenidos los datos necesarios vamos a maquetar dichos datos teniendo en cuenta el enunciado:

console.log(pelisAccPosterPath);
//Cathear el div genero-28:
const catchCajaAcc = document.getElementById("genero-28");

 //Darle estilo 
  catchCajaAcc.style.display = "flex";
  catchCajaAcc.style.flexWrap = "wrap";
  catchCajaAcc.style.gap = "10px";


  //Vamos a crear un forEach para que recorra  los dos arrays generados anteriormente y le vamos dando forma:
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

//Repetir programacion anterior cambiando variables y cambiando el genero a 53

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
  
  const peliculaContainer = document.createElement("div");
  peliculaContainer.style.display = "flex";
  peliculaContainer.style.flexDirection = "column";
  peliculaContainer.style.alignItems = "center"; 
  peliculaContainer.style.justifyContent = "space-between";
  peliculaContainer.style.padding = "20px 0px 20px";

  
  const imgElement = document.createElement("img");
  imgElement.src = `https://image.tmdb.org/t/p/w500${rutaImagen}`;
  imgElement.alt = "Poster de película";
  imgElement.style.width = "150px";

 
  const h3Element = document.createElement("h3");
  h3Element.textContent = pelisSuspenseTitulo[index];

  
  peliculaContainer.appendChild(imgElement);
  peliculaContainer.appendChild(h3Element);

 
  catchCajaSuspense.appendChild(peliculaContainer);
});





/////////////////////////////////////////Gen12

//Repetir programacion anterior cambiando variables y cambiando el genero a 12

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
  
  const peliculaContainer = document.createElement("div");
  peliculaContainer.style.display = "flex";
  peliculaContainer.style.flexDirection = "column"; 
  peliculaContainer.style.alignItems = "center"; 
  peliculaContainer.style.justifyContent = "space-between";
  peliculaContainer.style.padding = "20px 0px 20px";


  const imgElement = document.createElement("img");
  imgElement.src = `https://image.tmdb.org/t/p/w500${rutaImagen}`;
  imgElement.alt = "Poster de película";
  imgElement.style.width = "150px";

 
  const h3Element = document.createElement("h3");
  h3Element.textContent = pelisAventuraTitulo[index];

  
  peliculaContainer.appendChild(imgElement);
  peliculaContainer.appendChild(h3Element);

  
  catchCajaAventura.appendChild(peliculaContainer);
});





 
  