document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("username").value;
    let messageBox = document.getElementById("messageBox");

    messageBox.textContent = "Hello " + userName + ", Thank you for visiting my page.";

});