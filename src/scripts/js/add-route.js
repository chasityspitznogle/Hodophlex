/* =====================================================
   Add Route Controller
   ===================================================== */

const stationSelect = document.getElementById("stationSelect");
const dateInput = document.getElementById("dateInput");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const manualHours = document.getElementById("manualHours");
const durationDisplay = document.getElementById("durationDisplay");

/* ---------- Demo Station Data ---------- */
const stations = JSON.parse(localStorage.getItem("stations")) || [
  { code: "DLA1", city: "Los Angeles" },
  { code: "PHX7", city: "Phoenix" }
];

stations.forEach(s => {
  const opt = document.createElement("option");
  opt.value = s.code;
  opt.textContent = `${s.code} – ${s.city}`;
  stationSelect.appendChild(opt);
});

/* ---------- Time Mode Tabs ---------- */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const mode = tab.dataset.mode;
    document.getElementById("timeRange").hidden = mode !== "times";
    document.getElementById("hourEntry").hidden = mode !== "hours";

    durationDisplay.textContent = "—";
  });
});

/* ---------- Duration Calculation ---------- */
function calculateDuration(start, end) {
  if (!start || !end) return 0;

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  let startMin = sh * 60 + sm;
  let endMin = eh * 60 + em;

  if (endMin < startMin) endMin += 1440;

  return Math.round(((endMin - startMin) / 60) * 10) / 10;
}

function updateDuration() {
  const activeTab = document.querySelector(".tab.active").dataset.mode;

  if (activeTab === "times") {
    const hours = calculateDuration(startTime.value, endTime.value);
    durationDisplay.textContent = hours ? `${hours} hrs` : "—";
  } else {
    durationDisplay.textContent = manualHours.value
      ? `${manualHours.value} hrs`
      : "—";
  }
}

[startTime, endTime, manualHours].forEach(input =>
  input.addEventListener("input", updateDuration)
);

/* ---------- Save Route ---------- */
document.getElementById("routeForm").addEventListener("submit", e => {
  e.preventDefault();

  const route = {
    station: stationSelect.value,
    date: dateInput.value,
    duration: durationDisplay.textContent,
    basePay: Number(basePay.value || 0),
    tips: Number(tips.value || 0),
    mileage: Number(mileage.value || 0),
    notes: notes.value.trim(),
    created: Date.now()
  };

  const routes = JSON.parse(localStorage.getItem("routes")) || [];
  routes.push(route);
  localStorage.setItem("routes", JSON.stringify(routes));

  history.back();
});

/* ---------- Back Button ---------- */
document.getElementById("backBtn").onclick = () => history.back();
