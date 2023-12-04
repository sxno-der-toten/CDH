// Coordonnées du rond
let row = 0;
let col = 0;

// Fonction pour mettre à jour la position du rond dans le tableau
function updatePosition() {
  const cells = document.querySelectorAll('#gameBoard td');
  cells.forEach(cell => {
    cell.classList.remove('highlight');
  });
  const currentCell = document.querySelector(`#gameBoard tr:nth-child(${row + 1}) td:nth-child(${col + 1})`);
  currentCell.classList.add('highlight');
}

// Gestionnaire d'événement pour détecter les touches du clavier
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const numRows = 6;
  const numCols = 4;

  if (key === 'ArrowUp' && row > 0) {
    row--;
  } else if (key === 'ArrowDown' && row < numRows - 1) {
    row++;
  } else if (key === 'ArrowLeft' && col > 0) {
    col--;
  } else if (key === 'ArrowRight' && col < numCols - 1) {
    col++;
  }

  updatePosition();
});

// Initialiser la position du rond
updatePosition();
