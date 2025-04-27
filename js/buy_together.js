$(function () {
  const visibleCount = 5;   // 한 화면에 보여줄 li 개수
  const itemWidth = 170;    // li 하나당 이동 거리
  let currentIndexBook = 0; // 책 슬라이드 현재 위치
  let currentIndexGoods = 0; // 굿즈 슬라이드 현재 위치

  function fetchAndAppend(targetClass, query, limit) {
    return $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: query, size: 10 },
      headers: {
        Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"
      }
    }).done(function (msg) {
      let addedCount = 0;
      for (let i = 0; i < msg.documents.length; i++) {
        const item = msg.documents[i];
        if (!item.thumbnail) continue; // 썸네일 없는 데이터는 스킵

        const title = item.title.substring(0, 30);
        const authors = item.authors.join(", ");
        const price = item.price.toLocaleString() + "원";

        let slideItem = `
          <li>
            <img src="${item.thumbnail}" alt="${title}">
            <div class="together_info">
              <div class="together_title">${title}</div>
              <div class="together_author">${authors}</div>
              <div class="together_price">${price}</div>
            </div>
          </li>
        `;
        $(targetClass).append(slideItem);
        addedCount++;
        if (addedCount >= limit) break;
      }
    });
  }

  $(".together_slide_book").empty();
  $(".together_slide_goods").empty();

  // books ("여행") + goods ("goods") 데이터 모두 가져옴
  $.when(
    fetchAndAppend(".together_slide_book", "소중", 10),
    fetchAndAppend(".together_slide_goods", "굿즈", 10)
  ).done(function () {
    const totalItemsBook = $(".together_slide_book li").length;
    const totalItemsGoods = $(".together_slide_goods li").length;

    // 도서 슬라이드 이동
    $(".together_next_book").click(function () {
      if (totalItemsBook > visibleCount) {
        currentIndexBook++;
        updateSlide(".together_slide_book", currentIndexBook, totalItemsBook);
      }
    });

    $(".together_prev_book").click(function () {
      if (totalItemsBook > visibleCount) {
        currentIndexBook--;
        updateSlide(".together_slide_book", currentIndexBook, totalItemsBook);
      }
    });

    // 굿즈 슬라이드 이동
    $(".together_next_goods").click(function () {
      if (totalItemsGoods > visibleCount) {
        currentIndexGoods++;
        updateSlide(".together_slide_goods", currentIndexGoods, totalItemsGoods);
      }
    });

    $(".together_prev_goods").click(function () {
      if (totalItemsGoods > visibleCount) {
        currentIndexGoods--;
        updateSlide(".together_slide_goods", currentIndexGoods, totalItemsGoods);
      }
    });

    function updateSlide(targetClass, currentIndex, totalItems) {
      const maxMove = totalItems - visibleCount;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxMove) currentIndex = maxMove;

      const newMargin = -(itemWidth * currentIndex);
      $(targetClass).css({
        "transition": "margin-left 0.5s ease",
        "margin-left": newMargin + "px"
      });
    }
  });
});