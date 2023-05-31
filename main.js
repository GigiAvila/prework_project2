
const main = document.querySelector("main");
main.innerHTML = "";


const PRODUCTS = [
  {
    name: 'Cesta de frutas y verduras - 4 kg',
    category: 'Frutas y verduras',
    price: 14,
    seller: 'Campo1',
    image: 'https://camarasafruits.es/wp-content/uploads/2020/05/cestas-de-verdura-scaled-1.jpg',
    organic: true,
  },
  {
    name: 'Cesta de frutas y verduras - 8 kg',
    category: 'Frutas y verduras',
    price: 20,
    seller: 'Campo1',
    image: 'https://camarasafruits.es/wp-content/uploads/2020/05/cestas-de-verdura-scaled-1.jpg',
    organic: true,

  },
  {
    name: 'Cesta de frutas y verduras - 12 kg',
    category: 'Frutas y verduras',
    price: 34,
    seller: 'Campo1',
    image: 'https://camarasafruits.es/wp-content/uploads/2020/05/cestas-de-verdura-scaled-1.jpg',
    organic: true,

  },
  {
    name: 'Lenteja roja',
    category: 'Legumbres',
    price: 3.5,
    seller: 'Biogranja',
    image: './Assets/lentejas.jpg',
    organic: false,

  },

  {
    name: 'Garbanzos',
    category: 'Legumbres',
    price: 3.2,
    seller: 'Biogranja',
    image: './Assets/garbanzos.jpg',
    organic: false,
  },
  {
    name: 'Alubias',
    category: 'Legumbres',
    price: 3.10,
    seller: 'Biogranja',
    image: './Assets/alubias.jpg',
    organic: false,
  },

  {
    name: 'Leche vegetal de soja',
    category: 'Otros productos',
    price: 3.30,
    seller: 'Biogranja',
    image: './Assets/leche.jpg',
    organic: true,

  },
  {
    name: 'Miel',
    category: 'Otros productos',
    price: 2.30,
    seller: 'Biogranja',
    image: './Assets/miel.jpg',
    organic: true,

  },
  {
    name: 'Harina de almendras',
    category: 'Harinas y cereales',
    price: 3.30,
    seller: 'Campo1',
    image: './Assets/harinadealmendras.jpg',
    organic: true,
  },

  {
    name: 'Galletas sin gluten',
    category: 'Harinas y cereales',
    price: 4.5,
    seller: 'Befree',
    image: './Assets/galletas.jpg',
    organic: false,

  },
  {
    name: 'Arroz yamani',
    category: 'Harinas y cereales',
    price: 3.6,
    seller: 'Biogranja',
    image: './Assets/arroz.jpg',
    organic: true,

  },
  {
    name: 'Huevos de campo',
    category: 'Otros productos',
    price: 3,
    seller: 'Biogranja',
    image: './Assets/huevos.jpg',
    organic: true,

  },
]


// CARTAS
const paintcards = () => {

  for (const product of PRODUCTS) {
    const card = document.createElement("div");
    const imgWrp = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const category = document.createElement("h3");
    const price = document.createElement("p");
    const seller = document.createElement("p");
    const organic = document.createElement("p");
    const buyButton = document.createElement("button");

    card.className = "carta";
    imgWrp.className = "img_wrp";
    seller.className = "vendedor"
    organic.className = "organic"
    name.className = "nombre"
    category.className = "categoria";
    price.className = "precio"
    buyButton.className = "boton_compra"


    image.src = product.image;
    name.textContent = product.name;
    category.textContent = product.category
    seller.textContent = product.seller;
    price.textContent = `${product.price} euros`;
    organic.textContent = product.organic ? "ORGANICO 🌱" : " ";
    buyButton.textContent = "Comprar";

    buyButton.addEventListener("click", () => {
      addTrolley(product); // product elemento que quiero modificar

    })

    main.appendChild(card);
    card.appendChild(imgWrp);
    imgWrp.appendChild(image);
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(seller);
    card.appendChild(price);
    card.appendChild(organic);
    card.appendChild(buyButton);
  }
}

paintcards();




//ASIDE DISEÑO
const aside = document.querySelector("aside");
aside.innerHTML = " ";

const searchBarContainer = document.createElement("div");
const searchBarLabel = document.createElement("label");
const searchBarWrapper = document.createElement("div");
const searchBar = document.createElement("input");
const searchBarImg = document.createElement("img");
const divCategoriesFilter = document.createElement("div");
const titleFilter = document.createElement("h3");

