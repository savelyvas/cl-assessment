// Get theme from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const themeKey = urlParams.get('theme');

if (themeKey && themeDescriptions[themeKey]) {
  const theme = themeDescriptions[themeKey];
  
  // Set page title
  document.title = `${theme.name} - S-Strengths`;
  
  // Set domain badge
  const domainBadge = document.querySelector('.theme-domain-badge');
  domainBadge.textContent = theme.domain;
  domainBadge.classList.add(theme.domain.toLowerCase().replace(/\s+/g, '-'));
  
  // Set theme name and tagline
  document.getElementById('theme-name').textContent = theme.name;
  document.getElementById('theme-tagline').textContent = theme.tagline;
  
  // Set description
  document.getElementById('theme-description').textContent = theme.description;
  
  // Set strengths
  const strengthsList = document.getElementById('theme-strengths');
  theme.strengths.forEach(strength => {
    const li = document.createElement('li');
    li.textContent = strength;
    strengthsList.appendChild(li);
  });
  
  // Set challenges
  const challengesList = document.getElementById('theme-challenges');
  theme.challenges.forEach(challenge => {
    const li = document.createElement('li');
    li.textContent = challenge;
    challengesList.appendChild(li);
  });
} else {
  // Theme not found, redirect to home
  window.location.href = 'index.html';
}
