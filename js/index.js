document.getElementById('calculate-btn').addEventListener('click',function(){
    const food = document.getElementById('food');
    const foodCostStringValue = food.value;
    const foodCost = parseInt(foodCostStringValue);

    const rent = document.getElementById('rent');
    const rentCostStringValue = rent.value;
    const rentCost = parseInt(rentCostStringValue);
    
    const clothes = document.getElementById('clothes');
    const clothesCostStringValue = clothes.value;
    const clothesCost = parseInt(clothesCostStringValue);

    const totalCost = foodCost + rentCost +clothesCost;
    
    const income = document.getElementById('income');
    const incomeString = income.value;
    const myIncome = parseInt(incomeString);

    const totatExpence = document.getElementById('total-expense');
    const totalExpenceStringValue = totatExpence.innerText;
    const totalExpenceValue = parseInt(totalExpenceStringValue);
    totatExpence.innerText = totalCost;


    const balance = document.getElementById('balance');
    const balanceStringValue = balance.innerText;
    const balanceRemaining = parseInt(balanceStringValue);
    const finalBalance  = myIncome - totalCost;
    balance.innerText = finalBalance

    // const save = document.getElementById('save-btn');

    const mySaveAmount = document.getElementById('save');
    const mySaveAmountString = mySaveAmount.value;
    const getPercentage = parseInt(mySaveAmountString);
    const savePercentage = finalBalance * getPercentage / 100;

    const saveingAmount = document.getElementById('saving-amount');
    saveingAmount.innerText = savePercentage;


    const myRemainningBalance = document.getElementById('remaining-balance');
    const calculateRemainingString = myRemainningBalance.innerText;
    const calculateValue = parseInt(calculateRemainingString);
    const balanceCalculate = finalBalance - savePercentage;
    console.log(typeof balanceCalculate);
    myRemainningBalance.innerText = balanceCalculate;
     

});

// document.getElementById('save-btn').addEventListener('click',function(){
//     const mySaveAmount = document.getElementById('save');
//     const mySaveAmountString = mySaveAmount.value;
//     const getPercentage = parseInt(mySaveAmountString);
//     const savePercentage = balanceRemaining * getPercentage / 100;

//     const saveingAmount = document.getElementById('saving-amount');
//     saveingAmount.innerText = savePercentage;
// })
