let swipeItem = document.querySelector(".swipeItem");
let touchCoordinateStart;
let touchCoordinateMove;
let touchCoordinateEnd;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let touchElement;
let parentElement;
// LocalStorage
let deleteStorage = window.localStorage;
let trash = [];
if (localStorage.getItem("deletedItems")) {
  trash = JSON.parse(localStorage.getItem("deletedItems"));
}

document
  .querySelector(".container_block")
  .addEventListener("touchstart", (e) => {
    if (e.target.tagName == "ARTICLE") {
      touchElement = e.target;
      parentElement = e.target.closest("section");
      touchCoordinateStart = Math.floor(e.touches[0].clientX);

      touchElement.addEventListener("touchmove", (e) => {
        if (touchElement.tagName == "ARTICLE") {
          touchCoordinateMove = Math.floor(e.touches[0].clientX);
          if (
            touchCoordinateMove < touchCoordinateStart &&
            touchCoordinateMove > touchCoordinateStart - deleteButtonWidth
          ) {
            touchElement.style.transform = `translateX(${
              touchCoordinateMove - touchCoordinateStart
            }px)`;
          }
        }
      });

      touchElement.addEventListener("touchend", (e) => {
        if (touchElement.tagName == "ARTICLE") {
          touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);
          if (
            touchCoordinateEnd <
            touchCoordinateStart - deleteButtonWidth / 2
          ) {
            touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
          } else {
            touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
          }
        }
      });

      parentElement.querySelector(".deleteItem").onclick = () => {
        let userObject = {
          id: parentElement.title,
          name: parentElement.querySelector(".swipeItem").textContent,
        };

        console.log(parentElement);
        trash.push(userObject);
        localStorage.setItem("deletedItems", JSON.stringify(trash));
        parentElement.querySelector(".deleteItem").onclick = null;

        parentElement.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
          parentElement.classList.add("collapsed");
        }, 800);
        setTimeout(() => {
          parentElement.remove();
        }, 900);
      };
    }
  });
