const container = document.getElementById('container');
const reset = document.getElementById('reset');

function createGrid(size) {
  container.innerHTML = ''; 
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}



reset.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => (square.style.backgroundColor = ''));
});

createGrid(16);
