const typeInput = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

typeInput.addEventListener("input", Hello);

function Hello(event) {
    const typeText = event.target.value.trim();

    if(typeText != "")
        spanName.textContent = typeText;
    else
        spanName.textContent = "Anonymous";
    
}