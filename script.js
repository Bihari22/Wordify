const flashcards = [
    { word: "Hello", translation: "Hola", language: "Spanish" },
    { word: "Thank you", translation: "Gracias", language: "Spanish" },
    { word: "Goodbye", translation: "Adiós", language: "Spanish" },
    { word: "Please", translation: "Por favor", language: "Spanish" },
    { word: "Yes", translation: "Sí", language: "Spanish" }
  ];
  
  let flashcardIndex = 0;
  let quizIndex = 0;
  let correct = 0;
  let total = flashcards.length;
  let quizPool = [...flashcards];
  let currentCard = null;
  
  function showNextFlashcard() {
    flashcardIndex++;
  
    if (flashcardIndex < flashcards.length) {
      const card = flashcards[flashcardIndex];
      document.getElementById("flashcard-display").innerText =
        `${card.word} → ${card.translation} (${card.language})`;
    } else {
      document.querySelector("button[onclick='showNextFlashcard()']").style.display = "none";
      document.getElementById("flashcard-display").style.display = "none"
      document.getElementById("start-quiz-btn").style.display = "inline-block";
    }
  }
  
  function goToQuiz() {
    document.getElementById("flashcard-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    
    loadQuiz();
  }
  
  function loadQuiz() {
    if (quizIndex < quizPool.length) {
      currentCard = quizPool[quizIndex];
      document.getElementById("quiz-word").innerText = currentCard.word; 
      document.getElementById("quiz-answer").value = ""; 
      document.getElementById("quiz-feedback").innerText = ""; 
    } else {
      showFinalResult();
    }
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("quiz-answer").value.trim().toLowerCase();
    const checkButton = document.querySelector("button[onclick='checkAnswer()']");
  
    if (userAnswer === "") {
      alert("Please enter an answer before checking.");
      return;
    }

    checkButton.disabled = true;
  
    const correctAnswer = currentCard.translation.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      correct++;
      document.getElementById("quiz-feedback").innerText = `✅ Correct!`;
    } else {
      document.getElementById("quiz-feedback").innerText = `❌ Correct answer: ${currentCard.translation}`;
    }
  
    quizIndex++;
    document.getElementById("quiz-score").innerText = `Score: ${correct}/${quizIndex}`;
  
    setTimeout(() => {
      loadQuiz();  
      checkButton.disabled = false;
    }, 1000); 
  }
  
  
  function showFinalResult() {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    
    document.getElementById("final-score").innerText = `Your score: ${correct} / ${total}`;
    
    let resultMessage = "";
    if (correct === total) {
      resultMessage = "🎉 Excellent! You mastered all the words!";
    } else if (correct >= total / 2) {
      resultMessage = "Good job! Keep practicing!";
    } else {
      resultMessage = "Better luck next time. Keep learning!";
    }
  
    document.getElementById("result-message").innerText = resultMessage;
  }
  
  function resetQuiz() {
    flashcardIndex = 0;
    quizIndex = 0;
    correct = 0;
    quizPool = [...flashcards];
  
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("start-quiz-btn").style.display = "none";
    document.getElementById("flashcard-section").style.display = "block";
    document.getElementById("flashcard-display").innerText = "";
    document.querySelector("button[onclick='showNextFlashcard()']").style.display = "inline-block";
    document.getElementById("flashcard-display").style.display = ""
  
    loadFirstFlashcard();
  }
  
  function loadFirstFlashcard() {
    const card = flashcards[flashcardIndex];
    document.getElementById("flashcard-display").innerText =
      `${card.word} → ${card.translation} (${card.language})`;
  
    document.querySelector("button[onclick='showNextFlashcard()']").style.display = "inline-block";
    document.getElementById("start-quiz-btn").style.display = "none";
  }
  
  window.onload = () => {
    loadFirstFlashcard();
  };
  
  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  function printCertificate() {
    const name = prompt("Enter your name for the certificate:");
    if (!name) return;
    document.getElementById("cert-name").innerText = name;
    document.getElementById("cert-score").innerText = `${correct} out of ${total}`;
    document.getElementById("cert-date").innerText = new Date().toLocaleDateString();
  
    const certificate = document.getElementById("certificate");
    certificate.style.display = "block";
  
    const element = document.getElementById("certificate-content");
  
    const opt = {
      margin:       0.5,
      filename:     `Language_Certificate_${name.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      certificate.style.display = "none"; 
    });
  }
  
