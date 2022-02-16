// all value adding function
function costValue(foodValue, rentValue, clothesValue) {
    let foodPrize = parseInt(foodValue);
    let rentPrize = parseInt(rentValue);
    let clothesPrize = parseInt(clothesValue);

    let totalCost = foodPrize + rentPrize + clothesPrize;
    document.getElementById('total-expense').innerText = totalCost;
    return totalCost;
    cheakNumber(foodValue, rentValue, clothesValue);
}
// Function CAN cheak the value string or number
function cheakNumber(foodValue, rentValue, clothesValue) {

    if (isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        document.getElementById('error-messege').style.display = "block";
        document.getElementById('total-expense').innerText = 0;
    }
    else if (foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        document.getElementById('positive-messege').style.display = "block";
        document.getElementById('total-expense').innerText = 0;

    }
    else {
        document.getElementById('error-messege').style.display = "none";
        document.getElementById('positive-messege').style.display = "none";

    }

}
//update Balence 
function updateBalence(totalIncome) {
    const totalExp = parseInt(document.getElementById('total-expense').innerText);
    const newTotalIncome = parseInt(totalIncome.value);
    newBalence = newTotalIncome - totalExp;
    if (totalExp > newTotalIncome) {
        // console.log("loss ho gia");
        document.getElementById('error-expense').style.display = "block";
        balence.innerText = 0;
    }
    else {
        document.getElementById('error-expense').style.display = "none";

    }
}
// Decliaring click calculate function
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalIncome = document.getElementById('total-income');
    const balence = document.getElementById('balence');
    const foodText = document.getElementById('food-cost');
    const rentText = document.getElementById('rent-cost');
    const clothesText = document.getElementById('clothes-cost');

    let updateTotalcost = costValue(foodText.value, rentText.value, clothesText.value);

    updateBalence(totalIncome);
    totalIncome.value = '';
    foodText.value = '';
    rentText.value = '';
    clothesText.value = '';




})