$(function () {
        $.ajax({
            url: "./json/kyobo.json",
            dataType: "json",
            success: function (data) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length * 2; i++) {
                        let item = data[i % data.length];
                        $(".kyobo_slide").append(`
                            <li>
                                <img src="img/${item.url}" alt="${item.title}">
                                <div class="text-box">
                                    <h3>${item.title}</h3>
                                    <p class="content">${item.content}</p>
                                </div>
                            </li>
                        `);
                    }
                }
            }
        });
    

        const slideWidth3 = 200;
    
        function next() {
            console.log("슬라이드 next 실행");
            const $slider = $('.kyobo_slide');
    
            $slider.stop().animate({ marginLeft: -slideWidth3 }, 500, function () {
                $slider.append($slider.find('li').first());
                $slider.css({ marginLeft: 0 });
            });
        }
    
        function prev() {
            const $slider = $('.kyobo_slide');
    
            $slider.prepend($slider.find('li').last());
            $slider.css({ marginLeft: -slideWidth3 });
    
            $slider.stop().animate({ marginLeft: 0 }, 500);
        }
    
        // 버튼 이벤트
        $('.kyobo_prev').click(function () {
            prev();
        });
        $('.kyobo_next').click(function () {
            next();
        });
    });