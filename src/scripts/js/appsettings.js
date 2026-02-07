export const DEFAULT_SETTINGS = {
  theme: "dark",
  fontSize: "medium"
};

export function loadSettings() {
  return {
    ...DEFAULT_SETTINGS,
    ...JSON.parse(localStorage.getItem("hodophlex_settings") || "{}")
  };
}

export function saveSettings(settings) {
  localStorage.setItem("hodophlex_settings", JSON.stringify(settings));
}
