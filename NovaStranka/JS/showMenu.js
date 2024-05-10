function showMenu() {
    var menu = document.getElementById("menu");
    console.log(menu.style.display);
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
