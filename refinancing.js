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


//menu change form to movil adjustment
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
dropdownToggle.addEventListener('click', function(e) {
  e.preventDefault();
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});


