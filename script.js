

//menu change form to movil adjustment
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
// image change part
const images = [
  'images/clients1.jpg',
  'images/clients2.jpg',
  'images/alt1.jpg',
  'images/alt2.jpg'
];
//select image in DOM
const autoImg = document.getElementById('auto-img');
//indice for now the indice of the actual img
let currentIndex = 0;
//change the image each minut
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  autoImg.src = images[currentIndex];
}, 5000); // 60000 ms = 1 minut


const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function(e) {
  e.preventDefault();
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// rent buy calculations
document.getElementById('rentBuyForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // get the values
  const R = parseFloat(document.querySelector('[name="monthly-rent"]').value) || 0;
  const RI = parseFloat(document.querySelector('[name="rent-insurance"]').value) || 0;
  const PP = parseFloat(document.querySelector('[name="price"]').value) || 0;
  const d = parseFloat(document.querySelector('[name="down-payment"]').value) / 100 || 0;
  const i = parseFloat(document.querySelector('[name="interest-rate"]').value) / 100 || 0;
  const N = parseInt(document.querySelector('.custom-select').value) || 0;
  

  // Ejemplo: Costo total de alquilar
  const C_rent_total = (R + RI) * 12 * N;

  // Ejemplo: Monto de préstamo
  const L = PP * (1 - d);

  
  //monthly interest 
  const r = i / 12;
  //number of pyments
  const n = 12 * N;
  //mosthly payment on buying 
  const M = L * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  //total price of the house
  const X= M*n;
  //results...? 
    const resultsDiv = document.querySelector('.results-text');
   if (X-C_rent_total < 0)
    {
            resultsDiv.innerHTML = `
        <strong>Buying this house is a great deal—you could save approximately $${(C_rent_total - X).toFixed(2)} compared to renting.</strong><br>
        This is an estimate. For a personalized consultation, just call me!<br>
        <strong>Total Cost of Rent in ${N} years:</strong> $${C_rent_total.toFixed(2)}<br>
        <strong>Total mortgage payments in ${N} years:</strong> $${X.toFixed(2)}<br>
        ${(X-C_rent_total).toFixed(2)}<br>
          <strong>Total mothly mortgage:</strong> $${M.toFixed(2)} <br>
        `;
   }
   else if(X-C_rent_total === 0)
   {
        resultsDiv.innerHTML = `
        <strong>Buying this house is a great deal—you will pay about the same as renting over ${N} years.</strong><br>
        However, after ${N} years, you will own your home, and your future savings will be much greater compared to continuing to rent.<br>
        <strong>Total Cost of Rent in ${N} years:</strong> $${C_rent_total.toFixed(2)}<br>
        <strong>Total mortgage payments in ${N} years:</strong> $${X.toFixed(2)}
        This is an estimate. For a personalized consultation, just call me! <br>
          <strong>Total mothly mortgage:</strong> $${M.toFixed(2)} <br>`;
   }
   else
    {
           const extraYears = Math.ceil((X - C_rent_total) / ((R + RI) * 12));

            resultsDiv.innerHTML = `
            <strong>Renting may help you save money for the next ${N} years.</strong><br>
            But after that, if you buy a home, you will stop making monthly payments once you finish paying your mortgage.<br>
            If you keep renting, you will always have to pay rent.<br>
            For example, after ${N} years, you will have paid <strong>$${C_rent_total.toFixed(2)}</strong> in rent.<br>
            If you buy, you will pay off your home in ${N} years and never pay rent again.<br>
            <strong>After you finish paying your home, renting will cost you more in just ${extraYears} more year(s).</strong><br>
            One day, you might think:<br>
            <em>"Why didn't I buy my home when I had the chance?"</em><br>
            This is an estimate. If you want help, just call me!<br>
             <strong>Total mortgage payments in ${N} years:</strong> $${X.toFixed(2)} <br>
             <strong>Total mothly mortgage:</strong> $${M.toFixed(2)} <br>


            `;
   }

});

document.getElementById('refinanceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get the values
  const R = parseFloat(document.querySelector('[name="original-loan"]').value) || 0;
  const old_i = parseFloat(document.querySelector('[name="o-interest-rate"]').value) / 100 || 0;
  const new_i = parseFloat(document.querySelector('[name="n-interest-rate"]').value) / 100 || 0;
  const olt = parseInt(document.querySelector('[name="old-loan-term"]').value) || 0;
  const nlt = parseInt(document.querySelector('[name="new-loan-term"]').value) || 0;
  const AP = parseFloat(document.querySelector('[name="paid-amount"]').value) || 0;
  const closing = parseFloat(document.querySelector('[name="closing-cost"]').value) || 0;
  
  // number of payments maked 
    const paymentsMade = Math.floor(AP / (R * (old_i / 12) * Math.pow(1 + old_i / 12, olt * 12) / (Math.pow(1 + old_i / 12, olt * 12) - 1)));

    // Saldo pending payments
    const r_old = old_i / 12;
    const n_old = olt * 12;
    const m = paymentsMade;
    const balance = R * (Math.pow(1 + r_old, n_old) - Math.pow(1 + r_old, m)) / (Math.pow(1 + r_old, n_old) - 1);
    //new monthly payments
    const r_new = new_i / 12;
    const n_new = nlt * 12;
    const newMonthly = balance * (r_new * Math.pow(1 + r_new, n_new)) / (Math.pow(1 + r_new, n_new) - 1);
    //new loan cost
    const totalNewCost = (newMonthly * n_new) + closing;
    //showing results
    const resultsDiv = document.querySelector('.results-text');
    resultsDiv.innerHTML = `
    <strong>Refinancing Results:</strong><br>
    Remaining balance to refinance: $${balance.toFixed(2)}<br>
    New monthly payment: $${newMonthly.toFixed(2)}<br>
    Total cost over ${nlt} years (including closing costs): $${totalNewCost.toFixed(2)}`;

});

//mortgage calculations
document.getElementById('mortgageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get the values
  const PP = parseFloat(document.querySelector('[name="loan-amount"]').value) || 0;
  const i = parseFloat(document.querySelector('[name="interest-rate"]').value) / 100 || 0;
  const N = parseInt(document.querySelector('[name="loan-term"]').value) || 0;

  //monthly interest 
  const r = i / 12;
  //number of pyments
  const n = 12 * N;
  //mosthly payment on buying 
  const mortgage = PP * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const resultsDiv = document.querySelector('.results-text-m');
  resultsDiv.innerHTML = ` Your Morgage is $${mortgage.toFixed(2)}`;
  
});






