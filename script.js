'use strict';

const scienceQuiz = [
  {
    id: 1,
    question: 'What is the largest planet in our solar system?',
    options: {
      a: 'Earth',
      b: 'Jupiter',
      c: 'Saturn',
      d: 'Uranus',
    },
    correctAnswer: 'Jupiter',
    nameLabel: 'question--1',
    img: 'science/science.svg',
  },
  {
    id: 2,
    question: 'What is the process by which plants make their own food?',
    options: {
      a: 'Photosynthesis',
      b: 'Respiration',
      c: 'Digestion',
      d: 'Metabolism',
    },
    correctAnswer: 'Photosynthesis',
    nameLabel: 'question--2',
    img: 'science/biology.svg',
  },
  {
    id: 3,
    question: 'What is the smallest planet in our solar system?',
    options: {
      a: 'Mercury',
      b: 'Mars',
      c: 'Pluto',
      d: 'Neptune',
    },
    correctAnswer: 'Pluto',
    nameLabel: 'question--3',
    img: 'science/teaching.svg',
  },
  {
    id: 4,
    question: 'What is the study of fossils called?',
    options: {
      a: 'Palaeontology',
      b: 'Archaeology',
      c: 'Geology',
      d: 'Biology',
    },
    correctAnswer: 'Palaeontology',
    nameLabel: 'question--4',
    img: 'science/experiment.svg',
  },
  {
    id: 5,
    question: "What is the main gas that makes up Earth's atmosphere?",
    options: {
      a: 'Nitrogen',
      b: 'Oxygen',
      c: 'Carbon dioxide',
      d: 'Methane',
    },
    correctAnswer: 'Nitrogen',
    nameLabel: 'question--5',
    img: 'science/alien.svg',
  },
  {
    id: 6,
    question: 'What is the process of changing one element into another?',
    options: {
      a: 'Fusion',
      b: 'Nuclear decay',
      c: 'Transmutation',
      d: 'Fission',
    },
    correctAnswer: 'Transmutation',
    nameLabel: 'question--6',
    img: 'science/environment.svg',
  },
  {
    id: 7,
    question: 'What is the study of the universe?',
    options: {
      a: 'Astrology',
      b: 'Astronomy',
      c: 'Cosmology',
      d: 'Geology',
    },
    correctAnswer: 'Astronomy',
    nameLabel: 'question--7',
    img: 'science/home.svg',
  },
  {
    id: 8,
    question: 'What is the force that holds atoms together?',
    options: {
      a: 'Gravity',
      b: 'Magnetism',
      c: 'Electricity',
      d: 'Nuclear force',
    },
    correctAnswer: 'Nuclear force',
    nameLabel: 'question--8',
    img: 'science/mind.svg',
  },
  {
    id: 9,
    question: 'What is the study of living organisms?',
    options: {
      a: 'Physics',
      b: 'Chemistry',
      c: 'Biology',
      d: 'Geology',
    },
    correctAnswer: 'Biology',
    nameLabel: 'question--9',
    img: 'science/research.svg',
  },
  {
    id: 10,
    question:
      'What is the branch of science that deals with the study of fossils?',
    options: {
      a: 'Paleontology',
      b: 'Astronomy',
      c: 'Oceanography',
      d: 'Meteorology',
    },
    correctAnswer: 'Paleontology',
    nameLabel: 'question--10',
    img: 'science/science.svg',
  },
  {
    id: 11,
    question:
      'What is the study of the properties, behavior, and interactions of matter and energy?',
    options: {
      a: 'Physics',
      b: 'Chemistry',
      c: 'Biology',
      d: 'Geology',
    },
    correctAnswer: 'Physics',
    nameLabel: 'question--11',
    img: 'science/alien.svg',
  },
  {
    id: 12,
    question:
      'What is the study of the structure and function of living organisms?',
    options: {
      a: 'Physiology',
      b: 'Anatomy',
      c: 'Microbiology',
      d: 'Ecology',
    },
    correctAnswer: 'Anatomy',
    nameLabel: 'question--12',
    img: 'science/biology.svg',
  },
  {
    id: 13,
    question: "What is the study of the Earth's atmosphere and weather?",
    options: {
      a: 'Meteorology',
      b: 'Astronomy',
      c: 'Geology',
      d: 'Oceanography',
    },
    correctAnswer: 'Meteorology',
    nameLabel: 'question--13',
    img: 'science/environment.svg',
  },
  {
    id: 14,
    question: "What is the study of the Earth's oceans?",
    options: {
      a: 'Meteorology',
      b: 'Astronomy',
      c: 'Geology',
      d: 'Oceanography',
    },
    correctAnswer: 'Oceanography',
    nameLabel: 'question--14',
    img: 'science/teaching.svg',
  },
];
const mainContainer = document.querySelector('.container');
const nameInput = document.querySelector('.name-input');
const nickNameInput = document.querySelector('.nickname-input');
const genderInput = document.getElementsByName('gender');
const loginBtn = document.querySelector('.login-btn');
const sectionOne = document.querySelector('.section--1');
const sectionTwo = document.querySelector('.section--2');
const sectionThree = document.querySelector('.section--3');
const sectionFour = document.querySelector('.section--4');
const startQuizBtn = document.querySelector('.start-quiz-button');
const playAgainBtn = document.querySelector('.play-again');

