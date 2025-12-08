const toggleBtn = document.getElementById("themeToggle");

// 1. Load saved preference
if(localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// 2. Toggle handler
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ---------- LIKE ----------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    let count = Number(e.target.dataset.likes);
    count++;
    e.target.dataset.likes = count;
    e.target.textContent = `👍 Like ${count}`;
  }
});


// ---------- COMMENT ----------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("comment-btn")) {
    const text = prompt("Write comment:");
    if (!text) return;

    const post = e.target.closest(".post-card");
    const box = post.querySelector(".comments"); 
    const p = document.createElement("p");

    p.textContent = text;
    box.appendChild(p);
  }
});


// ---------- SHARE ----------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("share-btn")) {

    const choice = prompt("Share to:\n1. WhatsApp\n2. LinkedIn\n3. Twitter");
    if (!choice) return;
  }
});



