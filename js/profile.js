const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.getElementById("tabContent");

// sample placeholders (replace later with localStorage feed if needed)
const projectsHTML = `
  <div class="card">
    <h3>Chatbot</h3>
    <p>Python + Gemini AI based bot</p>
  </div>
  <div class="card">
    <h3>Portfolio v2</h3>
    <p>React + GSAP animated portfolio</p>
  </div>
`;

const postsHTML = `
  <div class="card">
    <p>🚀 Wrapped my first AI chatbot, dropping soon.</p>
  </div>
  <div class="card">
    <p>💡 Learning Next.js, server actions are wild.</p>
  </div>
`;

const aboutHTML = `
  <div class="card">
    <p>I'm a developer focused on building systems that scale.</p>
    <p>Skills: JavaScript, Python, AI, React, Firebase</p>
    <p>Currently exploring: Generative AI + Cloud</p>
  </div>
`;

tabContent.innerHTML = projectsHTML; // default

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");

    const tab = btn.dataset.tab;

    if (tab === "projects") tabContent.innerHTML = projectsHTML;
    if (tab === "posts") tabContent.innerHTML = postsHTML;
    if (tab === "about") tabContent.innerHTML = aboutHTML;
  });
});
