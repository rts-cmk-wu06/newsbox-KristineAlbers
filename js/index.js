even = false;
function clickFunction() {
  if (even == false) {
    document.getElementById("container_block").style.display = "block";
    even = true;
  } else {
    document.getElementById("container_block").style.display = "none";
    even = false;
  }
}
