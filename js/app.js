// Decliaring click calculate function
const totalIncome = document.getElementById('total-income');
const balence = document.getElementById('balence');
const foodText = document.getElementById('food-cost');
const rentText = document.getElementById('rent-cost');
const clothesText = document.getElementById('clothes-cost');
const totalExpence = document.getElementById('total-expense');
const remainingBalence = document.getElementById('remaining-balence');
const totalSavingText = document.getElementById('total-saving');
const savePercentText = document.getElementById('savePercent');


// Function CAN cheak the value string or number
function cheakNumber(inputValue) {

    if (isNaN(inputValue) || inputValue == '') {
        return false;
    }
    else if (inputValue < 0) {
        return false;
    }
    else {
        document.getElementById('error-messege').style.display = "none";
        document.getElementById('positive-messege').style.display = "none";
        return true;
    }

}
// all value adding function
function costValue(foodValue, rentValue, clothesValue) {
    let foodPrize = parseInt(foodValue);
    let rentPrize = parseInt(rentValue);
    let clothesPrize = parseInt(clothesValue);

    let totalCost = foodPrize + rentPrize + clothesPrize;
    totalExpence.innerText = totalCost;

}

//update Balence 
function updateBalence() {
    const totalExp = parseInt(totalExpence.innerText);
    const newTotalIncome = parseInt(totalIncome.value);
    newBalence = newTotalIncome - totalExp;
    if (totalExp > newTotalIncome) {
        // console.log("loss ho gia");
        document.getElementById('error-expense').style.display = "block";
        balence.innerText = 0;
    }
    else {
        document.getElementById('error-expense').style.display = "none";
        balence.innerText = newBalence;

    }
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    let isTotalIncome = cheakNumber(totalIncome.value);
    let isFoodText = cheakNumber(foodText.value);
    let isRentText = cheakNumber(rentText.value);
    let isClothesText = cheakNumber(clothesText.value);
    if (isTotalIncome && isFoodText && isRentText && isClothesText) {
        costValue(foodText.value, rentText.value, clothesText.value);
        updateBalence();
    }
    else {
        document.getElementById('error-messege').style.display = "block";
        document.getElementById('positive-messege').style.display = "block";
        totalExpence.innerText = 0;
        totalSavingText.innerHTML = 0;
        remainingBalence.innerText = 0;
        balence.innerText = 0;
    }
});
function savingPersentence() {

    const savePercent = parseInt(savePercentText.value);
    const newTotalIncome = parseInt(totalIncome.value);
    let savingAmount = (newTotalIncome * savePercent) / 100;
    const finalBalence = parseInt(balence.innerText);

    const isNumber = cheakNumber(savePercentText.value);
    if (isNumber) {
        document.getElementById('error-saving').style.display = "none";
        totalSavingText.innerText = savingAmount;
        // finding Balence
        if (finalBalence < savingAmount) {
            document.getElementById('error-balence').style.display = "block";
            remainingBalence.innerText = 0;
            totalSavingText.innerText = 0;

        }
        else {
            document.getElementById('error-balence').style.display = "none";
            remainingBalence.innerText = parseInt(finalBalence - savingAmount);
        }
    }
    else {
        document.getElementById('error-saving').style.display = "block";

    }
}

document.getElementById('reset-btn').addEventListener('click', function () {
    totalIncome.value = '';
    foodText.value = '';
    rentText.value = '';
    clothesText.value = '';
    savePercent.value = '';
    totalExpence.innerText = 0;
    remainingBalence.innerText = 0;
    totalSavingText.innerText = 0;
    balence.innerText = 0;
    document.getElementById('positive-messege').style.display = "none";
    document.getElementById('error-messege').style.display = "none";
    document.getElementById('error-saving').style.display = "none";



});





