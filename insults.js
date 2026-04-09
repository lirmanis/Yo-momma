
let x = 0;

let container = document.getElementById("balz");
container.innerHTML = "Select category and amount of jokes";

function fetchJokes() {
  let container2 = document.getElementById("balz2");
  let kate = document.getElementById("kate").value;
  container2.innerHTML = ""

  for (let i = 0; i < x; i++) {
    fetch('https://yomama-jokes.com/api/random')
      .then(response => response.json())
      .then(data => {
        container2.innerHTML += `~ ${data.joke} <br><br>`;
        let z=0;

        while(z<1) {
          if(container2.innerHTML.match(kate)) {
            console.log("aa")
            z = z+1;
            break
          }
          else {
            container2.innerHTML = ""
            fetchJokes()
          }
        }
        
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
