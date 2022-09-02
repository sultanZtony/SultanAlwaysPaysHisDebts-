function computeLoan(){
    var amount = document.getElementById("amount");
    var apr = document.getElementById("interest_rate");
    var years = document.getElementById("Years");

    
  // Get the user's input from the input elements.
  // Convert interest from a percentage to a decimal, and convert from
  // an annual rate to a monthly rate. Convert payment period in years
  // to the number of monthly payments.
  var principal = parseFloat(amount.value);
  var interest = parseFloat(apr.value) / 100 / 12;
  var payments = parseFloat(years.value) * 12;
    
  // compute the monthly payment figure
  var x = Math.pow(1 + interest, payments); //Math.pow computes powers
  var monthly = (principal*x*interest)/(x-1);

  var InterestPaid= (monthly *payments ) - principal;
  
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${monthly.toFixed(2)}`
    document.querySelector('#InterestPaid').innerHTML = `Interest paid = ${InterestPaid.toFixed(1)}`

    }