divCategoriesFilter.className = "categories_filter";
titleFilter.className = "title_filter";

searchBarContainer.className = "searchbar_container";
searchBarWrapper.className = "searchbar_wrapper";
searchBarLabel.className = "searchbar_label";
searchBar.className = "searchbar_input";
searchBar.type = "text";
searchBar.id = "searchBar"
searchBar.placeholder = "Busca tu producto aquí"
searchBarImg.src = "./Assets/loupe.png";
titleFilter.textContent = "Filtro de categoría";
searchBarLabel.textContent = "Filtra por nombre";
searchBarLabel.setAttribute("for", "searchBar");


aside.appendChild(titleFilter);
aside.appendChild(divCategoriesFilter);
aside.appendChild(searchBarContainer);
searchBarContainer.appendChild(searchBarLabel);
searchBarContainer.appendChild(searchBarWrapper);
searchBarWrapper.appendChild(searchBar);
searchBarWrapper.appendChild(searchBarImg);


// CREA FILTRO CATEGORIA ASIDE

const categories = [];
let checkboxCategory;

const categoryDisplay = () => {
  for (const product of PRODUCTS) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }

  categories.forEach((category, i) => {
    const categoryContainer = document.createElement("div");
    const categoryLabel = document.createElement("label");
    checkboxCategory = document.createElement("input");

    categoryContainer.className = "category_container";
    categoryLabel.textContent = category;
    checkboxCategory.type = "checkbox";
    checkboxCategory.id = `category_checkbox_${i}`;

    categoryLabel.setAttribute("for", `category_checkbox_${i}`);

    divCategoriesFilter.appendChild(categoryContainer);
    categoryContainer.append(categoryLabel);
    categoryContainer.appendChild(checkboxCategory);

    checkboxCategory.addEventListener("change", (e) => paintCategory(e, categoryLabel));
  });
};

categoryDisplay();

const paintCategory = (e, categoryLabel) => {
  const selectedCategory = e.target.id;
  const checkbox = document.getElementById(selectedCategory);

  if (checkbox.checked) {
    categoryLabel.classList.add('selected');
    categoryLabel.style.backgroundColor = '#B2E4DB';

    const cards = document.querySelectorAll('.carta');
    cards.forEach((card) => {
      const category = card.querySelector('.categoria').textContent;
      const checkboxId = `category_checkbox_${categories.indexOf(category)}`;

      if (checkboxId !== selectedCategory) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  } else {
    categoryLabel.classList.remove('selected');
    categoryLabel.style.backgroundColor = '';

    const cards = document.querySelectorAll('.carta');
    cards.forEach((card) => {
      card.style.display = 'block';
    });
  }
};


// FILTRO POR NOMBRE 
const normalizetext = text => text.trim().toLowerCase();


const searchProducts = () => {
  const searchInputText = normalizetext(searchBar.value);

  const filteredProducts = PRODUCTS.filter((product) =>
    normalizetext(product.name).includes(searchInputText)
  );

  const cards = document.querySelectorAll('.carta');
  let productFound = false;

  cards.forEach((card) => {
    const productName = card.querySelector('.nombre').textContent.toLowerCase().trim();

    if (filteredProducts.some((product) => normalizetext(product.name) === productName)) {
      card.style.display = 'block';
      productFound = true;
    } else {
      card.style.display = 'none';
    }
  });
  // MENSAJE AUTOMATICO  
  if (productFound === false) {
    const existingMessage = document.querySelector('.no_results_message');
    if (!existingMessage) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'Lo sentimos, no tenemos este producto... ¡por ahora!';
      noResultsMessage.className = 'no_results_message';
      main.appendChild(noResultsMessage);
    }
  } else {
    const existingMessage = document.querySelector('.no_results_message');
    if (existingMessage) {
      main.removeChild(existingMessage);
    }
  }
};

const showAllProducts = () => {
  const cards = document.querySelectorAll('.carta');
  const existingMessage = document.querySelector('.no_results_message');

  cards.forEach((card) => {
    card.style.display = 'block';
  });
  if (existingMessage) {
    main.removeChild(existingMessage);
  }
};

// FILTRO BUSQUEDA POR NOMBRE AL HACER CLICK EN LA LUPA
searchBarImg.addEventListener('click', searchProducts);

//PARA QUE VUELVAN LAS CARTAS AL MAIN 
searchBar.addEventListener('input', () => {
  if (searchBar.value === '') {
    showAllProducts();
  }
});


