document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("pageTitle");
  if (!titleEl) return;

  const page = location.pathname.split("/").pop() || "index.html";

  const titles = {
    "index.html": "Dashboard",
    "earnings.html": "Earnings",
    "mileage.html": "Mileage",
    "expenses.html": "Expenses",
    "blocks.html": "Blocks",
    "reports.html": "Reports",
    "settings.html": "Settings"
  };

  titleEl.textContent = titles[page] || "Hodophlex";
});
