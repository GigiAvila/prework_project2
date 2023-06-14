// SETUP

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



const aside = document.querySelector("aside");
aside.innerHTML = " ";


const filterCategoryWrapper = document.createElement("div");
const searchBarPriceFilterandButtonContainer = document.createElement("div");

const searchBarContainer = document.createElement("div");
const searchBarLabel = document.createElement("label");
const searchBarWrapper = document.createElement("div");
const searchBar = document.createElement("input");
const searchBarImg = document.createElement("img");
const divCategoriesFilter = document.createElement("div");
const titleFilter = document.createElement("h3");

divCategoriesFilter.className = "categories_filter";
titleFilter.className = "title_category_filter";

searchBarPriceFilterandButtonContainer.className = "others_filter_wrapper"
searchBarContainer.className = "searchbar_container";
searchBarWrapper.className = "searchbar_wrapper";
searchBarLabel.className = "searchbar_label";
searchBar.className = "searchbar_input";
searchBar.type = "text";
searchBar.id = "searchBar"
searchBar.placeholder = "Busca tu producto aquí"
searchBarImg.src = "./Assets/loupe1.png";
titleFilter.textContent = "Filtro de categoría";
searchBarLabel.textContent = "Filtra por nombre";
searchBarLabel.setAttribute("for", "searchBar");


const divPriceFilter = document.createElement('div');
const priceFilterTitle = document.createElement('h3')
const minPriceDiv = document.createElement('div');
const maxPriceDiv = document.createElement('div');
const minPriceFilterLabel = document.createElement("label");
const maxPriceFilterLabel = document.createElement("label");
const inputMinPriceFilter = document.createElement('input');
const inputMaxPriceFilter = document.createElement('input');
const minCurrencySimbol = document.createElement('span');
const maxCurrencySimbol = document.createElement('span');

const removeFilterButton = document.createElement('button');

divPriceFilter.id = "pricefilter_div"
filterCategoryWrapper.className = "filtercategory_wrapper"
priceFilterTitle.className = "title_price_filter"
minCurrencySimbol.className = "currency_simbol"
maxCurrencySimbol.className = "currency_simbol"

minPriceFilterLabel.id = "min_price_label"
maxPriceFilterLabel.id = "max_price_label"
inputMinPriceFilter.id = "minprice_input"
inputMaxPriceFilter.id = "maxprice_input"
minPriceDiv.id = "minprice_div"
maxPriceDiv.id = "maxprice_div"

removeFilterButton.id = 'remove-filter-button';

inputMinPriceFilter.type = "number";
inputMaxPriceFilter.type = "number";
inputMinPriceFilter.min = "0";
inputMaxPriceFilter.min = "0";
inputMinPriceFilter.step = "0.01";
inputMaxPriceFilter.step = "0.01";


minPriceFilterLabel.setAttribute("for", "minprice_div");
maxPriceFilterLabel.setAttribute("for", "maxprice_div");

minCurrencySimbol.textContent = "€"
maxCurrencySimbol.textContent = "€"
priceFilterTitle.textContent = "Filtro por precio";
minPriceFilterLabel.textContent = "Precio Mínimo";
maxPriceFilterLabel.textContent = "Precio Máximo";

removeFilterButton.textContent = "Borrar filtros";


aside.appendChild(filterCategoryWrapper)
aside.appendChild(searchBarPriceFilterandButtonContainer)
searchBarPriceFilterandButtonContainer.appendChild(searchBarContainer);
searchBarPriceFilterandButtonContainer.appendChild(divPriceFilter);
searchBarPriceFilterandButtonContainer.appendChild(removeFilterButton);
filterCategoryWrapper.appendChild(titleFilter);
filterCategoryWrapper.appendChild(divCategoriesFilter);
searchBarContainer.appendChild(searchBarLabel);
searchBarContainer.appendChild(searchBarWrapper);
searchBarWrapper.appendChild(searchBar);
searchBarWrapper.appendChild(searchBarImg);
divPriceFilter.appendChild(priceFilterTitle);
divPriceFilter.appendChild(minPriceDiv);
divPriceFilter.appendChild(maxPriceDiv);
minPriceDiv.appendChild(minPriceFilterLabel);
maxPriceDiv.appendChild(maxPriceFilterLabel);
minPriceDiv.appendChild(minCurrencySimbol);
maxPriceDiv.appendChild(maxCurrencySimbol);
minCurrencySimbol.appendChild(inputMinPriceFilter);
maxCurrencySimbol.appendChild(inputMaxPriceFilter);












