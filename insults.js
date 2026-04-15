let x = 0;
let jk = 0;
let z=0;
let container2 = document.getElementById("balz2");

async function fetchJokes() {
  container2.innerHTML = ""

  try {
    async function joker() {
        if (jk >= x) {
            x = 0;
            jk = 0;
            return;
        }

    const response = await fetch(`https://yomama-jokes.com/api/random`)

    if(!response.ok) {
      throw new Error("error")
    }
        const data = await response.json()
        const jokez = data.joke
        container2.innerHTML += ` ~ ${jokez} <br><br>`;
        jk++;
        joker()
    }
    joker()
  }
  catch(error) {
    console.log(error)
    return
  }
}

async function listQ() {
  let e = Number(document.getElementById("dropdown").value)

    if(z >= 10) {
      container2.innerHTML = ""
      container2.innerHTML = ` ~ Daily limit reached, come back tomorrow! <br><br>`;
      return
    }

    else if (e > 3) {
      return alert("Max jokes 3 vro");
    }

      else {
        x = e;
        z=z+e;
      }

  fetchJokes();
}
