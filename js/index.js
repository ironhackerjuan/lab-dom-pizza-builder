// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  toggleIngredient('pep', 'pepperoni')
}

function renderMushrooms() {
  toggleIngredient('mushroom', 'mushrooms')
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  toggleIngredient('green-pepper', 'greenPeppers')
}

function toggleIngredient(className, stateName) {
  document.querySelectorAll(`.${className}`).forEach(element => {
    element.style.visibility = state[stateName] ? 'visible' : 'hidden'
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  toggleClassnameByState('sauce', 'sauce-white', 'whiteSauce')
}

function toggleClassnameByState(className, toggleClass, stateName) {
  const extra = document.querySelector(`.${className}`)

  if (state[stateName]) {
    extra.classList.add(toggleClass)
  } else {
    extra.classList.remove(toggleClass)
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  toggleClassnameByState('crust', 'crust-gluten-free', 'glutenFreeCrust')
}

function renderButtons() {
  toggleClassnameByState('btn-pepperoni','active','pepperoni')
  toggleClassnameByState('btn-mushrooms','active','mushrooms')
  toggleClassnameByState('btn-green-peppers','active','greenPeppers')
  toggleClassnameByState('btn-sauce','active','whiteSauce')
  toggleClassnameByState('btn-crust','active','glutenFreeCrust')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = basePrice;

  const listElements = document.querySelectorAll('.panel.price li') 
  
  if (state.pepperoni) {
    listElements[0].style.visibity = 'visible'
    price += ingredients.pepperoni.price
  } else {
    listElements[0].style.visibity = 'hidden'
  }

  if (state.mushrooms) {
    listElements[1].style.visibity = 'visible'
    price += ingredients.mushrooms.price
  } else {
    listElements[1].style.visibity = 'hidden'
  }

  if (state.greenPeppers) {
    listElements[2].style.visibity = 'visible'
    price += ingredients.greenPeppers.price
  } else {
    listElements[2].style.visibity = 'hidden'
  }

  if (state.whiteSauce) {
    listElements[3].style.visibity = 'visible'
    price += ingredients.whiteSauce.price
  } else {
    listElements[3].style.visibity = 'hidden'
  }

  if (state.glutenFreeCrust) {
    listElements[4].style.visibity = 'visible'
    price += ingredients.glutenFreeCrust.price
  } else {
    listElements[4].style.visibity = 'hidden'
  }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
