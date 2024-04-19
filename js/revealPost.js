function togglePost(postNum) {
  const revealBtn = document.getElementById(`reveal${postNum}`);
  const revealPost = document.getElementById(`archive${postNum}`);

  if (revealPost.style.display === "none" || revealPost.style.display === "") {
    revealPost.style.display = "block";
    revealBtn.innerHTML = "Hide Post";
  } else {
    revealPost.style.display = "none";
    revealBtn.innerHTML = "Show Post";
  }
}