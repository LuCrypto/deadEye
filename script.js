let arrayCarre = document.querySelectorAll('.carre');
let arrayCursor = document.querySelectorAll('.monCercle');

const monContainer = document.querySelector('.monContainter');

// Create div with class carre and add it to the container
const createCarre = () => {
    const monCarre = document.createElement('div');
    monCarre.classList.add('carre');

    const monCercle = document.createElement('div');
    monCercle.classList.add('monCercle');
    monCarre.appendChild(monCercle);

    monContainer.appendChild(monCarre);

    arrayCarre = document.querySelectorAll('.carre');
    arrayCursor = document.querySelectorAll('.monCercle');
}

for (let i = 0; i < 250; i++) {
    createCarre();
}

arrayCursor.forEach((cursor, index) => {

    // Evenement du mouvement de la souris
    document.body.addEventListener("mousemove", function (e) {
        const rectCercle = cursor.getBoundingClientRect();
        const rectCarre = arrayCarre[index].getBoundingClientRect();

        const valeurX = e.clientX - (rectCercle.right - rectCercle.left) / 2 - rectCarre.x
        const valeurY = e.clientY - (rectCercle.bottom - rectCercle.top) / 2 - rectCarre.y

        // console.log(rectCarre)
        // console.log(valeurX)

        if (valeurX >= 0 && valeurX <= rectCarre.width - rectCercle.width - 1) {
            cursor.style.left = valeurX + "px";
        }
        else {
            if (valeurX < 0) {
                cursor.style.left = 0 + "px";
            }
            else {
                cursor.style.left = rectCarre.width - rectCercle.width - 1 + "px";
            }
        }

        if (valeurY >= 0 && valeurY <= rectCarre.height - rectCercle.height - 1) {
            cursor.style.top = valeurY + "px";
        }
        else {
            if (valeurY < 0) {
                cursor.style.top = 0 + "px";
            }
            else {
                cursor.style.top = rectCarre.height - rectCercle.height - 1 + "px";
            }
        }
    });
});

document.body.addEventListener("click", function (e) {
    console.log("e.clientX : ", e.clientX, "e.clientY : ", e.clientY);
});