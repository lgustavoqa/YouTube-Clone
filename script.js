const toggle = document.getElementById("themeToggle");

// Verifica se já existe preferência salva
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

// Evento de clique
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  }
});