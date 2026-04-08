
let x = 0;
let t = 2

  let container = document.getElementById("balz");
  container.innerHTML = "Select category and amount of jokes";

function fetchJokes() {
  let container2 = document.getElementById("balz2");

  for (let i = 0; i < x; i++) {
    fetch('https://yomama-jokes.com/api/fat')
      .then(response => response.json())
      .then(data => {
        container2.innerHTML += `~ ${data.joke} <br><br>`;
        x = 0;
        
      });
  }
}

  function listQ() {
    let e = document.getElementById("dropdown").value;
    if (e > 10) {
      return alert("Max jokes 10 vro"); 
    }
    else if (e > 0) {
      x = x + e;
    }
  
    fetchJokes();

  }

fetchJokes();
