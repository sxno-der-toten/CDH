function generateObstacle() {
    let obstacle = [];
  
    while (obstacle.length !== 2) {
      let nombreAleatoire = Math.floor(Math.random() * 5);
      obstacle.push(nombreAleatoire);
  
      if (obstacle[0] === obstacle[1]) {
        while (obstacle[0] === obstacle[1]) {
          obstacle.pop();
          let nouveauNombre = Math.floor(Math.random() * 5);
          obstacle.push(nouveauNombre);
        }
      }
    }
  
    return obstacle;
  }
  
  function updateObstacles() {
    const obstaclesFirstRow = generateObstacle();
    var firstRow = document.getElementById('gameBoard').getElementsByTagName('tr')[0];
    var cells = firstRow.getElementsByTagName('td');
  
    for (let cell of cells) {
      cell.innerHTML = ''; 
    }
  
    for (let i = 0; i < obstaclesFirstRow.length; i++) {
     
      let obstacleImage = document.createElement('img');
      if (i === 0) {
        obstacleImage.src = 'scaraber.png'; 
      } else {
        obstacleImage.src = 'perso.png'; 
      }
      obstacleImage.classList.add('obstacle');
  
      
      cells[obstaclesFirstRow[i]].appendChild(obstacleImage);
    }
  }
  
  setInterval(updateObstacles, 2000);
 