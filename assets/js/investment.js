function computeLoan(){
    var investment = document.getElementById("amount").value;
    var return_rate = document.getElementById("return_rate").value;
    var years = document.getElementById("years").value;
    var Monthly_contributions = document.getElementById("Monthly_contributions").value;

    let Future_value = investment * (Math.pow(1+((return_rate/100)/12), 12 * years));
    let Future_contributions = (Monthly_contributions *(Math.pow(1+((return_rate/100)/12), 12 * years) - 1) / ((return_rate/100) / 12));
    let finalinvestment = Future_value + Future_contributions;
    let Total_contributions = Monthly_contributions * 12 * years;
    let starter =parseFloat(investment);
    
    document.querySelector('#starter').innerHTML = `Starting amount = ${starter.toFixed(2)}`
    document.querySelector('#Future_investment_value').innerHTML = `Future_value = ${finalinvestment.toFixed(2)}`
    document.querySelector('#Total_contributions').innerHTML = `Total contributions = ${Total_contributions.toFixed(2)}`


    }