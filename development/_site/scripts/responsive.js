window.onload = function() {
  let sidebar = document.getElementById("sidebar");
  let sidebarButtonOpem = document.getElementById("sidebar-button");
  let sidebarButtonClose = document.getElementById("sidebar-button-close");

  function openSidebar(e) {
    sidebar.className = sidebar.className + " slideIn";
  }

  function closeSidebar(e) {
    sidebar.className = sidebar.className.replace(" slideIn", "");
  }

  sidebarButtonOpem.addEventListener("click", openSidebar, false);
  sidebarButtonClose.addEventListener("click", closeSidebar, false);
};
