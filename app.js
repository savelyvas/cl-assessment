let currentQuestion = 0;
let answers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionSection = document.getElementById('question-section');
const resultsSection = document.getElementById('results-section');
const resultsContent = document.getElementById('results-content');
const restartBtn = document.getElementById('restart-btn');

totalQuestionsSpan.textContent = questions.length;

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    if (answers[currentQuestion] === index) {
      optionDiv.classList.add('selected');
    }
    
    optionDiv.innerHTML = `
      <div class="option-label">${option.label}</div>
      <div class="option-text">${option.text}</div>
    `;
    
    optionDiv.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionDiv);
  });
  
  currentQuestionSpan.textContent = currentQuestion + 1;
  updateProgress();
  updateButtons();
}

function selectOption(index) {
  answers[currentQuestion] = index;
  renderQuestion();
  nextBtn.disabled = false;
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function updateButtons() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = answers[currentQuestion] === undefined;
  
  if (currentQuestion === questions.length - 1 && answers[currentQuestion] !== undefined) {
    nextBtn.textContent = 'View Results';
  } else {
    nextBtn.textContent = 'Next';
  }
}

prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
});

async function showResults() {
  // Convert answers to the format expected by the server
  const answerData = answers.map((answerIndex, questionIndex) => {
    const selectedOption = questions[questionIndex].options[answerIndex];
    return {
      theme: selectedOption.theme,
      value: selectedOption.value
    };
  });
  
  try {
    const response = await fetch('/api/submit-assessment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: answerData })
    });
    
    const results = await response.json();
    displayResults(results);
  } catch (error) {
    console.error('Error submitting assessment:', error);
    displayResults(calculateLocalResults(answerData));
  }
}

function calculateLocalResults(answerData) {
  // Fallback calculation if server is unavailable
  const themeScores = {};
  
  answerData.forEach(answer => {
    if (answer && answer.theme) {
      themeScores[answer.theme] = (themeScores[answer.theme] || 0) + answer.value;
    }
  });
  
  const sortedThemes = Object.entries(themeScores)
    .map(([key, score]) => ({
      key: key,
      name: formatStrengthName(key),
      score: score
    }))
    .sort((a, b) => b.score - a.score);
  
  return {
    topStrengths: sortedThemes.slice(0, 5),
    allThemes: sortedThemes
  };
}

function displayResults(results) {
  questionSection.style.display = 'none';
  resultsSection.style.display = 'block';
  
  let html = '<div class="results-header">';
  html += '<h3>Your Top 5 CliftonStrengths</h3>';
  
  if (results.dominantDomain) {
    html += `<p class="dominant-domain">Your dominant domain: <strong>${results.dominantDomain}</strong></p>`;
  }
  
  html += '</div>';
  
  // Display top 5 strengths
  html += '<div class="top-strengths">';
  results.topStrengths.forEach((strength, index) => {
    const domainClass = strength.domain ? strength.domain.toLowerCase().replace(/\s+/g, '-') : '';
    html += `
      <div class="strength-card ${domainClass}">
        <div class="strength-rank">#${index + 1}</div>
        <div class="strength-name">${strength.name}</div>
        ${strength.domain ? `<div class="strength-domain">${strength.domain}</div>` : ''}
        <div class="strength-score">Score: ${strength.score}</div>
        <a href="theme.html?theme=${strength.key}" class="theme-link">Learn More →</a>
      </div>
    `;
  });
  html += '</div>';
  
  // Display domain distribution if available
  if (results.domainDistribution) {
    html += '<div class="domain-distribution">';
    html += '<h3>Your Strength Distribution</h3>';
    html += '<div class="domain-bars">';
    
    Object.entries(results.domainDistribution).forEach(([domain, count]) => {
      const percentage = (count / 5) * 100;
      html += `
        <div class="domain-bar-container">
          <div class="domain-label">${domain}</div>
          <div class="domain-bar-bg">
            <div class="domain-bar-fill" style="width: ${percentage}%"></div>
          </div>
          <div class="domain-count">${count}/5</div>
        </div>
      `;
    });
    
    html += '</div></div>';
  }
  
  // Display all themes ranked
  if (results.allThemes && results.allThemes.length > 5) {
    html += '<div class="all-themes">';
    html += '<h3>Complete Ranking (All 34 Themes)</h3>';
    html += '<div class="themes-grid">';
    
    results.allThemes.forEach((theme, index) => {
      html += `
        <div class="theme-item ${index < 5 ? 'top-theme' : ''}">
          <span class="theme-rank">${index + 1}.</span>
          <a href="theme.html?theme=${theme.key}" class="theme-name-link">${theme.name}</a>
          <span class="theme-score">${theme.score}</span>
        </div>
      `;
    });
    
    html += '</div></div>';
  }
  
  resultsContent.innerHTML = html;
}

function formatStrengthName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
}

restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  answers = [];
  questionSection.style.display = 'block';
  resultsSection.style.display = 'none';
  renderQuestion();
});

renderQuestion();
