
// const wait = (Secs) =>{
// return new Promise((resolve) => {
//     setTimeout(() => {
//     if (Secs > 0) {
//         resolve(`You\'ll see this after ${Secs} second`);
//     }}, Secs * 1000);
// })
//     .then((data) => console.log(data))
//    .catch((data) => console.log(data));
// };
function lastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': gitkey}})
        .then(response => response.json())
        .then(data => {
            let maindiv = document.getElementById("commit");
            let lastCommited = data[0].created_at;
            let repo = data[0].repo.name;

            maindiv.innerHTML += "<h1>" + username + "</h1><p>Last Commit on " + lastCommited +", in Repository " + repo + "</p>";
        })
        .catch(error => console.error(error));
}

lastCommit("samuelmoorec");
lastCommit("nnosajasonn");