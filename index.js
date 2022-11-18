const rateContainer = document.querySelector(".content");
const thanksContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");

const rating = document.getElementById("rate");
const rates = document.querySelectorAll(".btn-rates");

submitButton.addEventListener("click", function(){
    thanksContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
});

rates.forEach((rate) => {
    rate.addEventListener("click", function() {
        rating.innerHTML = rate.innerHTML;
    });
});

