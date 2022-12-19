
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
    question: "Given that the refrigerant R-134a is at 1MPa and its critical pressure value is 4.059 MPa, what is the value of reduced pressure?",
    answers: {
      a: "0.246",
      b: "4.059",
      c: "1",
      d: "0.863"
    },
    correctAnswer: "a"
  },

  {
    question: "Which of these is correct about the compressibility of ideal gases?",
    answers: {
      a: "Z>1",
      b: "Z<1",
      c: "Z=>1",
      d: "Z=1"
    },
    correctAnswer: "d"
  },

  {
    question: "For a certain gas, given that Z=0.84 and v<sub>ideal</sub> i.e., the volume obtained from the ideal gas equation is 0.026325 m<sup>3</sup>/kg, calculate the actual specific volume.",
    answers: {
      a: "31.9 m<sup>3</sup>/kg",
      b: "0.031339 m<sup>3</sup>/kg",
      c: "c. 0.022113 m<sup>3</sup>/kg",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Given that the actual specific volume of superheated water is 0.0269 m<sup>3</sup>/kg, calculate the pseudo-reduced specific volume. (R=0.4615 kJ/kg.K, P<sub>cr</sub>=22.06 MPa, T<sub>cr</sub>=647.1 K)",
    answers: {
      a: "1.964",
      b: "1.987",
      c: "1.920",
      d: "0.564"
    },
    correctAnswer: "b"
  },
  {
    question: "Z is defined as",
    answers: {
      a: "Z=Pv/RT",
      b: "Z=v<sub>actual</sub>/v<sub>ideal</sub>",
      c: "Both of the above",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "“The Z factor is approximately the same for all gases at the same reduced temperature and reduced pressure.” Indicate whether this statement is true or false",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
