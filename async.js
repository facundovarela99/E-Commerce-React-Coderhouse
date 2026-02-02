fetch(`https://dummyjson.com/products/11`)
            .then(res=>res.json())
            .then(data=>console.log(data.description))
//Generar un GenreContainer, que dentro tenga la lógica que llame al genero clickeado en la navbar, traiga su descripción, y en lo posible, los juegos de ese género.

// const genero = await obtenerDetalleGenero(1);
// console.log(genero);

// const generos = await obtenerGeneros();