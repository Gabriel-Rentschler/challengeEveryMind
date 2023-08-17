const inputQuestion = document.getElementById("search");

inputQuestion.addEventListener("keypress", (e) => {
    if (inputQuestion.value && e.key === "Enter") SendQuestion();
  });

  function SendQuestion() {

    console.log("teste");
  }