let x = 0;
let jk = 0;
let z=0;

async function fetchJokes() {
  let container2 = document.getElementById("balz2");
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
        container2.innerHTML += ` ~ ${data.joke} <br><br>`;
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

  let z = false

  if(z==false) {
    z = true
  }

  while (z == true) {
    console.log("waa")
    z = false
    break
  }


    if(z>=10) {
      document.getElementById('wrapper').style.display = 'block';
      return
    }

  let e = document.getElementById("dropdown").value;
  if (e > 3) {
    return alert("Max jokes 3 vro"); 
  }
  else if (e > 0) {
    x = e;
    z=z+e;
  }

  fetchJokes();
}
function closebtn(){
  document.getElementById('wrapper').style.display = 'none';
}
