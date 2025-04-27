fetch("json/author_books.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.author_book_slider');
    data.forEach(book => {
      const html = `
        <div class="book_card">
          <img src="img/${book.image}" alt="${book.title}">
          <p>${book.title}</p>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", html);
    });
  });