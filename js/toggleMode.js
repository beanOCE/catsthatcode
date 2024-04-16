function toggleMode() {
    var element = document.body;
    var imgElement = document.getElementById("iconImg");

            element.classList.toggle("light-mode");
            
            if (element.classList.contains("light-mode")) {
                imgElement.src = "images/icon2.png";
                localStorage.setItem("mode", "light");
            } else {
                imgElement.src = "images/icon.png";
                localStorage.setItem("mode", "dark");
            }
  }

  function applySavedMode() {
    var savedMode = localStorage.getItem("mode");
    var imgElement = document.getElementById("iconImg");

    // If there is no saved mode, default to dark mode
    if (savedMode === null) {
        localStorage.setItem("mode", "dark");
        savedMode = "dark";
    }

    if (savedMode === "light") {
        imgElement.src = "images/icon2.png";
        document.body.classList.add("light-mode");
    } else {
        imgElement.src = "images/icon.png";
        document.body.classList.remove("light-mode");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    applySavedMode();
});