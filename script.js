const scenarios = [
  {
    sender: "security@accounts-google.com",
    subject: "Security Alert: Unrecognized Device",
    body: "We noticed a login to your account from a new device. Click below to verify your identity.",
    hoverUrl: "http://myaccount-google.security-fix.ru",
    isPhishing: true,
    explanation: "Phishing! Check the link destination: 'security-fix.ru' is an untrusted third-party domain, not google.com."
  },
  {
    sender: "comments-noreply@docs.google.com",
    subject: "Document Shared With You",
    body: "An update was made to your document. Click below to view the latest changes.",
    hoverUrl: "https://docs.google.com/document/d/12345/edit",
    isPhishing: false,
    explanation: "Legitimate! Both the sender address and link destination point directly to official google.com domains."
  }
];

let currentIndex = 0;

function loadScenario() {
  const current = scenarios[currentIndex];
  document.getElementById("sender").innerText = current.sender;
  document.getElementById("subject").innerText = current.subject;
  document.getElementById("body-text").innerText = current.body;
  document.getElementById("hover-url").innerText = current.hoverUrl;
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(userChoice) {
  const current = scenarios[currentIndex];
  const feedbackEl = document.getElementById("feedback");

  if (userChoice === current.isPhishing) {
    feedbackEl.innerText = "Correct! " + current.explanation;
    feedbackEl.style.color = "#1e8e3e";
  } else {
    feedbackEl.innerText = "Incorrect. " + current.explanation;
    feedbackEl.style.color = "#d93025";
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < scenarios.length) {
    loadScenario();
  } else {
    document.getElementById("email-card").innerHTML = "<h3>Quiz Completed! Great job testing your phishing knowledge.</h3>";
    document.querySelector(".options").style.display = "none";
    document.querySelector(".url-preview").style.display = "none";
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
  }
}

loadScenario();
