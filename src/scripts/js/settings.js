// Settings
const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "rose", label: "Rose" },
  { id: "mint", label: "Mint" },
  { id: "lavender", label: "Lavender" }
];

const fontSizes = ["small", "medium", "large", "extra-large"];

const settings = {
  theme: localStorage.getItem("theme") || "system",
  fontSize: localStorage.getItem("fontSize") || "medium",
  adultAds: localStorage.getItem("adultAds") === "true"
};

/* ---------- Theme Rendering ---------- */
const themeGrid = document.getElementById("themeGrid");

themes.forEach(theme => {
  const btn = document.createElement("button");
  btn.className = "theme-button";
  btn.textContent = theme.label;

  if (settings.theme === theme.id) btn.classList.add("active");

  btn.onclick = () => {
    document.documentElement.className = theme.id;
    localStorage.setItem("theme", theme.id);
    location.reload();
  };

  themeGrid.appendChild(btn);
});

/* ---------- Font Size ---------- */
const fontList = document.getElementById("fontList");

fontSizes.forEach(size => {
  const div = document.createElement("div");
  div.className = "font-option";
  div.textContent = size;

  if (settings.fontSize === size) div.classList.add("active");

  div.onclick = () => {
    document.documentElement.className = `text-size-${size}`;
    localStorage.setItem("fontSize", size);
    location.reload();
  };

  fontList.appendChild(div);
});

/* ---------- Ads Toggle ---------- */
const adsToggle = document.getElementById("adultAdsToggle");
adsToggle.checked = settings.adultAds;

adsToggle.onchange = () => {
  localStorage.setItem("adultAds", adsToggle.checked);
};
