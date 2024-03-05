const ratingState = document.querySelector(".rating-state")
const thankYou = document.querySelector(".thank-you-state")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again") 
const ratings = document.querySelectorAll(".rating-button")
const actualRating = document.getElementById("rating")


submitButton.addEventListener("click", () => {
    thankYou.classList.remove("hidden")
    ratingState.style.display = "none"




ratings.forEach((rating) => {
    rate.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML
    })
})

})


rateAgain.addEventListener("click", () => {
    thankYou.classList.add("hidden")
    ratingState.style.display = "block"
})