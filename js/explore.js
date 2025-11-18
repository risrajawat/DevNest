let selectedDeveloper = "";

function openModal(name) {
  selectedDeveloper = name;
  document.getElementById("modalTitle").innerText = `Send Request to ${name}`;
  document.getElementById("connectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("connectModal").style.display = "none";
}

function sendRequest() {
  const note = document.getElementById("noteInput").value.trim();

  if (note === "") {
    alert("Please write a note before sending the request.");
    return;
  }

  alert(`Connection request sent to ${selectedDeveloper} with note:\n"${note}"`);

  closeModal();
  document.getElementById("noteInput").value = "";
}
