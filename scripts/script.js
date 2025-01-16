const questions = [
    {
        question: "What is an ideal way to reduce stress?",
        answers: ["Mindful breathing", "Skipping meals", "Spending a long time on social media"],
        correctAnswer: "Mindful breathing",
        elaboration: "Mindful breathing reduces stress by activating the body's relaxation response, lowering heart rate and blood pressure, and helping to calm the mind."
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

// DOM Elements
const startButton = document.getElementById('start-btn');
const startPage = document.getElementById('start-page');
const quizPage = document.getElementById('quiz-page');
const progressBar = document.getElementById('progressBar');
const questionSection = document.getElementById('question-section');
const answerButtons = document.getElementById('answers-section');
const answerElaboration = document.getElementById('answer-elaboration-section');

//ensures the quiz starts on the first question
let currentQuestionIndex = 0;

//Start Quiz
startButton.addEventListener('click', () => {
    console.log("Start button clicked");
    startPage.style.display = 'none';
    quizPage.style.display = 'block';
    showQuestion(currentQuestionIndex);
});

let results = [];

// Display current question and answers
function showQuestion(index) {
    //Reset progress bar
    progressBar.innerHTML = questions.map((_,i) => `<span class="${i <= index ? 'seen' : ''}"></span>`).join('');
    console.log('Generated HTML:', progressBar.innerHTML);

     //Display question
     questionSection.innerHTML = `<p>${questions[index].question}</p>`
     console.log("question pop up");

     //Display Answer
     answerButtons.innerHTML = "";
     questions[index].answers.forEach(answer => {
        console.log(`Creating button for answer: ${answer}`);
        const button = document.createElement('button');
        button.classList.add('quiz-answer'); //Added for CSS purposes
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswer(index, answer));
        console.log(`Button clicked for answer: ${answer}`);
        answerButtons.appendChild(button);
        console.log(`Button added to DOM: ${answer}`);
     });
}

//Handle answer function, reacts to the users answer
function handleAnswer(index, selectedAnswer) {
    const question = questions[index];
    const isCorrect = selectedAnswer === question.correctAnswer;

    results.push ({
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect
    });

    answerElaboration.innerHTML = `<p class="${isCorrect ? 'correct' : 'incorrect'}">${isCorrect 
        ? "Correct!" : "Good try, however this is the incorrect answer."} ${question.elaboration}</p>`;

    /*if (selectedAnswer === question.correctAnswer) {
        answerElaboration.innerHTML = `<p class="correct">Correct! ${question.elaboration}</p>`
        } else {
            answerElaboration.innerHTML = `<p class="incorrect">Good try, however this is the incorrect answer. ${question.elaboration}</p>`
        } */

            //TBC This doesn't work as it should as the elaboration is still there for previous question on new question
            //DEBUG!


    setTimeout(() => {
        if (index + 1 < questions.length) {
                showQuestion(index + 1);
            } else {
                showEndPage();
            }
        }, 2000);
    
    function showEndPage() {
        quizPage.style.display = 'none';
        const endPage = document.getElementById('end-page');
        endPage.style.display = 'block';
        
}

// Insert take me to the next question into function. TBC 