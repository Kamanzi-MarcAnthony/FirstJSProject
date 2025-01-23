// getting user inputs from profile form
let Email;
let Age;
let Username;


document.getElementById("submitbutton").onclick = function () {


    Email = document.getElementById("emailinput").value;
    Age = Number (document.getElementById("age").value);
    Username = document.getElementById("usernameinput").value;

    console.log(Email);
    console.log(Age, typeof Age);
    console.log(Username);

    document.getElementById("user").textContent = Username;
    document.getElementById("submittedage").textContent = Age;
    document.getElementById("useremail").textContent = Email;

    window.alert(`Welcome to kapeesa ` + Username + ` You have registered successfully`);
    window.alert(`You turn ${Age +1} years old on your next birthday`);
}