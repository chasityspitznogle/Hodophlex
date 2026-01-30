document.addEventListener("DOMContentLoaded", () => {
  const waitForSidebar = setInterval(() => {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (!sidebar || !openBtn || !closeBtn || !overlay) return;

    clearInterval(waitForSidebar);

    const open = () => {
      sidebar.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const close = () => {
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
    };

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    // Active link highlight
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".sidebar-menu a").forEach(link => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  }, 50);
});
