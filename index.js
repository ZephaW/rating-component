const ratingState = document.querySelector(".rating-state")
const thankYou = document.querySelector(".thank-you-state")
const submitButton = document.getElementById("submit-button")
const rating = document.getElementById("rating")
const rates = document.querySelector("rating-button")

submitButton.addEventListener("click", () => {
    thankYou.classList.remove("hidden")
    ratingState.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankYou.classList.add("hidden")
    ratingState.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    });
});