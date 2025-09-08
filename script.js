//animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 10% of the section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
//this is for services dropdown 
document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
//menu change form to movil adjustment
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
dropdownToggle.addEventListener("click", function (e) {
  e.preventDefault();
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// image change part
const images = [
  "images/clients1.jpg",
  "images/clients2.jpg",
  "images/alt1.jpg",
  "images/alt2.jpg",
];
//select image in DOM
const autoImg = document.getElementById("auto-img");
//indice for now the indice of the actual img
let currentIndex = 0;
//change the image each minut
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  autoImg.src = images[currentIndex];
}, 5000); // 60000 ms = 1 minut

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value < 0) {
      this.value = 0; //  0 if negative
    }
  });
});

// rent buy calculations
document.getElementById("rentBuyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar que todos los campos requeridos estén llenos
  const requiredFields = this.querySelectorAll("[required]");
  let isValid = true;

  requiredFields.forEach((field) => {
    if (
      !field.value ||
      (field.type === "number" && field.value <= 0) ||
      (field.name === "down-payment" && (field.value > 100 || field.value < 0))
    ) {
      isValid = false;
      field.style.borderColor = "red";
    } else {
      field.style.borderColor = "";
    }
  });

  if (!isValid) {
    document.querySelector(".results-text").innerHTML =
      "<strong>Please fill all fields with valid values.</strong>";
    return;
  }

  // get the values
  const R =
    parseFloat(document.querySelector('[name="monthly-rent"]').value) || 0;
  const RI =
    parseFloat(document.querySelector('[name="rent-insurance"]').value) || 0;

  const PP = parseFloat(document.querySelector('[name="price"]').value) || 0;
  const d =
    parseFloat(document.querySelector('[name="down-payment"]').value) / 100 ||
    0;
  const i =
    parseFloat(document.querySelector('[name="interest-rate"]').value) / 100 ||
    0;
  const N = parseInt(document.querySelector(".custom-select").value) || 0;

  const PT =
    parseFloat(document.querySelector('[name="property-taxes"]').value) || 0; // property taxes
  const HI =
    parseFloat(document.querySelector('[name="home-insurance"]').value) || 0; // home insurance
  const CC =
    parseFloat(document.querySelector('[name="closing-cost"]').value) || 0; // Estimated Closing Cost

  // Ejemplo: Costo total de alquilar
  const C_rent_total = (R + RI) * 12 * N;

  // Ejemplo: Monto de préstamo
  const L = PP * (1 - d);

  //monthly interest
  const r = i / 12;
  //number of pyments
  const n = 12 * N;

  //monthly payment on buying
  const M = (L * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

  //total price of the house
  const X = M * n;
  // Additional costs for purchasing (taxes and insurance annualized over N years, plus one-time closing cost)
  const X_additional = (PT + HI) * n + CC;
  const X_additional_m = PT + HI;
  // Total cost of buying
  const X_total = X + X_additional;
  //monthly payment on buying having in consideration aditional info
  const x_monthly = M + X_additional_m;

  //results...?
  const resultsDiv = document.querySelector(".results-text");
  if (X_total - C_rent_total < 0) {
    resultsDiv.innerHTML = `
        <strong>Buying this house is a great deal—you could save approximately $${(
          C_rent_total - X_total
        ).toFixed(2)} compared to renting.</strong><br>
        This is an estimate. For a personalized consultation, just call me!<br>
        <strong>Total Cost of Rent in ${N} years:</strong> $${C_rent_total.toFixed(
      2
    )}<br>
        <strong>Total mortgage payments in ${N} years:</strong> $${X_total.toFixed(
      2
    )}<br>
        <strong>Total mothly mortgage:</strong> $${x_monthly.toFixed(2)} <br>
        `;
  } else if (X_total - C_rent_total === 0) {
    resultsDiv.innerHTML = `
        <strong>Buying this house is a great deal—you will pay about the same as renting over ${N} years.</strong><br>
        However, after ${N} years, you will own your home, and your future savings will be much greater compared to continuing to rent.<br>
        <strong>Total Cost of Rent in ${N} years:</strong> $${C_rent_total.toFixed(
      2
    )}<br>
        <strong>Total mortgage payments in ${N} years:</strong> $${X_total.toFixed(
      2
    )}
        This is an estimate. For a personalized consultation, just call me! <br>
          <strong>Total mothly mortgage:</strong> $${x_monthly.toFixed(
            2
          )} <br>`;
  } else {
    const extraYears = Math.ceil((X_total - C_rent_total) / ((R + RI) * 12));

    resultsDiv.innerHTML = `
            <strong>Renting may help you save money for the next ${N} years.</strong><br>
            But after that, if you buy a home, you will stop making monthly payments once you finish paying your mortgage.<br>
            If you keep renting, you will always have to pay rent.<br>
            For example, after ${N} years, you will have paid <strong>$${C_rent_total.toFixed(
      2
    )}</strong> in rent.<br>
            If you buy, you will pay off your home in ${N} years and never pay rent again.<br>
            <strong>After you finish paying your home, renting will cost you more in just ${extraYears} more year(s).</strong><br>
            One day, you might think:<br>
            <em>"Why didn't I buy my home when I had the chance?"</em><br>
            This is an estimate. If you want help, just call me!<br>
             <strong>Total mortgage payments in ${N} years:</strong> $${X_total.toFixed(
      2
    )} <br>
             <strong>Total mothly mortgage:</strong> $${x_monthly.toFixed(
               2
             )} <br>


            `;
  }
});
