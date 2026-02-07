import { loadSettings, saveSettings } from "./appSettings.js";

const settings = loadSettings();

console.log("settings.js loaded");
applySettings();

const themes = [
  { id: "light", label: "Light", desc: "Clean, bright interface", color: "#eab308" },
  { id: "dark", label: "Dark", desc: "Easy on the eyes", color: "#f97316" },
  { id: "rose", label: "Rose", desc: "Dark with pink accent", color: "#f43f5e" },
  { id: "amethyst", label: "Amethyst", desc: "Dark with purple accent", color: "#a855f7" },
  { id: "sepia", label: "Sepia", desc: "Warm vintage tones", color: "#fb923c" },
  { id: "mint", label: "Mint", desc: "Fresh green tones", color: "#22c55e" },
  { id: "lavender", label: "Lavender", desc: "Soft light purple", color: "#c084fc" },
  { id: "system", label: "System", desc: "Match device settings", color: "#94a3b8" }
];

const themeGrid = document.getElementById("themeGrid");

themes.forEach(theme => {
  const card = document.createElement("div");
  card.className = "theme-card";

  if (settings.theme === theme.id) card.classList.add("active");

  card.innerHTML = `
    <div class="theme-title">${theme.label}</div>
    <div class="theme-desc">${theme.desc}</div>
    <div class="theme-dot" style="background:${theme.color}"></div>
  `;

  card.onclick = () => {
    settings.theme = theme.id;
    saveSettings(settings);
    applySettings();
    updateActive(themeGrid, card);
  };

  themeGrid.appendChild(card);
});

const fontSizes = [
  { id: "small", label: "Small", desc: "Compact text for power users" },
  { id: "medium", label: "Medium", desc: "Balanced and easy to read" },
  { id: "large", label: "Large", desc: "Larger text for readability" },
  { id: "extra-large", label: "Extra Large", desc: "Maximum visibility" }
];

const fontList = document.getElementById("fontList");

fontSizes.forEach(size => {
  const card = document.createElement("div");
  card.className = "font-card";

  if (settings.fontSize === size.id) card.classList.add("active");

  card.innerHTML = `
    <strong>${size.label}</strong>
    <div class="font-preview">${size.desc}</div>
    <div class="font-preview">The quick brown fox jumps over the lazy dog</div>
  `;

  card.onclick = () => {
    settings.fontSize = size.id;
    saveSettings(settings);
    applySettings();
    updateActive(fontList, card);
  };

  fontList.appendChild(card);
});


function updateActive(container, activeEl) {
  [...container.children].forEach(el => el.classList.remove("active"));
  activeEl.classList.add("active");
}

function applySettings() {
  document.documentElement.className = "";
  document.documentElement.classList.add(settings.theme);
  document.documentElement.classList.add(`text-size-${settings.fontSize}`);
}

applySettings();
