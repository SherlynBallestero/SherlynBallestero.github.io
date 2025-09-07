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


