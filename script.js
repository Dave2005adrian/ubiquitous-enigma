const correctAnswers = {
    q1: "Manila",
    q2: "Tagalog",
    q3: "Jose Rizal",
    q4: "Luzon",
    q5: "June 12, 1898",
    q6: "Visayas Island",
    q7: "Cebu",
    q8:"Cordillera Mountains",
    q9: "Baguio",
    q10: "Cebu",
};

document.getElementById("submit-quiz").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    const userAnswers = new FormData(form);
    let score = 0;
    const wrongAnswers = [];
    
    for (const [key, value] of userAnswers.entries()) {
        if (correctAnswers[key] === value) {
            score++;
        } else {
            wrongAnswers.push(`${key}: Correct answer is ${correctAnswers[key]}`);
        }
    }

    document.getElementById("score").textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
    
    const wrongAnswersList = document.getElementById("wrong-answers");
    wrongAnswersList.innerHTML = "";
    wrongAnswers.forEach(answer => {
        const li = document.createElement("li");
        li.textContent = answer;
        wrongAnswersList.appendChild(li);
    });

    document.getElementById("play-again").style.display = "block";
});

document.getElementById("play-again").addEventListener("click", function () {
    document.getElementById("quiz-form").reset();
    document.getElementById("score").textContent = "Your score will appear here after you complete the quiz.";
    document.getElementById("wrong-answers").innerHTML = "";
    this.style.display = "none";
});
