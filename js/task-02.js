const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeItems = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    
    return itemEl;
  });
}

const items = makeItems(ingredients);

listEl.append(...items);