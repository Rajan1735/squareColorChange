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
    // Use for..of loop to apply different timeouts for each button
    for (const [index, id] of array_sqr.entries()) {
        const reverse_btn = document.getElementById(id);

        // Remove the color after a delay, with increasing delay for each button
        setTimeout(() => {
            reverse_btn.style.backgroundColor = 'white';
        }, index * 1000);

        /* Also clear the array */
        array_sqr = [];
    }
