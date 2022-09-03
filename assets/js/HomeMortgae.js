function computeLoan(){
    var Home_value = document.getElementById("Home_value").value;
    var Down = document.getElementById("Down").value;
    var Interest_rate = document.getElementById("Interest_rate").value;
    var years = document.getElementById("years").value;

    let princpal = Home_value - Down;
    let monthly_apr = (Interest_rate/12)/100;
    let months = years *12;

    let monthly_payments = (monthly_apr * princpal * Math.pow((1+monthly_apr), months) ) / (Math.pow ((1+monthly_apr), months) -1);
    let Total_interest = (monthly_payments * months) - princpal;
    let Total_Mortgage = (Total_interest + princpal);
    document.querySelector('#starter').innerHTML = `Starting amount = ${monthly_payments.toFixed(2)}`
    document.querySelector('#Future_investment_value').innerHTML = `Total Interest = ${Total_interest.toFixed(2)}`
    document.querySelector('#Total_contributions').innerHTML = `Total Mortgage Payments = ${Total_Mortgage.toFixed(2)}`


    }

