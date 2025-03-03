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
  const blogContent = () => {
    try {
      const res = fetch();
    } catch (error) {
      throw new Error(error);
    }
  };
});
