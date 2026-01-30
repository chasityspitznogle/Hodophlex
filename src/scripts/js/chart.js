/*
const ctx = document.getElementById("earningsChart");

const labels = routes.map(r => r.date.split(",")[0]);
const data = routes.map(r => r.pay);

new Chart(ctx, {
  type: "line",
  data: {
    labels,
    datasets: [{
      label: "Weekly Earnings",
      data,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});
