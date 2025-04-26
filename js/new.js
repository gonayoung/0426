
$(function () {
    const visibleCount = 5; // 한 화면에 보여줄 아이템 수
    const itemWidth = 200; 
    let currentIndex = 0;

    // 슬라이드 데이터 불러오기
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "산문" },
        headers: { Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9" }
    })
    .done(function (msg) {
        for (let i in msg.documents) {
            let title = msg.documents[i].title.substring(0, 30);
            let thumbnail = msg.documents[i].thumbnail;

            let slideItem = `
                <li>
                    <img src="${thumbnail}" alt="${title}">
                    <h3>${title}</h3>
                </li>
            `;
            $(".new_slide").append(slideItem);
        }


        const totalItems = $(".new_slide li").length;
        const maxIndex = totalItems - visibleCount;

        $(".new_next").click(function () {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlide();
            }
        });


        $(".new_prev").click(function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide();
            }
        });

        function updateSlide() {
            const newMargin = -(itemWidth * currentIndex);
            $(".new_slide").css("margin-left", newMargin + "px");
        }
    });
});

