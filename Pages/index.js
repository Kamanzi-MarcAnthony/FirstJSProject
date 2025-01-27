let Count = 1;
let followStatus = "Follow Team";
let followingStatus = " Following";

document.getElementById("followStatus").textContent = followStatus;

const followers = document.getElementById("followers");

    followers.textContent = Count + " followers";


document.getElementById("sportsButton").onclick = function (){
    Count ++;
    followers.textContent = Count + " followers" ;
    document.getElementById("followStatus").textContent = followingStatus;
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
