// Function that accepts values as parameters
function groceryTracker(amount1, amount2, amount3) {
    return amount1 + amount2 + amount3;
}

// Function triggered by button click
function getTotal() {
    let g1 = Number(document.getElementById("grocery1").value);
    let g2 = Number(document.getElementById("grocery2").value);
    let g3 = Number(document.getElementById("grocery3").value);

    let total = groceryTracker(g1, g2, g3);

    document.getElementById("result").innerText =
        "Total grocery amount: " + total;
}