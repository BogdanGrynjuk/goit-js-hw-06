const categories = [...document.querySelector('#categories').children];

console.log(`Number of categories: ${categories.length}`);

categories.map(category => {
  console.log(' ');
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelector('ul').children.length}`);  
});


