function toggleMode() {
    var element = document.body;
    var imgElement = document.getElementById("iconImg");
    var modeBtn = document.getElementById("modeBtn");

    element.classList.toggle("light-mode");
            
    if (element.classList.contains("light-mode")) {
        imgElement.src = "images/icon2.png";
        localStorage.setItem("mode", "light");
        modeBtn.innerHTML = "Toggle dark mode"; 
    } else {
        imgElement.src = "images/icon.png";
        localStorage.setItem("mode", "dark");
        modeBtn.innerHTML = "Toggle light mode"; 
    }
  }

  function applySavedMode() {
    var savedMode = localStorage.getItem("mode");
    var imgElement = document.getElementById("iconImg");
    var modeBtn = document.getElementById("modeBtn");


    // If there is no saved mode, default to dark mode
    if (savedMode === null) {
        localStorage.setItem("mode", "dark");
        savedMode = "dark";
    }

    if (savedMode === "light") {
        imgElement.src = "images/icon2.png";
        document.body.classList.add("light-mode");
        modeBtn.innerHTML = "Toggle dark mode"; 

    } else {
        imgElement.src = "images/icon.png";
        document.body.classList.remove("light-mode");
        modeBtn.innerHTML = "Toggle light mode";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    applySavedMode();
});