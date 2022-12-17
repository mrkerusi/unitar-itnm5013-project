(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
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
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. What is SIP?",
        answers: {
          a: "Signal initial Protocol",
          b: "Sign In Protocol",
          c: "Session Initiation Protocol",
          d: "Session International Protocol"
        },
        correctAnswer: "c"
      },
      {
        question: "2. SIP, or Session Initiation Protocol (SIP) is a signaling protocol used for initiating, "+
        "maintaining, and terminating communication sessions that include voice, video and messaging application.",
        answers: {
          a: "False",
          b: "True"
        },
        correctAnswer: "b"
      },
      {
        question: "3. What is one of the major reasons to use VoIP",
        answers: {
          a: "Easy to Use",
          b: "it's Free",
          c: "Lower Cost",
          d: "Mobility"
        },
        correctAnswer: "c"
      },
      {
        question: "4. What is VoIP?.",
        answers: {
          a: "Phone Service Over the Internet",
          b: "Trendy Word for Communication Over Internet",
          c: "The Voice Inttelectual Property",
          d: "Phone Directory in Internet "
        },
        correctAnswer: "a"
      },
      {
        question: "5. What is PBX Stand for?",
        answers: {
          a: "Perbadanan bersatu X",
          b: "Public Branch Exchange ",
          c: "Private Brunch Excalating",
          d: "Private Branch Exchange"
        },
        correctAnswer: "d"
      },
      {
        question: "6. Google PBX is one of leading PBX Company",
        answers: {
          a: "False",
          b: "True"
        },
        correctAnswer: "a"
      },
      {
        question: "7. WebRTC Enables for Voices and Video Communication to work inside web pages",
        answers: {
          a: "False",
          b: "True"
        },
        correctAnswer: "b"
      },
      {
        question: "8. Which one is correct WHY reason WebRTC will give you",
        answers: {
          a: "Open Standard",
          b: "Fun to Use",
          c: "Great Communication ",
          d: "Low Cost"
        },
        correctAnswer: "a"
      },
      {
        question: "9. What is an XMPP",
        answers: {
          a: "eX am Pee Pee",
          b: "Extensible Messaging and Presence Protocol",
          c: "Xtra Messaging and Protocol Publish",
          d: "Extreme Message and Propulsion Protocol"
        },
        correctAnswer: "b"
      },
      {
        question: "10. Which one is the Example XMPP Advantages",
        answers: {
          a: "On Demand",
          b: "Transparent",
          c: "Standard",
          d: "Unique"
        },
        correctAnswer: "c"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();