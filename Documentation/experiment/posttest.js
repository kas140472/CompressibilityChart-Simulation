
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "“Real gases exhibit ideal-gas behaviour at relatively low pressures and high temperatures.” Please indicate whether this statement is?",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Pseudo-reduced specific volume v<sub>r</sub> is defined as",
      answers: {
        a: "v<sub>r</sub>=v/v<sub>cr</sub>",
        b: "b. v<sub>r</sub> = v<sub>actual</sub>/(RT<sub>cr</sub>/P<sub>cr</sub>)",
        c: "both of the above",
        d: "none of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Given that the refrigerant R-134a is at 50 °C and its critical temperature value is 374.2 K, what is the value of reduced temperature?",
      answers: {
        a: "0.863",
        b: "0.133",
        c: "1.158",
        d: "7.484"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the advantage of using Z instead of a direct plot of v?",
      answers: {
        a: "Smaller range of values in plotting",
        b: "Larger range of values in plotting",
        c: "There is no advantage of using Z"
      },
      correctAnswer: "a"
    },
    {
      question: "Are the reduced properties (reduced pressure, reduced temperature, pseudo-reduced specific volume) dimensionless? ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Determine the pressure of refrigerant-134a at 110 °C and 0.016828 m<sup>3</sup>/kg using the generalized compressibility chart",
      answers: {
        a: "8466.762 kPa",
        b: "1583 kPa",
        c: "1228 kPa",
        d: "1000.999 kPa"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
