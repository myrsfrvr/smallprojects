// Change outline icon to filled when hovering
const menuItems = document.querySelectorAll(".menu-item a");

menuItems.forEach((item) => {
  const icon = item.querySelector(".menu-icon");

  item.addEventListener("mouseenter", () => {
    icon.setAttribute("name", icon.getAttribute("data-icon"));
  });

  item.addEventListener("mouseleave", () => {
    icon.setAttribute("name", icon.getAttribute("name") + "-outline");
  });
});
