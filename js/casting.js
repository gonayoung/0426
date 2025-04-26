/*
$(function () {
    $.ajax({
        url: "./json/casting.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".casting_slide").append(
                        '<li>' +
                        '<img src="img/' + data[i].url + '">' +
                        '<div class="text-box">' +
                        '<h3>' + data[i].title + '</h3>' +
                        '</div>' +
                        '</li>'
                    );
                }
            }
        }
    });
});


let slideWidth2 = 200;

function slide() {
    $('.casting_slide').stop().animate({ left: -slideWidth2 }, 400, function () {
        $('.casting_slide li:first').appendTo('.casting_slide');
        $('.casting_slide').css({ left: 0 });
    });
}

function prev() {
    $('.casting_slide li:last').prependTo('.casting_slide');
    $('.casting_slide').css({ left: -slideWidth2 });
    $('.casting_slide').stop().animate({ left: 0 });
}

function next() {
    $('.casting_slide').stop().animate({ left: -slideWidth2 }, function () {
        $('.casting_slide li:first').appendTo('.casting_slide');
        $('.casting_slide').css({ left: 0 });
    });
}

$('.casting_prev').click(function () {
    prev();
});
$('.casting_next').click(function () {
    next();
});
*/

$(function () {
    $.ajax({
        url: "./json/casting.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                // 슬라이드 아이템을 2배로 복제 (화면전환 시각적 확인 위해)
                for (let i = 0; i < data.length * 2; i++) {
                    let item = data[i % data.length];
                    $(".casting_slide").append(`
                        <li>
                            <img src="img/${item.url}" alt="${item.title}">
                            <div class="text-box">
                                <h3>${item.title}</h3>
                            </div>
                        </li>
                    `);
                }
            }
        }
    });

    const visibleCount = 5;
    const itemWidth = 221 + 20; // 이미지 너비 + margin 좌우
    let currentIndex = 0;

    function updateSlide() {
        const newMargin = -(itemWidth * currentIndex);
        $(".casting_slide").stop().animate({ marginLeft: newMargin }, 500);
    }

    $(".casting_next").click(function () {
        const totalItems = $(".casting_slide li").length;
        const maxIndex = totalItems - visibleCount;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlide();
        }
    });

    $(".casting_prev").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide();
        }
    });
});