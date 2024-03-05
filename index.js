const ratingState = document.querySelector(".rating-state")
const thankYou = document.querySelector(".thank-you-state")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", () => {
    thankYou.classList.remove("hidden")
    ratingState.style.display = "none"
})