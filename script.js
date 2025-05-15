const flashcards = [
    { word: "Hello", translation: "Hola" },
    { word: "Thank you", translation: "Gracias" },
    { word: "Goodbye", translation: "Adiós" },
    { word: "Please", translation: "Por favor" },
    { word: "Yes", translation: "Sí" }
  ];
  
  let quizQueue = [...flashcards]; 
  let correct = 0;
  let total = 0;
  
  function loadQuiz() {
    if (quizQueue.length === 0) {
      quizQueue = [...flashcards]; 
    }
  

    const randomIndex = Math.floor(Math.random() * quizQueue.length);
    const currentCard = quizQueue.splice(randomIndex, 1)[0]; 
  
    document.getElementById("quiz-word").innerText = currentCard.word;
    document.getElementById("quiz-word").dataset.answer = currentCard.translation;
    document.getElementById("quiz-answer").value = "";
    document.getElementById("quiz-feedback").innerText = "";
  }
  
  
  
  function submitAnswer() {
    const userInput = document.getElementById("quiz-answer").value.trim();
    const correctAnswer = document.getElementById("quiz-word").dataset.answer;
  
    if (!userInput) {
      document.getElementById("quiz-feedback").innerText = "Please enter an answer.";
      return;
    }
  
    total++;
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      correct++;
      document.getElementById("quiz-feedback").innerText = "Correct!";
      document.getElementById("quiz-feedback").style.color = "green";
    } else {
      document.getElementById("quiz-feedback").innerText = `Wrong! Correct: ${correctAnswer}`;
      document.getElementById("quiz-feedback").style.color = "red";
    }
  
    document.getElementById("correct-count").innerText = correct;
    document.getElementById("total-count").innerText = total;
  
    setTimeout(loadQuiz, 1500);
  }
  
  window.onload = () => {
    document.getElementById("flashcard-word").innerText = flashcards[0].word;
    loadQuiz();
  };
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "🌞 Light Mode" : "🌙 Dark Mode";
    document.getElementById("darkModeToggle").innerText = mode;
  }
  