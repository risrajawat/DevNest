const form = document.getElementById("uploadForm");
const thumbBox = document.getElementById("thumbBox");
const thumbInput = document.getElementById("thumbInput");
const thumbText = document.getElementById("thumbText");

// click → open file picker
thumbBox.addEventListener("click", () => thumbInput.click());

// show selected file name
thumbInput.addEventListener("change", () => {
  if (thumbInput.files.length) {
    thumbText.textContent = "📁 " + thumbInput.files[0].name;
  }
});

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!thumbInput.files.length) {
    alert("Please upload thumbnail first.");
    return;
  }

  alert("🚀 Your project has been submitted!");
  form.reset();
  thumbText.textContent = "Click to Upload Thumbnail";
});
