const buttons = document.querySelectorAll(".square");

for (const button of buttons) {
    button.addEventListener("click", UpdateSquares);
}

let array_sqr = [];

function UpdateSquares(event) {
    const btn = event.target;
    btn.style.backgroundColor = 'green';
    array_sqr.push(btn.id);

    if (array_sqr.length == 6) {
        ReverseSquares();
    }
}

function ReverseSquares() {
    array_sqr.reverse();

    for (const id of array_sqr) {
        const reverse_btn = document.getElementById(id);

        // Remove the color 
        reverse_btn.style.backgroundColor = 'white';

        /* Also clear the array */
        array_sqr = [];
    }
}