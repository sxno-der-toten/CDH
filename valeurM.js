let m = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('valeurM').textContent = "Mètres : " + m;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            m += 1;
            document.getElementById('valeurM').textContent = "Mètres : " + m;
            console.log("La touche 'haut' a été pressée !");
        } else if (event.key === 'ArrowDown' && m > 0) {
            m -= 1;
            document.getElementById('valeurM').textContent = "Mètres : " + m;
            console.log("La touche 'bas' a été pressée !");
        }
    });
});