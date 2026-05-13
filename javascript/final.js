
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {
       
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name == "" || email == "") {
            alert("Please fill out all the required fields.");
            
        }

       else {

        document.getElementById("formMessage").textContent = 
        "Thank you for contacting GreenTech Solutions!";
       }
    });
}