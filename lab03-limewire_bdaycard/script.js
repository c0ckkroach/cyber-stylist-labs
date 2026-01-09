const files = [
  "Nirvana – Smells Like Teen Spirit (128kbps)",
  "Nirvana – Come As You Are",
  "Nirvana – In Bloom",
  "Nirvana – Live at Reading 1992",
  "Nirvana – Unplugged (Full Set)"
];

const messages = [
  "Connecting to peer...",
  "Searching the Gnutella network...",
  "Optimizing bitrate...",
  "Peer disconnected, retrying...",
  "Verifying file hash...",
  "Download speed fluctuating...",
  "This may take a while."
];

const completionMessages = [
  "This file appears to be safe. Probably.",
  "No viruses detected. Results not guaranteed.",
  "Playback quality may vary.",
  "Thank you for supporting peer-to-peer sharing."
];

const fileList = document.getElementById("fileList");
const downloadPanel = document.getElementById("downloadPanel");
const progressFill = document.getElementById("progressFill");
const percentText = document.getElementById("percent");
const progressText = document.getElementById("progressText");
const modal = document.getElementById("completeModal");
const completionMessage = document.getElementById("completionMessage");

function renderFiles(list) {
  fileList.innerHTML = "";
  list.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file;
    li.onclick = startDownload;
    fileList.appendChild(li);
  });
}

function startDownload() {
  downloadPanel.classList.remove("hidden");
  progressFill.style.width = "0%";
  percentText.textContent = "0%";
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 7);

    if (progress > 97 && progress < 100) {
      progress = 97;
    }

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      finishDownload();
    }

    progressFill.style.width = progress + "%";
    percentText.textContent = progress + "%";
    progressText.textContent = messages[Math.floor(Math.random() * messages.length)];
  }, 500);
}

function finishDownload() {
  setTimeout(() => {
    downloadPanel.classList.add("hidden");
    completionMessage.textContent =
      completionMessages[Math.floor(Math.random() * completionMessages.length)];
    modal.classList.remove("hidden");
  }, 800);
}

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
};

document.getElementById("spotifyBtn").onclick = () => {
  window.open("https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh", "_blank");
};

document.getElementById("recommendedBtn").onclick = () => {
  document.getElementById("sectionTitle").textContent = "Recommended Results";
  renderFiles(files);
};

// initial load
renderFiles(files);
