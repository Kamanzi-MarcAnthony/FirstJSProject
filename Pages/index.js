let Count = 1;
//window.alert('Welcome to the Sports Page!');
document.getElementById("followers").textContent = Count + " followers";


document.getElementById("sportsButton").onclick = function (){
    document.getElementById("followers").textContent = Count++ + " followers" ;

    console.log(Count);
}



// let followers = document.getElementById("followers");
// let followersCount = Number(followers);

// document.getElementById("sportsButton").onclick = function(){
//     // let followersCount = Number(document.getElementById("followers"));
//     document.getElementById("followers").textContent = followersCount + 1 ;

//     console.log(followersCount, typeof followersCount);
// }

// // sportswelcome.addEventListener('click', function() {

// //     document.getElementById("teamname").textContent = "Swarmbyte FC ";
// //     document.getElementById("followers").textContent = followersCount + 1 + ' followers';

// // }); 
