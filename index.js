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
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
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
        question: 'In "John Carpenters The Thing", what game is MacReady playing against a computer, near the beginning of the movie?',
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
]


