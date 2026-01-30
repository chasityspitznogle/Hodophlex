async function loadLayout(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  const res = await fetch(file);
  container.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayout("sidebar-container", "layout/sidebar.html");
  await loadLayout("header-container", "layout/header.html");
});
