axios
  .get(
    "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=lKOxkjKrLxYq3yQgCcwYsBSjtCGdBN0p"
  )
  .then((response) => {
    //const users = response.data;

    const news = response.data.results;
    console.log(news);

    news.forEach((article) => {
      const container_block = document.querySelector(".container_block");
      const section = document.createElement("section");
      section.classList.add("newsContainer");
      section.setAttribute("id", article.title);

      const deleteItem = document.createElement("div");
      deleteItem.classList.add("deleteItem");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("far", "fa-trash-alt");

//      const newsArticle = document.createElement("a");
      const newsArticle = document.createElement("article");
      newsArticle.classList.add("swipeItem");
      newsArticle.textContent = article.title;
      //newsArticle.innerHTML += `<a href="index.html">article.title</a>`;
      //newsArticle.innerHTML += `<a href="index.html"></a>`;
      //newsArticle.textContent = article.title;


      deleteItem.appendChild(deleteIcon);
      section.appendChild(deleteItem);
      section.appendChild(newsArticle);
      container_block.appendChild(section);
    });
  });
