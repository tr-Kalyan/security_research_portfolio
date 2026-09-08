const copyBtn = document.getElementById("copy-email");
const toast = document.getElementById("toast");
const themeBtn = document.getElementById("theme-toggle");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("kalyansde1@gmail.com");
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 1600);
  } catch {
    window.location.href = "mailto:kalyansde1@gmail.com";
  }
});

const chips = document.querySelectorAll(".chip");
const rows = document.querySelectorAll(".findings tbody tr");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    rows.forEach((row) => {
      row.classList.toggle("hidden", filter !== "all" && row.dataset.platform !== filter);
    });
  });
});

function currentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  if (themeBtn) {
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

themeBtn?.addEventListener("click", () => {
  setTheme(currentTheme() === "dark" ? "light" : "dark");
});

setTheme(currentTheme());
