let ValueGlobal = 0;
let JokeCounter = 0;
let LimitChecker = 0;

let MainContainer = document.getElementById("MainContainer");

async function ValueEnteredCheck() {
  let ValueEntered = Number(document.getElementById("dropdown").value)

    if(LimitChecker >= 10) {
      MainContainer.innerHTML = ""
      MainContainer.innerHTML = ` ~ Limit reached, come back later! <br><br>`;
      return
    }

    else if (ValueEntered > 3) {
      return alert("Enter only 1-3 jokes.");
    }

      else {
        ValueGlobal = ValueEntered;
        LimitChecker = LimitChecker + ValueEntered;
      }

  fetchJokes();
}

async function fetchJokes() {
  MainContainer.innerHTML = ""

  try {
    async function jokeCheck() {
        if (JokeCounter >= ValueGlobal) {
            ValueGlobal = 0;
            JokeCounter = 0;
            return;
        }

    const response = await fetch(`https://yomama-jokes.com/api/random`)

    if(!response.ok) {
      throw new Error("error")
    }
        const data = await response.json()
        const Jokes = data.joke

        MainContainer.innerHTML += ` ~ ${Jokes} <br><br>`;
        JokeCounter++;

        jokeCheck()
    }
    
    jokeCheck()
  }

  catch(error) {
    console.log(error)
    return
  }

}
