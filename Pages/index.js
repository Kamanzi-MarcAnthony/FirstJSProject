
//window.alert('Welcome to the Sports Page!');
const followersCount = 245;
const sportswelcome = document.getElementById("sportsButton");
sportswelcome.addEventListener('click', function() {

    document.getElementById("teamname").textContent = "Swarmbyte FC ";
    document.getElementById("followers").textContent = followersCount + 1 + ' followers';

}); 

