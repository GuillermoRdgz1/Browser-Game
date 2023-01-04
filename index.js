const commenceButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionCoverElement = document.getElementById('question-cover')
const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')

let randomQuestions, currentQuestions


commenceButton.addEventListener('click', commenceGame)
nextButton.addEventListener('click', () => {
    currentQuestions++
    nextQuestion()
})

function commenceGame() {
    console.log('Started')
    commenceButton.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    questionCoverElement.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestions])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach (answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener('click', selectResponse)
        choicesElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (choicesElement.firstChild) {
        choicesElement.removeChild
        (choicesElement.firstChild)
    }
}

function selectResponse(e) {
    const chosenButton = e.target
    const correct = chosenButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choicesElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })
    if (randomQuestions.length > currentQuestions + 1) {
        nextButton.classList.remove('hide')
    } else {
        commenceButton.innerText = 'REDO'
        commenceButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In "Halloween", what year did Michael kill his sister?',
        answers: [
            { text: '1977', correct: false},
            { text: '1959', correct: false},
            { text: '1963', correct: true},
            { text: '1980', correct: false}
        ]
    },
    {
        question: 'In "John Carpenter\'s The Thing", what game is MacReady playing against a computer, near the beginning of the movie?',
        answers: [
            { text: 'Battleship', correct: false},
            { text: 'Chess', correct: true},
            { text: 'Poker', correct: false},
            { text: 'Checkers', correct: false}
        ]
    },
    {
        question: 'Who is the killer in "Sleepaway Camp"?',
        answers: [
            { text: 'Ricky', correct: false},
            { text: 'Judy', correct: false},
            { text: 'Ronnie', correct: false},
            { text: 'Angela', correct: true}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: 'What classic horror movie was originally titled The Babysitter Murders?',
        answers: [
            { text: 'Rosemary\'s Baby', correct: false},
            { text: 'Halloween', correct: true},
            { text: 'The Cabin in the Woods', correct: false},
            { text: 'Child\'s Play', correct: false}
        ]
    },
    {
        question: 'Who is the only character to appear in and survive all four "Jaws" movies?',
        answers: [
            { text: 'Sean Brody', correct: false},
            { text: 'Milton Brody', correct: false},
            { text: 'Jason Brody', correct: false},
            { text: 'Michael Brody', correct: true}
        ]
    },
    {
        question: 'Where does "Friday the 13th" take place?',
        answers: [
            { text: 'Camp Crystal Lake', correct: true},
            { text: 'Camp Firewood', correct: false},
            { text: 'Camp Victory Lake', correct: false},
            { text: 'Camp Arawak', correct: false}
        ]
    },
    {
        question: 'What was the first horror film nominated for a Best Picture Oscar?',
        answers: [
            { text: 'The Shining', correct: false},
            { text: 'The Evil Dead', correct: false},
            { text: 'The Exorcist', correct: true},
            { text: 'Final Destination', correct: false}
        ]
    },
    {
        question: 'What is the name of the parody movie series set within the “Scream” movies?',
        answers: [
            { text: 'Scream', correct: false},
            { text: 'Ghostface', correct: false},
            { text: 'Stab', correct: true},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: 'How many characters does Jason kill in the first “Friday the 13th" movie?',
        answers: [
            { text: '0', correct: true},
            { text: '4', correct: false},
            { text: '7', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How long does a character have to live after watching the haunted videotape in “The Ring”?',
        answers: [
            { text: '9 days', correct: false},
            { text: '7 days', correct: true},
            { text: '30 days', correct: false},
            { text: '14 days', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
    {
        question: ' “Do you like scary movies?” is well known quote due to which film?',
        answers: [
            { text: 'Scream', correct: true},
            { text: 'Halloween', correct: false},
            { text: 'A Nightmare on Elm Street', correct: false},
            { text: 'Scary Movie', correct: false}
        ]
    },
]

var correct = document.getElementsByClassName("correct");
var wrong = document.getElementsByClassName("wrong");
var score = document.getElementById("score");


var points = 0;

choicesElement.addEventListener("click", function() {
  
  points += 1;
  showPoints();
});

choicesElement.addEventListener("click", function() {

  points -= 0;
  showPoints();
});

function showPoints() {
  score.innerHTML = points;
}

