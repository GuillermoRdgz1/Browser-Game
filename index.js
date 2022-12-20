const commenceButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionCoverElement = document.getElementById('question-cover')
const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')

let randomQuestions, currentQuestions

commenceButton.addEventListener('click', commenceGame)

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
        question: 'gamora?',
        answers: [
            { text: 'who', correct: false},
            { text: 'where', correct: false},
            { text: 'why', correct: true}
        ]
    }
]