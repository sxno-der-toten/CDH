
let obstacles = [];
let alternate = false;


function generateObstacle() {
    let obstacle = [];

    if (alternate) {
        let singleObstacleColumn = Math.floor(Math.random() * 5);
        obstacle.push(singleObstacleColumn);
    } else {
        while (obstacle.length !== 2) {
            let nombreAleatoire = Math.floor(Math.random() * 5);
            if (!obstacle.includes(nombreAleatoire)) {
                obstacle.push(nombreAleatoire);
            }
        }
    }

    alternate = !alternate;
    return obstacle;
}

function addRowWithObstacles() {
    const gameBoard = document.getElementById('gameBoard');
    const newRow = gameBoard.insertRow(0);

    for (let i = 0; i < 5; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = '';

        if (obstacles.includes(i)) {
            let obstacleImage = document.createElement('img');
            if (obstacles.length === 1) {
                obstacleImage.src = 'images/gomugomu.png';
            } else {
                if (obstacles.indexOf(i) === 0) {
                    obstacleImage.src = 'images/scarabee.png';
                } else {
                    obstacleImage.src = 'images/bee.png';
                }
            }
            obstacleImage.classList.add('obstacle');
            cell.appendChild(obstacleImage);
        }
    }
}

function updateObstacles() {
  

    const gameBoard = document.getElementById('gameBoard');
    const rows = gameBoard.getElementsByTagName('tr');
    

    if (obstacles.length === 0) {
        obstacles = generateObstacle();
        addRowWithObstacles();
    } else {
        gameBoard.deleteRow(rows.length - 1);

        obstacles = generateObstacle();
        addRowWithObstacles();
    }

  
    return true;
}

setInterval(updateObstacles, 500);