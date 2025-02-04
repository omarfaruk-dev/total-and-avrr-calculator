function calculateTotal() {
    let math = parseFloat(document.getElementById("math").value) || 0;
    let biology = parseFloat(document.getElementById("biology").value) || 0;
    let chemistry = parseFloat(document.getElementById("chemistry").value) || 0;
    let physics = parseFloat(document.getElementById("physics").value) || 0;
    let bangla = parseFloat(document.getElementById("bangla").value) || 0;

    let total = math + biology + chemistry + physics + bangla;
    document.getElementById("result").innerText = "Total Marks: " + total.toFixed(2);
}

function calculateAverage() {
    let math = parseFloat(document.getElementById("math").value) || 0;
    let biology = parseFloat(document.getElementById("biology").value) || 0;
    let chemistry = parseFloat(document.getElementById("chemistry").value) || 0;
    let physics = parseFloat(document.getElementById("physics").value) || 0;
    let bangla = parseFloat(document.getElementById("bangla").value) || 0;

    let total = math + biology + chemistry + physics + bangla;
    let average = total / 5;

    document.getElementById("result").innerText = "Average Marks: " + average.toFixed(2);
}