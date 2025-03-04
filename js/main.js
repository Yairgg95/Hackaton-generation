// Products data
const tendenciesProducts = [
  {
    id: 1,
    title: "Puma Rose",
    image:
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Calzado deportivo versátil, ideal para cualquier ocasión, con diseño moderno y comodidad duradera.",
    quantityStock: 1,
    price: 2500,
    categories: ["Fashion", " Calzado"],
    brand: "Puma",
  },
  {
    id: 2,
    title: "Nike Y2K",
    image:
      "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Tenis clásicos que combinan estilo y funcionalidad, perfectos para el día a día o actividades deportivas.Description for item 2",
    quantityStock: 1,
    price: 3800,
    categories: ["Diseñador", " Calzado"],
    brand: "Nike",
  },
  {
    id: 3,
    title: "Nike Air Max v2",
    image:
      "https://images.unsplash.com/photo-1600185365778-7875a359b924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    description:
      "Zapatillas cómodas y resistentes, diseñadas para ofrecer soporte y estilo en cada paso.",
    quantityStock: 1,
    price: 3500,
    categories: ["Comodidad", " Calzado"],
    brand: "Nike",
  },
  {
    id: 4,
    title: "Levi's",
    image:
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
    description:
      "Tenis con un diseño atemporal, ideales para un look casual y un rendimiento óptimo.",
    quantityStock: 1,
    price: 1800,
    categories: ["Casual", " Calzado"],
    brand: "Levi's",
  },
  {
    id: 5,
    title: "Jordan F5",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2N3x8fGVufDB8fHx8fA%3D%3D",
    description:
      "Calzado deportivo ligero y flexible, perfecto para movilidad y confort en cualquier actividad.",
    quantityStock: 1,
    price: 1500,
    categories: ["Basquetbol", " Calzado"],
    brand: "Jordan",
  },
];

const products = [
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

//Redender tendency productos from list as HTML components
const tendencyElement = document.getElementById("tendency");
let currentIndex = 0;
function renderItems() {
  tendencyElement.innerHTML = "";
  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (i < tendenciesProducts.length) {
      const col = document.createElement("div");
      col.className = "col-4 col-md-4 slider-item";
      col.innerHTML = `
        <div class="card h-100 border-0 clickable-card" data-index="${i}">
          <img src="${tendenciesProducts[i].image}" class="card-img-top h-50 object-fit-scale" alt="${tendenciesProducts[i].title}">
          <div class="card-body flex-grow-0">
            <h5 class="card-title fs-md-5 fs-6">${tendenciesProducts[i].title}</h5>
            <h5 class="card-title fs-md-5 fs-6">${tendenciesProducts[i].categories}</h5>
            <h5 class="card-title fs-md-5 fs-6">${tendenciesProducts[i].price}</h5>
          </div>
        </div>
      `;
      tendencyElement.appendChild(col);
    }
  }
  // Add click event listeners to cards
  document.querySelectorAll(".clickable-card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.getAttribute("data-index");
      showModal(tendenciesProducts[index]);
    });
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    if (currentIndex < tendenciesProducts.length - 3) {
      currentIndex++;
      renderItems();
    }
  });

  document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      renderItems();
    }
  });
}

// Function to show modal with item details
function showModal(item) {
  const modalContent = `
  <div class="modal fade" id="itemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="itemModalLabel">${item.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6">
                <img src="${item.image}" class="img-fluid rounded mb-3" alt="${item.title}">
              </div>
              <div class="col-12 col-md-6">
                <p><strong>Descripción:</strong> ${item.description}</p>
                <p><strong>Marca:</strong> ${item.brand}</p>
                <p><strong>Stock:</strong> ${item.quantityStock}</p> <!-- Updated here -->
                <p><strong>Precio:</strong> ${item.price}</p>
                <div class="input-group mb-3">
                  <input type="number" id="quantityInput" class="form-control" value="1" min="1" max="${item.quantityStock}"> <!-- Updated here -->
                  <button class="btn btn-primary" type="button" id="addToCartBtn">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  // Inject modal into the DOM
  document.body.insertAdjacentHTML("beforeend", modalContent);

  // Initialize the modal
  const modal = new bootstrap.Modal(document.getElementById("itemModal"));
  modal.show();

  // Add event listener "Agregar al carrito"
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantityInput").value);
    if (quantity >= 1 && quantity <= item.quantityStock) { // Updated here
      addToCart(item, quantity);
      modal.hide();
    } else {
      alert("Cantidad no válida. Asegúrate de no exceder el stock disponible.");
    }
  });

  // Remove modal from DOM after it's hidden
  document
    .getElementById("itemModal")
    .addEventListener("hidden.bs.modal", () => {
      document.getElementById("itemModal").remove();
    });
}

// Function to add item to cart
function addToCart(item, quantity) {
  console.log(`Added ${quantity} of ${item.title} to cart.`);
  const toastElement = document.getElementById("successToast");
  const toast = new bootstrap.Toast(toastElement); // Initialize the toast
  toast.show(); // Show the toast
}

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


renderItems();
  
// Llamamos a la función para obtener los blogs
blogContent();
});
