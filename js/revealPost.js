
function showPost() {
    const revealBtn = document.getElementById("reveal"); 
    const revealPost = document.getElementById("archive"); 

    if (revealPost.style.display === "none") {
        revealPost.style.display = "block";
        revealBtn.innerHTML = "Hide Post";
      } else {
        revealPost.style.display = "none";
        revealBtn.innerHTML = "Show Post";
      }
  }