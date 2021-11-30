let recycle = JSON.parse(localStorage.getItem("deletedItems"));

recycle.forEach((recycleItem) => {
  console.log(recycleItem);
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.classList.add("animate__animated");
  section.setAttribute("id", recycleItem.id);

  const deleteItem = document.createElement("div");
  deleteItem.classList.add("deleteItem");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt");

  const jokeItem = document.createElement("article");
  jokeItem.classList.add("swipeItem");
  jokeItem.textContent = recycleItem.name;

  deleteItem.appendChild(deleteIcon);
  section.appendChild(deleteItem);
  section.appendChild(jokeItem);
  main.appendChild(section);
});
