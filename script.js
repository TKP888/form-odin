const passInputOne = document.querySelector("#password");
const passInputTwo = document.querySelector("#password_confirm");
const form = document.querySelector("#form");
const errorLabel = document.querySelector("#errorText");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const passOne = passInputOne.value;
    const passTwo = passInputTwo.value;

    if (form.checkValidity()) {
        if (passOne === passTwo && passOne !== "") {
            errorLabel.innerHTML = "Thank you for signing up";
            // Remove the event listener to allow form submission
            form.removeEventListener("submit", this);
            // Submit the form programmatically
            form.submit();
        } else {
            errorLabel.innerHTML = "* Passwords do not match";
            passInputOne.classList.add("error");
            passInputTwo.classList.add("error");
        }
    } else {
        form.reportValidity();
    }
});