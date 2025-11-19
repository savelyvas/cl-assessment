let currentQuestion = 0;
let answers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoFillBtn = document.getElementById('auto-fill-btn');
const questionSection = document.getElementById('question-section');
const resultsSection = document.getElementById('results-section');
const resultsContent = document.getElementById('results-content');
const restartBtn = document.getElementById('restart-btn');
const exportPdfBtn = document.getElementById('export-pdf-btn');

let currentResults = null;

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

autoFillBtn.addEventListener('click', () => {
  // Fill all remaining questions with random answers
  for (let i = currentQuestion; i < questions.length; i++) {
    const randomOptionIndex = Math.floor(Math.random() * questions[i].options.length);
    answers[i] = randomOptionIndex;
  }
  
  // Go directly to results
  showResults();
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
  currentResults = results;
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
    const themeData = themeDescriptions[strength.key];
    const description = themeData ? themeData.tagline : '';
    const topStrength = themeData && themeData.strengths ? themeData.strengths[0] : '';
    
    html += `
      <div class="strength-card ${domainClass}">
        <div class="strength-rank">#${index + 1}</div>
        <div class="strength-name">${strength.name}</div>
        ${strength.domain ? `<div class="strength-domain">${strength.domain}</div>` : ''}
        ${description ? `<div class="strength-description">${description}</div>` : ''}
        ${topStrength ? `<div class="strength-preview">✓ ${topStrength}</div>` : ''}
        <div class="strength-score">Score: ${strength.score}</div>
        <a href="theme.html?theme=${strength.key}" class="theme-link">View Full Details →</a>
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
  currentResults = null;
  questionSection.style.display = 'block';
  resultsSection.style.display = 'none';
  renderQuestion();
});

exportPdfBtn.addEventListener('click', () => {
  if (!currentResults) return;
  
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  let yPos = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  
  // Title
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text('CliftonStrengths Assessment Results', margin, yPos);
  yPos += 15;
  
  // Date
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPos);
  yPos += 15;
  
  // Dominant Domain
  if (currentResults.dominantDomain) {
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`Dominant Domain: ${currentResults.dominantDomain}`, margin, yPos);
    yPos += 10;
  }
  
  // Top 5 Strengths
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Your Top 5 Strengths', margin, yPos);
  yPos += 10;
  
  currentResults.topStrengths.forEach((strength, index) => {
    const themeData = themeDescriptions[strength.key];
    
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
    // Strength number and name
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`${index + 1}. ${strength.name}`, margin, yPos);
    yPos += 7;
    
    // Domain
    if (strength.domain) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'italic');
      doc.text(`Domain: ${strength.domain}`, margin + 5, yPos);
      yPos += 7;
    }
    
    if (themeData) {
      // Tagline
      doc.setFontSize(10);
      doc.setFont(undefined, 'italic');
      const taglineLines = doc.splitTextToSize(themeData.tagline, maxWidth - 5);
      doc.text(taglineLines, margin + 5, yPos);
      yPos += (taglineLines.length * 5) + 5;
      
      // Description
      doc.setFont(undefined, 'normal');
      const descLines = doc.splitTextToSize(themeData.description, maxWidth - 5);
      doc.text(descLines, margin + 5, yPos);
      yPos += (descLines.length * 5) + 5;
      
      // Strengths
      doc.setFont(undefined, 'bold');
      doc.text('What You Do Well:', margin + 5, yPos);
      yPos += 5;
      doc.setFont(undefined, 'normal');
      
      themeData.strengths.forEach(str => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        const strLines = doc.splitTextToSize(`• ${str}`, maxWidth - 10);
        doc.text(strLines, margin + 10, yPos);
        yPos += (strLines.length * 5) + 2;
      });
      
      yPos += 3;
      
      // Challenges
      doc.setFont(undefined, 'bold');
      doc.text('Potential Challenges:', margin + 5, yPos);
      yPos += 5;
      doc.setFont(undefined, 'normal');
      
      themeData.challenges.forEach(challenge => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        const chalLines = doc.splitTextToSize(`• ${challenge}`, maxWidth - 10);
        doc.text(chalLines, margin + 10, yPos);
        yPos += (chalLines.length * 5) + 2;
      });
    }
    
    yPos += 10;
  });
  
  // Complete Ranking
  if (currentResults.allThemes && currentResults.allThemes.length > 5) {
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('Complete Ranking (All 34 Themes)', margin, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    currentResults.allThemes.forEach((theme, index) => {
      if (yPos > 280) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(`${index + 1}. ${theme.name} - Score: ${theme.score}`, margin, yPos);
      yPos += 5;
    });
  }
  
  // All Themes Descriptions
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(18);
  doc.setFont(undefined, 'bold');
  doc.text('All 34 CliftonStrengths Themes', margin, yPos);
  yPos += 15;
  
  // Get all themes sorted by domain
  const themesByDomain = {
    'Executing': [],
    'Influencing': [],
    'Relationship Building': [],
    'Strategic Thinking': []
  };
  
  Object.entries(themeDescriptions).forEach(([key, data]) => {
    themesByDomain[data.domain].push({ key, ...data });
  });
  
  // Print each domain
  Object.entries(themesByDomain).forEach(([domain, themes]) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(domain, margin, yPos);
    yPos += 8;
    
    themes.forEach(theme => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      // Theme name
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(theme.name, margin + 5, yPos);
      yPos += 6;
      
      // Tagline
      doc.setFontSize(9);
      doc.setFont(undefined, 'italic');
      const taglineLines = doc.splitTextToSize(theme.tagline, maxWidth - 5);
      doc.text(taglineLines, margin + 5, yPos);
      yPos += (taglineLines.length * 4) + 4;
      
      // Description
      doc.setFont(undefined, 'normal');
      const descLines = doc.splitTextToSize(theme.description, maxWidth - 5);
      doc.text(descLines, margin + 5, yPos);
      yPos += (descLines.length * 4) + 4;
      
      // Strengths
      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text('Strengths:', margin + 5, yPos);
      yPos += 4;
      doc.setFont(undefined, 'normal');
      
      theme.strengths.forEach(str => {
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        const strLines = doc.splitTextToSize(`• ${str}`, maxWidth - 10);
        doc.text(strLines, margin + 8, yPos);
        yPos += (strLines.length * 4) + 1;
      });
      
      yPos += 2;
      
      // Challenges
      doc.setFont(undefined, 'bold');
      doc.text('Challenges:', margin + 5, yPos);
      yPos += 4;
      doc.setFont(undefined, 'normal');
      
      theme.challenges.forEach(challenge => {
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        const chalLines = doc.splitTextToSize(`• ${challenge}`, maxWidth - 10);
        doc.text(chalLines, margin + 8, yPos);
        yPos += (chalLines.length * 4) + 1;
      });
      
      yPos += 6;
    });
    
    yPos += 5;
  });
  
  // Save PDF
  doc.save('CliftonStrengths-Results.pdf');
});

renderQuestion();
