const questions = [
    {
        question: "What is an ideal way to reduce stress?",
        answers: ["Mindful breathing", "Skipping meals", "Spending a long time on social media"],
        correctAnswer: "Mindful breathing",
    }, 
    {
        question: "Which food is considered anti-inflammatory?",
        answers: ["Leafy Greens", "White Bread", "Rapeseed oil"],
        correctAnswer: "Leafy Greens",
    }, 
    {
        question: "What activity can help improve mental clarity?",
        answers: ["Watching TV all day", "Meditation", "Eating sugary snacks"],
        correctAnswer: "Meditation",
    }, 
    {
        question: "Which drink is beneficial for digestion?",
        answers: ["Soda", "Strong coffee", "Herbal tea"],
        correctAnswer: "Herbal tea",
    }, 
    {
        question: "What’s the best time to practice mindfulness for stress relief?",
        answers: ["Before starting the day", "During work meetings", "Right before bed"],
        correctAnswer: "Before starting the day",
    }, 
    {
        question: "Which nutrient is essential for energy production?",
        answers: ["Vitamin D", "Vitamin A", "Vitamin B"],
        correctAnswer: "Vitamin B",
    }, 
    {
        question: "What’s a recommended way to start a morning routine?",
        answers: ["Drinking water", "Checking emails", "Eating sugar"],
        correctAnswer: "Drinking water",
    }, 
    {
        question: "What’s a benefit of regular exercise?",
        answers: ["Increased irratibility", "Difficulty sleeping", "Improved mood"],
        correctAnswer: "Improved mood",
    }, 
    {
        question: "Which practice can help with flexibility and stress reduction?",
        answers: ["Yoga", "Intense weightlifting", "High speed running"],
        correctAnswer: "Yoga",
    }, 
    {
        question: "Which type of fats are beneficial to health?",
        answers: ["Saturated fats", "Omega-3 fatty acids", "Trans fats"],
        correctAnswer: "Omega-3 fatty acids",
    },
    {
        question: "Which activity can help reduce anxiety?",
        answers: ["Journaling thoughts", "Overworking", "Avoiding relaxation"],
        correctAnswer: "Journaling thoughts",
    },
    {
        question: "Which of these practices is beneficial for better sleep?",
        answers: ["Drinking caffeinated beverages in the evening", "Watching action movies before bed", "Creating a bedtime routine"],
        correctAnswer: "Creating a bedtime routine",
    },
    {
        question: "What is a recommended way to stay hydrated?",
        answers: ["Drinking sugary juices", "Drinking water throughout the day", "Having a large amount at night"],
        correctAnswer: "Drinking water throughout the day",
    },
    {
        question: "What can help boost immune health?",
        answers: ["Skipping meals frequently", "High intake of sugary foods", "A balanced diet rich in fruits and vegetables"],
        correctAnswer: "A balanced diet rich in fruits and vegetables",
    },
    {
        question: "Which practice can improve posture and breathing?",
        answers: ["Regular stretching", "Slouching while working", "Holding tense positions"],
        correctAnswer: "Regular stretching",
    },
]

const progressBar = document.getElementById('progressBar')
const question = document.getElementById('question-section')
const answerButtons = document.getElementById('answers-section')
//ensures the quiz starts on the first question
let currentQuestionIndex = 0;

// creates a span element for each question in the quiz to track quiz progress
function processQuestion (index) {
    questions.forEach(question => {
        progressBar.innerHTML += `<span></span>`
    });

    // Adds seen class to the questions which have been seen to update progress bar
    let spans = document.querySelectorAll('span');
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add('seen');
    }

    //Generates question
    question.innerHTML = 
    `<p>${questions[index].question}</p>`

    //Generates Answer buttons
    questions[index].answers.forEach(answer => {
        answerButtons.innerHTML += `<button>${answer}</button>`;
    })
}

processQuestion(currentQuestionIndex);