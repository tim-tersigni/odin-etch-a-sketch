function makeGridItems() {
  const container = document.querySelector('.grid-container');
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'pixel-div';
    div.style.backgroundColor = '#f6f7f2';
    div.style.width = '32px';
    div.style.height = '32px';

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

function newGrid(dim) {
  const container = document.querySelector('.grid-container');
  container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dim}, 1fr);`
}

function menuItemListeners() {
  const clearButton = document.querySelector('.clear-button');
  const newButton = document.querySelector('new-button');

  clearButton.addEventListener('click', () => {
    clearGrid();
  })

  // newButton.addEventListener('click', () => {

  // })
}

menuItemListeners();
makeGridItems();