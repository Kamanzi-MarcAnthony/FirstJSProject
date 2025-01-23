// getting user inputs from profile form
let Email;
let Age;
let Username;

document.getElementById("submitbutton").onclick = function () {
    Email = document.getElementById("emailinput").value;
    Age = document.getElementById("age").value;
    Username = document.getElementById("usernameinput").value;

    console.log(Email);
    console.log(Age);
    console.log(Username);

    document.getElementById("user").textContent = Username;
    document.getElementById("submittedage").textContent = Age;
    document.getElementById("useremail").textContent = Email;
}


