// add pixel divs to grid
function makeGridItems(dim) {
  const container = document.querySelector('.grid-container');
  for (let i = 0; i < dim*dim; i++) {
    const div = document.createElement('div');
    div.className = 'pixel-div';
    div.style.backgroundColor = '#f6f7f2';

    // hover listener
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '#121619'
    });

    container.appendChild(div);
  }
}

function clearGrid() {
  const pixels = document.querySelectorAll('.pixel-div')
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = '#f6f7f2';
  })
}

function setGridDimension(dim) {
  const container = document.querySelector('.grid-container');
  container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
}

// add listeners to menu buttons
function menuItemListeners() {
  const clearButton = document.querySelector('.clear-button');
  const newButton = document.querySelector('.new-button');

  clearButton.addEventListener('click', () => {
    clearGrid();
  });

  newButton.addEventListener('click', () => {
    const dim = dimensionInput();
    clearGrid();
    setGridDimension(dim);
    makeGridItems(dim);
  });
}

// prompt the user for sketch dimension and return it
function dimensionInput() {
  let dim
  while(typeof(dim) != 'number') {
    dim = prompt('Enter sketch dimension (single number)')
    if(typeof(dim) == 'string'){
      dim = parseInt(dim, 10);
    }
  }
  return dim;
}

window.addEventListener('load', () => {
  // set menu button listeners
  menuItemListeners();

  // get sketch dimension number from input
  const dim = dimensionInput();

setGridDimension(dim);
makeGridItems(dim);
});