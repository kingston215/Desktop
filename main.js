
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    // Form of collection

    var x = document.getElementsByClassName("mySlides"); // This returns a collection of elements with the class name "mySlides"
    for (i = 0; i < x.length; i++) { // Loop through the collection
        x[i].style.display = "none"; // Access and manipulate each element in the collection
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block"; // Access a specific element in the collection
    setTimeout(carousel, 4000); // Callback
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Form validation
function validateTourForm() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    var phone = document.getElementById("phone").value;
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    return true;
}

// Example of an event listener for form submission
document.getElementById("tourForm").addEventListener("submit", function(event) {
    if (!validateTourForm()) {
        event.preventDefault(); // Callback
    }
});


