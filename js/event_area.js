$(function(){
    $.getJSON("json/book_events.json", function(data){
        if(data.length > 0){
            for(var i in data){
                let html = `
                    <li>
                        <img src="${data[i].img}" alt="${data[i].title}">
                    </li>
                `;
                $(".event_slide_wrap").append(html);
            }
        }
    });

    let currentIndex = 0;

    $(".event_next").click(function(){
        let slideCount = $(".event_slide_wrap li").length;
        if(currentIndex < slideCount - 1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        $(".event_slide_wrap").css("margin-left", -(815 * currentIndex) + "px");
    });

    $(".event_prev").click(function(){
        let slideCount = $(".event_slide_wrap li").length;
        if(currentIndex > 0){
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        $(".event_slide_wrap").css("margin-left", -(815 * currentIndex) + "px");
    });
});