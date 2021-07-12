//calculate submit btn
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // Show loading image
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);

  e.preventDefault();
});


//calculate Results
function calculateResults () {
  console.log('Calculating...');

  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12; //formula for getting interest
  const calculatedPayment = parseFloat(years.value) * 12;

  //Computations, monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment.toFixed(2));
    totalInterest.value = ((monthly * calculatedPayment) - principal.toFixed(2));

    // show results
  document.getElementById('results').style.display = 'block';
  
  // hide loading image
  document.getElementById('loading').style.display = 'none';
  
  } else{
    showError('Invalid Input');
  };


};

//Show Error
function showError(error){
  // Hide results
  document.getElementById('results').style.display = 'none';
  
  // hide loading image
  document.getElementById('loading').style.display = 'none';  


  //Create Div
  const errorDiv = document.createElement('div');

  //Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add Class
  errorDiv.className = 'alert alert-danger';

  //Create Text Node and Append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert Error above Headings
  card.insertBefore(errorDiv, heading);

  //Error out in UI
  setTimeout(clearError, 1000);

};

//Error Out
function clearError() {
  document.querySelector('.alert').remove();
}