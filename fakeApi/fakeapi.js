function getdata() {
  let userChoice = document.getElementById("userChoice").value;
  let verify = document.getElementById("verify");
  let text = document.getElementById("text");

  fetch(`https://jsonplaceholder.typicode.com/users/${userChoice}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      text.innerHTML = json.name;
    });
}
