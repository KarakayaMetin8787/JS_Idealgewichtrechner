calc.addEventListener("click", () => {
    const inputHeight = height.value;
    const inputAge = age.value;

    if (bulky.checked) {
        document.body.querySelector(".result").innerHTML = "Dein Idealgewicht ist " + (((inputHeight - 100) + (inputAge/10)) * 0.9 * 0.9).toFixed(2) + " kg.";

    } else if (skinny.checked) {
        document.body.querySelector(".result").innerHTML = "Dein Idealgewicht ist " + (((inputHeight - 100) + (inputAge/10)) * 0.9 * 1.1).toFixed(2) + " kg.";

    } else {
        alert("Bitte wählen Sie einen Körperbau.")
    }
})