let currentQuestion = 0;
let score = 0;

const displayQuestion = function () {
  mainContainer.innerHTML = '';
  const quizQuestion = scienceQuiz[currentQuestion];
  if (quizQuestion?.id === undefined) return;
  const html = `
  
  <div class="question-container">
        <div class="ques-header-div">
          <p class="ques-header">Question <span class="question-number">${quizQuestion.id}</span></p>
        </div>
        <p class="question">${quizQuestion.question}</p>
        <div class="inner-container">
          <div class="image-container"><img src="${quizQuestion.img}" alt="" class="ques-image"></div>
          <div class="answers-container">
            <div class="ans--container">
              <input type="radio" name="question" id="question--1" value="${quizQuestion.options.a}" class="answer-input ${quizQuestion.nameLabel}">
              <label for="quiz" class="answer-1 ans">${quizQuestion.options.a}</label>
            </div>
            <div class="ans--container"><input type="radio" name="question" id="question--2" value="${quizQuestion.options.b}"
                class="answer-input ${quizQuestion.nameLabel}">
              <label for="quiz" class="answer-2 ans">${quizQuestion.options.b}</label>
            </div>
            <div class="ans--container"> <input type="radio" name="question" id="question--3" value="${quizQuestion.options.c}"
                class="answer-input ${quizQuestion.nameLabel}">
              <label for="quiz" class="answer-3 ans">${quizQuestion.options.c}</label>
            </div>
            <div class="ans--container"><input type="radio" name="question" id="question--4"
                value="${quizQuestion.options.d}" class="answer-input ${quizQuestion.nameLabel}">
              <label for="quiz" class="answer-4 ans">${quizQuestion.options.d}</label>
            </div>
          </div>
        </div>
        <button type="submit" class="submit">Submit</button>
      </div>`;

  mainContainer.insertAdjacentHTML('afterbegin', html);
};

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (nameInput.value !== '' && nickNameInput.value !== '')
    sectionOne.style.display = 'none';
  sectionTwo.classList.remove('hidden');
  sectionTwo.style.display = 'flex';
  document.querySelector('.name').textContent = nickNameInput.value;
});

const startQuiz = function () {
  sectionTwo.style.display = 'none';
  sectionThree.style.display = 'flex';
  displayQuestion();
};
startQuizBtn.addEventListener('click', function (e) {
  startQuiz();
});

playAgainBtn.addEventListener('click', function () {
  currentQuestion = 0;
  score = 0;
  startQuiz();
  document.getElementById('file').value = 1;
  sectionFour.style.display = 'none';
});

const displayRadioValue = function () {
  const radioNames = document.getElementsByName('question');
  for (const radioName of radioNames) {
    if (radioName.checked) {
      const selectedAnswer = radioName.value;
      if (selectedAnswer === scienceQuiz[currentQuestion].correctAnswer) {
        score++;
      }
    }
  }
};

const diplayScores = function () {
  document.querySelector('.completed-name').textContent = nameInput.value;
  document.querySelector('.completed-score').textContent = score;
  document.querySelector('.total-score').textContent = scienceQuiz.length;
  document.querySelector('meter').value = score;
};

mainContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('submit')) {
    displayRadioValue();
    currentQuestion++;
    +document.getElementById('file').value++;
    displayQuestion();
  }
  if (currentQuestion === scienceQuiz.length) {
    sectionFour.style.display = 'flex';
    diplayScores();
  }
});
