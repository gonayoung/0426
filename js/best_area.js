$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이" },
    headers: {
        Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9",
    },
  }).done(function (msg) {
    for (let i = 0; i < 5; i++) {
      const book = msg.documents[i];
      const price = parseInt(book.price);
      const salePrice = parseInt(book.sale_price);
      const discountRate =
        salePrice && price ? Math.round((1 - salePrice / price) * 100) : 10;

      let html = `
            <li class="best_item">
              <img src="${book.thumbnail}" alt="${book.title}">
              <div class="best_info">
                <div class="rank">${i + 1}</div>
                <div class="title">${book.title}</div>
                <div class="author">${book.authors.join(", ")}</div>
                <div class="discount">${discountRate}%</div>
                <div class="price">${salePrice.toLocaleString()}원</div>
              </div>
            </li>
          `;
      $(".best_list").append(html);
    }
  });
});
