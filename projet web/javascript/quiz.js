// quiz.js

// Réponses correctes pour chaque question
const correctAnswers = {
    q1: "C",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "A",
    q6: "B",
    q7: "B",
    q8: "A",
    q9: "C",
    q10: "B",
    q11: "B",
    q12: "A",
    q13: "C",
    q14: "A",
    q15: "B"
  };
  
  document.getElementById("submit-btn").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
  
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultsList = "";
  
    // Vérifie les réponses
    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
      const userAnswer = formData.get(question);
  
      if (userAnswer === correctAnswer) {
        score++;
      } else {
        // Ajoute la réponse correcte à la liste des résultats
        resultsList += `<li><strong>${question}:</strong> La réponse correcte est <em>${correctAnswer}</em></li>`;
      }
    }
  
    // Affiche les résultats
    document.getElementById("score").innerHTML = `Votre score : ${score} / ${totalQuestions}`;
    document.getElementById("correct-answers").innerHTML = resultsList;
    document.getElementById("results").style.display = "block";
  });
  