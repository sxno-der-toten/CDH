function generateobstacle(){
    let obstacle = [];
    let i = 0;
    while (i !==2) {
        let nombreAleatoire = Math.floor(Math.random() * 5) + 1;
        obstacle.push(nombreAleatoire) ;
        while (obstacle[i] === obstacle[i - 1]){
            let nombreAleatoire = Math.floor(Math.random() * 5) + 1;
            let dernierElementSupprime = obstacle.pop();
            obstacle.push(nombreAleatoire);

        }
    }

    return obstacle;
      
} 

const obstaclesFirstRow = generateobstacle();



document.addEventListener('DOMContentLoaded', function() {
    
    var firstRow = document.getElementById('gameBoard').getElementsByTagName('tr')[0];

    var cells = firstRow.getElementsByTagName('td');

    for (let i = 0; i < obstaclesFirstRow.length; i++) {
        elementsExtraits.push(obstaclesFirstRow[i]);
    }

   
});
