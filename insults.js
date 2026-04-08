let x = 0;

function fetchJokes() {
  let container = document.getElementById("balz");
  let container2 = document.getElementById("balz2");
  container.innerHTML = "Select category and amount of jokes";

  for (let i = 0; i < x; i++) {
    fetch('https://yomama-jokes.com/api/random')
      .then(response => response.json())
      .then(data => {
        container2.innerHTML += `~ ${data.joke} <br><br>`;
      });
  }
}

function listQ() {
    let e = document.getElementById("dropdownNumber");
    let value = e.value; 
  
    if (e.selectedIndex > 0) {
      x = x + Number(value);
    }
  
    fetchJokes();
  }

document.getElementById("dropdownNumber").addEventListener("click", listQ);

fetchJokes();
