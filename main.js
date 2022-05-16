function makeGridItems() {
  const container = document.querySelector('.grid-container');
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
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

makeGridItems();