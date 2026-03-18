function submitForm() {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {
        alert("Please fill all required fields");
    } else {
        alert("Thank you! Your enquiry has been submitted.");
    }
}
