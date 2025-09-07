/********************
 * QUIZ *
 ********************/
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Tool Multi Language",
      "Hyperlink and Text Markup Language",
      "HighText Machine Language"
    ],
    answer: "Hypertext Markup Language"
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

function loadQuiz() {
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (opt) => `
        <label>
          <input type="radio" name="q${index}" value="${opt}" />
          ${opt}
        </label>`
        )
        .join("<br/>")}
    `;
    quizContainer.appendChild(div);
  });
}
submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  result.textContent = `You scored ${score} / ${quizData.length}`;
});
loadQuiz();

/********************
 * CAROUSEL (3 imgs)
 ********************/
const track = document.getElementById("carousel-track");
const dotsWrap = document.getElementById("carousel-dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  updateUI();
}

function updateUI() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Buttons
prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

// Init
updateUI();
