// Products data
const tendenciesProducts = [
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike"
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike"
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike"
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike"
  }
  //Add more
];


const products = [
    {
      title: "CR7 snekears",
      description: "Sneakers oficiales del SIIIIUUUU",
      img: "sustituir por una liga de una imagen del producto",
      quantityStock: 1,
      price: 1500,
      categories: ["Footbal", "Calzado"],
      brand: "Adiddas"
    },
    {
      title: "CR7 snekears",
      description: "Sneakers oficiales del SIIIIUUUU",
      img: "sustituir por una liga de una imagen del producto",
      quantityStock: 1,
      price: 1500,
      categories: ["Footbal", "Calzado"],
      brand: "Nike"
    },
    {
      title: "CR7 snekears",
      description: "Sneakers oficiales del SIIIIUUUU",
      img: "sustituir por una liga de una imagen del producto",
      quantityStock: 1,
      price: 1500,
      categories: ["Footbal", "Calzado"],
      brand: "Nike"
    },
    {
      title: "CR7 snekears",
      description: "Sneakers oficiales del SIIIIUUUU",
      img: "sustituir por una liga de una imagen del producto",
      quantityStock: 1,
      price: 1500,
      categories: ["Footbal", "Calzado"],
      brand: "Nike"
    }
    //Add more
  ];
// JavaScript render logic
document.addEventListener("DOMContentLoaded", () => {

// Fetch Blog content
    const blogContent = async () => {
        try {
          const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/college-football/news");  
          if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
            }
          const data = await response.json();  // Convertimos la respuesta a JSON
          console.log(data); // Para verificar qué estructura tiene la API
          renderBlogs(data.articles); // Llamamos a la función que renderiza los blogs
        } catch (error) {
        console.error("Error al obtener noticias:", error);
        }
      }
// Función para mostrar las noticias en el HTML
const renderBlogs = (articles) => {
    const tarjetaContainer = document.querySelector("#tarjetas-container .row"); //div donde tengo destinado renderizar tarjetas
    
    //renderizado de los últimos 3 artículos
    const ultimosArticulos = articles.slice(-3);

    ultimosArticulos.forEach(article => {
        const blogItem = document.createElement("div");
        blogItem.classList.add("col");
        blogItem.innerHTML = `
            <div class="card h-100 shadow-lg">
                <img src="${article.images[0].url}" class="card-img-top" alt="${article.images[0].caption}">
                <div class="card-body d-flex flex-column">
                    <div class="p-3 mb-2 bg-primary-subtle text-secondary-emphasis">
                    <h5 class="card-title text-center">${article.headline}</h5>
                    </div>
                    <p class="card-text text-wrap lh-base flex-grow-1">${article.description}</p>
                    <p class="text-muted fst-italic .bg-secondary-subtle">Published: ${article.published}</p>
                    <a href="${article.links.web.href}" class="btn btn-info" target="_blank">Leer más</a>
                </div>
            </div>
        `;
        tarjetaContainer.appendChild(blogItem);
    });
}

// Llamamos a la función para obtener los blogs
blogContent();

});
