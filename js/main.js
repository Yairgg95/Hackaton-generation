// Products data
const tendenciesProducts = [
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
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
    brand: "Adiddas",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  {
    title: "CR7 snekears",
    description: "Sneakers oficiales del SIIIIUUUU",
    img: "sustituir por una liga de una imagen del producto",
    quantityStock: 1,
    price: 1500,
    categories: ["Footbal", "Calzado"],
    brand: "Nike",
  },
  //Add more
];

const bestsProducts = [
  {
    title: "Nike Air Jordan High",
    description:
      "Exclusiva colaboración de Nike x Travis Scott.",
    imageUrl:
      "https://media.revistagq.com/photos/5cd55e2a9d80fc6f38e3290e/4:3/w_1200,h_900,c_limit/air-jordan-travis-scott.jpg",
  },
  {
    title: "Puma x One Piece",
    description: "Se de los primeros en encontrar el One Piece.",
    imageUrl:
      "https://polvora.com.mx/wp-content/uploads/2024/02/one-piece-puma-suede-2.jpg",
  },
  {
    title: "Adidas x South Park",
    description: "No olvides llevar una toalla",
    imageUrl:
      "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RYEKG7TLURG45AZVAZOXG5JRZI.jpg",
  },
  {
    title: "Reebok X Kung Fu Panda",
    description: "Mi momento ha llegado",
    imageUrl:
      "https://legendarykicks.mx/wp-content/uploads/2021/01/thumb-kung-fu-panda-x-reebok-2021.jpg",
  },
];

// JavaScript render logic
document.addEventListener("DOMContentLoaded", () => {
  //Render best products cards
  const bestProductsContainer = document.getElementById("best-products");

  bestsProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-12 col-md-6 position-relative overflow-hidden product-container";
    productDiv.style.backgroundImage = `url(${product.imageUrl})`;
    productDiv.style.backgroundPosition = "center";
    productDiv.style.height = "250px";

    const content = document.createElement("div");
    content.className =
      "position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-50 w-100";

    const title = document.createElement("h3");
    title.innerText = product.title;

    const description = document.createElement("p");
    description.innerText = product.description;

    const exploreBtn = document.createElement("button");
    exploreBtn.className =
      "btn btn-dark product-btn sm-col-6 md-col-3 rounded-pill";
    exploreBtn.innerText = "Explorar";

    content.append(title, description, exploreBtn);

    productDiv.append(content);
    bestProductsContainer.append(productDiv);
  });

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
