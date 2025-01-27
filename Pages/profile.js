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

    if (Age >= 18) {
        window.alert(`Welcome to kapeesa ` + Username + ` You have registered successfully`);
    } else {
        window.alert(`Kapeesa is for adults! Come Back When you are older!!`)
    }
}