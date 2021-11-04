/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const groceries = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
    quantity: 0
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.32,
    quantity: 0
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.40,
    quantity: 0
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.38,
    quantity: 0
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.42,
    quantity: 0
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.35,
    quantity: 0
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.35,
    quantity: 0
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.22,
    quantity: 0
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.21,
    quantity: 0
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.47,
    quantity: 0
  }
]

const storeList = document.querySelector(".store--item-list")
const cartList = document.querySelector(".cart--item-list")
const costTotal = document.querySelector(".total-number")
const filterForm = document.querySelector("#filterForm")



function createElementWClass(element = "", className = "", innerText = "") {
  const tempEl = document.createElement(element);
  tempEl.classList.add(className);
  tempEl.innerText = String(innerText);
  return tempEl;
}

function createElement(element = "", innerText = "") {
  const tempEl = document.createElement(element);
  tempEl.innerText = String(innerText);
  return tempEl;
}

function addItemToCart(grocery) {
  
  console.log(grocery.quantity)
}



function addToCart(itemId) {
  for (let i = 0; i < 10; i++) {
    if (groceries[i].id === itemId) {
      groceries[i].quantity++;
      console.log(groceries[i].quantity)
      cartList.innerHTML = ""
    }
  }
}

function removeFromCart(itemId) {
  for (let i = 0; i < 10; i++) {
    if (groceries[i].id === itemId) {
      groceries[i].quantity--;
      console.log(groceries[i].quantity)
      cartList.innerHTML = ""
    }
  }
}

function groceryAdding() {
  for (let i = 0; i < 10; i++) {
    quantityCheck(groceries[i])
  }
}

function quantityCheck(grocery) {
  if (grocery.quantity >= 1) {
    renderCart(grocery)
  }
}

function priceCheck() {
  let cost = 0.00
  for(let i = 0; i < 10; i++) {
    cost = cost + (groceries[i].price * groceries[i].quantity)
  }
  let costFixed = cost.toFixed(2)
  costTotal.innerHTML = ("£" + costFixed)
}

function renderCart(grocery) {
  const list = createElement("li")
  const image = createElementWClass("img", "cart--item--icon")
  const paragraph = createElement("p", grocery.name)
  const removeButton = createElement("button", "-")
  const span = createElement("span", grocery.quantity)
  const increaseButton = createElement("button", "+")

  const imageSource = "./assets/icons/" + grocery.id + ".svg"
  image.src = imageSource
  image.setAttribute("alt", grocery.name)

  removeButton.classList.add("quantity-btn")
  removeButton.classList.add("remove-btn")
  removeButton.classList.add("center")
  removeButton.classList.add(grocery.id)

  increaseButton.classList.add("quantity-btn")
  increaseButton.classList.add("add-btn")
  increaseButton.classList.add("center")
  increaseButton.classList.add(grocery.id)

  list.append(image, paragraph, removeButton, span, increaseButton)
  cartList.append(list)
  console.log(grocery.name)

  increaseButton.addEventListener("click", () => {
    console.log(increaseButton.classList[3])
    addToCart(increaseButton.classList[3])
    groceryAdding()
    priceCheck()
  })

  removeButton.addEventListener("click", () => {
    console.log(removeButton.classList[3])
    removeFromCart(removeButton.classList[3])
    groceryAdding()
    priceCheck()
  })
}


function renderStore(grocery) {
  const li = createElement("li")
  const divide = createElementWClass("div", "store--item-icon")
  const image = createElement("img")
  const addButton = createElement("button", "Add to cart")
  addButton.classList.add("addButton")
  addButton.classList.add(grocery.id)
  const imageSource = "./assets/icons/" + grocery.id + ".svg"
  image.src = imageSource
  divide.append(image)
  li.append(divide, addButton)
  storeList.append(li)
  console.log(li)
  console.log()


  addButton.addEventListener("click", () => {
    console.log(addButton.classList[1])
    addToCart(addButton.classList[1])
    groceryAdding()
    priceCheck()
  })
}



function groceriesRender(groceries) {
  for (const grocery of groceries) {
    renderStore(grocery);
  }
}

groceriesRender(groceries)

/*
function init() {
  fetch("http://localhost:3000/groceries")
    .then(function (response) {
      return response.json();
    })
    .then(function (groceries) {
      console.log("groceries:", groceries);
      groceriesRender(groceries);
    });
}

init();
*/