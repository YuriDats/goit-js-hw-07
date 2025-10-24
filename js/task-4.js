
const form = document.querySelector(".login-form");
form.addEventListener("submit", Foo);

function Foo(event) {
    event.preventDefault();
    const elements = event.target.elements;


    const info = {
        email: elements.email.value,
        password: elements.password.value
    }

    
    if(elements.email.value.trim() === "" || elements.password.value.trim() === ""){
        alert('All form fields must be filled in');
    }
    else {
        console.log(`Email: ${info.email}, Password: ${info.password}`);
    }



    event.target.reset(); 
}