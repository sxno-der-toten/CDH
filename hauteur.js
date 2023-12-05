let hauteur = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    hauteur += 1;
    console.log('Hauteur augmentée :', hauteur);
    
  } else if (event.code === 'ArrowDown') {
    hauteur -= 1;
    console.log('Hauteur diminuée :', hauteur);
    
  }
});