// CARTAS
const paintCards = () => {

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


    const productPrice = product.price;
    const productPriceFormatted = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(productPrice);

    image.src = product.image;
    name.textContent = product.name;
    category.textContent = product.category
    seller.textContent = product.seller;
    price.textContent = productPriceFormatted;
    organic.textContent = product.organic ? "ORGANICO 🌱" : " ";
    buyButton.textContent = "Comprar";


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

paintCards();



const cards = document.querySelectorAll('.carta');

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
    categoryLabel.className = "category_label";
    categoryLabel.textContent = category;
    checkboxCategory.type = "checkbox";
    checkboxCategory.id = `category_checkbox_${i}`;

    categoryLabel.setAttribute("for", `category_checkbox_${i}`);

    filterCategoryWrapper.appendChild(divCategoriesFilter)
    divCategoriesFilter.appendChild(categoryContainer);
    categoryContainer.append(categoryLabel);
    categoryContainer.appendChild(checkboxCategory);

    checkboxCategory.addEventListener("change", (e) => filterByCategory(e, categoryLabel));
  });
};

categoryDisplay();

const filterByCategory = (e, categoryLabel) => {
  const selectedCategory = e.target.id;
  const checkboxOfSelectedCategory = document.getElementById(selectedCategory);


  if (checkboxOfSelectedCategory.checked) {
    categoryLabel.classList.add('selected');
    categoryLabel.style.backgroundColor = '#B2E4DB';


    cards.forEach((card) => {
      const category = card.querySelector('.categoria').textContent;
      const checkboxId = `category_checkbox_${categories.indexOf(category)}`;

      if (checkboxId !== selectedCategory) {
        card.style.display = 'none';
      } else {
        card.style.display = 'flex';
      }
    });
  } else {
    categoryLabel.classList.remove('selected');
    categoryLabel.style.backgroundColor = '';

    cards.forEach((card) => {
      card.style.display = 'flex';
    });
  }
};


// FILTRO POR NOMBRE 
const normalizeText = text => text.trim().toLowerCase();


const filterByName = () => {
  const searchInputText = normalizeText(searchBar.value);

  const filteredProducts = PRODUCTS.filter((product) =>
    normalizeText(product.name).includes(searchInputText)
  );

  let productFound = false;

  cards.forEach((card) => {
    const productName = card.querySelector('.nombre').textContent.toLowerCase().trim();

    if (filteredProducts.some((product) => normalizeText(product.name) === productName)) {
      card.style.display = 'flex';
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

  const existingMessage = document.querySelector('.no_results_message');

  cards.forEach((card) => {
    card.style.display = 'flex';
  });
  if (existingMessage) {
    main.removeChild(existingMessage);
  }
};



searchBarImg.addEventListener('click', filterByName);

//PARA QUE VUELVAN LAS CARTAS AL MAIN 
searchBar.addEventListener('input', () => {
  if (searchBar.value === '') {
    showAllProducts();
  }
});


// FILTRO POR PRECIO 

const filterByPrice = () => {
  const minPrice = Number(inputMinPriceFilter.value) || 0;
  const maxPrice = Number(inputMaxPriceFilter.value) || 1000000;

  console.log(inputMinPriceFilter.value)

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });


  let productFound = false;

  cards.forEach((card) => {
    const productName = card.querySelector('.nombre').textContent.toLowerCase().trim();
    const productPrice = Number(card.querySelector('.precio').textContent.replace('€', '').replace(',', '.').trim());

    if (filteredProducts.some((product) => product.name.toLowerCase() === productName && product.price === productPrice)) {
      card.style.display = 'flex';
      productFound = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (productFound === false) {
    const existingMessage = document.querySelector('.no_results_message');
    if (!existingMessage) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'Lo sentimos, no tenemos productos en ese rango de precios... ¡por ahora!';
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

inputMinPriceFilter.addEventListener('input', filterByPrice);
inputMaxPriceFilter.addEventListener('input', filterByPrice);



// BOTON RESET FILTERS
const resetFilters = () => {
  searchBar.value = '';
  showAllProducts();

  const categoryCheckboxes = document.querySelectorAll('.category_container input[type="checkbox"]');

  categoryCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
    const categoryLabel = document.querySelector('.category_label');
    categoryLabel.classList.remove('selected');
    categoryLabel.style.backgroundColor = '';
  });

  inputMinPriceFilter.value = '';
  inputMaxPriceFilter.value = '';
};

removeFilterButton.addEventListener('click', showAllProducts)
removeFilterButton.addEventListener('click', resetFilters);

