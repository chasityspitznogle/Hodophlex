function calculateWeekStats(routes) {
  let earnings = 0;
  let packages = 0;
  let hours = 0;

  routes.forEach(r => {
    earnings += r.pay;
    packages += r.packages;
    hours += r.duration;
  });

  return { earnings, packages, hours };
}

function renderDashboard() {
  document.getElementById("greeting").textContent =
    `Good evening, ${profile.name.split(" ")[0]}`;

  const stats = calculateWeekStats(routes);

  document.getElementById("week-earnings").textContent =
    `$${stats.earnings.toFixed(2)}`;

  document.getElementById("week-packages").textContent =
    stats.packages;

  document.getElementById("week-hours").textContent =
    stats.hours.toFixed(1);

  const routesList = document.getElementById("routes-list");
  routesList.innerHTML = "";

  routes.slice(0, 3).forEach(route => {
    const div = document.createElement("div");
    div.className = "route";
    div.innerHTML = `
      <strong>${route.station}</strong><br>
      ${route.date} • $${route.pay.toFixed(2)}
    `;
    routesList.appendChild(div);
  });
}

renderDashboard();
