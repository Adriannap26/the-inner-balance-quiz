const questions = [
    {
        question: "What is an ideal way to reduce stress?",
        answers: ["Mindful breathing", "Skipping meals", "Spending a long time on social media"],
        correctAnswer: "Mindful breathing",
        elaboration: "Correct, Mindful breathing reduces stress by activating the body's relaxation response, lowering heart rate and blood pressure, and helping to calm the mind."
    }, 
    {
        question: "Which food is considered anti-inflammatory?",
        answers: ["Leafy Greens", "White Bread", "Rapeseed oil"],
        correctAnswer: "Leafy Greens",
        elaboration: "Leafy greens are anti-inflammatory because they are rich in antioxidants, polyphenols, and nutrients that reduce oxidative stress and support overall health."
    }, 
    {
        question: "What activity can help improve mental clarity?",
        answers: ["Watching TV all day", "Meditation", "Eating sugary snacks"],
        correctAnswer: "Meditation",
        elaboration: "Meditation helps mental clarity by calming the mind, reducing stress, and improving focus and concentration through mindfulness practices."
    }, 
    {
        question: "Which drink is beneficial for digestion?",
        answers: ["Soda", "Strong coffee", "Herbal tea"],
        correctAnswer: "Herbal tea",
        elaboration: "Herbal tea benefits digestion by soothing the digestive tract, reducing inflammation, and promoting healthy gut function through natural compounds like antioxidants and essential oils."
    }, 
    {
        question: "What’s the best time to practice mindfulness for stress relief?",
        answers: ["Before starting the day", "During work meetings", "Right before bed"],
        correctAnswer: "Before starting the day",
        elaboration: "Morning is the best time to practice mindfulness for stress relief because it sets a calm, focused tone for the day, reducing stress before it builds up."

    }, 
    {
        question: "Which nutrient is essential for energy production?",
        answers: ["Vitamin D", "Vitamin A", "Vitamin B"],
        correctAnswer: "Vitamin B",
        elaboration: "Vitamin B, essential for energy production, can be found in foods like whole grains, eggs, dairy products, meat (especially poultry and fish), leafy greens, legumes, nuts, and seeds."
    }, 
    {
        question: "What’s a recommended way to start a morning routine?",
        answers: ["Drinking water", "Checking emails", "Eating sugar"],
        correctAnswer: "Drinking water",
        elaboration: "Drinking water in the morning is beneficial because it rehydrates the body after sleep, kickstarts metabolism, and helps flush out toxins."
    }, 
    {
        question: "What’s a benefit of regular exercise?",
        answers: ["Increased irratibility", "Difficulty sleeping", "Improved mood"],
        correctAnswer: "Improved mood",
        elaboration: "Exercise improves mood by releasing endorphins, reducing stress hormones, and enhancing brain function, which collectively boost feelings of happiness and well-being."
    }, 
    {
        question: "Which practice can help with flexibility and stress reduction?",
        answers: ["Yoga", "Intense weightlifting", "High speed running"],
        correctAnswer: "Yoga",
        elaboration: "Yoga enhances flexibility through stretches that lengthen muscles and improve range of motion, while reducing stress by promoting relaxation and mindfulness through controlled breathing and meditation."
    }, 
    {
        question: "Which type of fats are beneficial to health?",
        answers: ["Saturated fats", "Omega-3 fatty acids", "Trans fats"],
        correctAnswer: "Omega-3 fatty acids",
        elaboration: "Omega-3 fatty acids are beneficial for health because they reduce inflammation, support heart health, improve brain function, and promote overall cellular health."
    },
    {
        question: "Which activity can help reduce anxiety?",
        answers: ["Journaling thoughts", "Overworking", "Avoiding relaxation"],
        correctAnswer: "Journaling thoughts",
        elaboration: "Journaling helps anxiety by allowing individuals to express and process their emotions, gain clarity, and reduce mental clutter, which can alleviate stress and promote emotional well-being."
    },
    {
        question: "Which of these practices is beneficial for better sleep?",
        answers: ["Drinking caffeinated beverages in the evening", "Watching action movies before bed", "Creating a bedtime routine"],
        correctAnswer: "Creating a bedtime routine",
        elaboration: "Creating a bedtime routine promotes better sleep by signaling to the body that it's time to wind down, helping to regulate the sleep cycle and reduce stress, making it easier to fall and stay asleep."
    },
    {
        question: "What is a recommended way to stay hydrated?",
        answers: ["Drinking sugary juices", "Drinking water throughout the day", "Having a large amount at night"],
        correctAnswer: "Drinking water throughout the day",
        elaboration: "To remember to drink water throughout the day, set regular reminders on your phone, use a water bottle with time markers, or establish a routine like drinking a glass before or after each meal."
    },
    {
        question: "What can help boost immune health?",
        answers: ["Skipping meals frequently", "High intake of sugary foods", "A balanced diet rich in fruits and vegetables"],
        correctAnswer: "A balanced diet rich in fruits and vegetables",
        elaboration: "A balanced diet rich in fruits and vegetables boosts the immune system by providing essential vitamins, minerals, antioxidants, and fiber that support immune function and protect against illness."
    },
    {
        question: "Which practice can improve posture and breathing?",
        answers: ["Regular stretching", "Slouching while working", "Holding tense positions"],
        correctAnswer: "Regular stretching",
        elaboration: "Regular stretching improves posture and breathing by lengthening and strengthening muscles, promoting better alignment, and increasing lung capacity and oxygen flow."
    },
]

const startButton = document.getElementById('start-btn')
const startPage = document.getElementById('start-page')
const quizPage = document.getElementById('quiz-page')
const progressBar = document.getElementById('progressBar')
const question = document.getElementById('question-section')
const answerButtons = document.getElementById('answers-section')
const correctAnswerElaboration = document.getElementById('answer-elaboration-section')

//ensures the quiz starts on the first question
let currentQuestionIndex = 0;


//Show quiz page when the start button is clicked- TBC DOESNT WORK
//ERROR- thinks start button is an option answer and comes up with incorrect error alert
//This is suppsed to hide the start page and show the quiz page

function showQuizPage () {
    startPage.style.display = 'none';
    quizPage.style.display = 'block';
    processQuestion(currentQuestionIndex);
}

startButton.addEventListener('click', showQuizPage);

// creates a span element for each question in the quiz to track quiz progress
function processQuestion (index) {
    progressBar.innerHTML = "";
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
    answerButtons.innerHTML = "";
    questions[index].answers.forEach(answer => {
        answerButtons.innerHTML += `<button>${answer}</button>`;
    })

    //Event listener shows which answer has been selected
    let answers = document.querySelectorAll('button');
    answers.forEach(answer => {
        //shows text content of selected button
        answer.addEventListener('click', e => {
            if (e.target.textContent === questions[index].correctAnswer) {
                const elaboration = questions[index].elaboration || "Correct!";
                alert(elaboration);
            } else {
                alert("Good try, however this is the incorrect answer.");
            };
            if (currentQuestionIndex === questions.length - 1) {
                currentQuestionIndex = 0;
            } else {
                currentQuestionIndex ++;
            }
            processQuestion(currentQuestionIndex);
        });
    });
}

processQuestion(currentQuestionIndex);