$(function(){ //베스트, 스테디
    $.ajax({ //전체
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"시간" },
    headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
})
    .done(function( msg ) {
        for(let i in msg.documents){
            let best = $(".list_box1 > li").eq(i);
            let text = msg.documents[i].title;
            if(text.length >15){
                text = text.substring(0,15)+"...";
            }
            best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
            .end()
            .find("p").text(text);            
            best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
        }
    });
    $.ajax({//국내
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"감정" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box2 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//국외
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"time" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box3 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//eBook
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"마더텅" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box4 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//sam
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"제테크" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box5 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//핫트랙
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"굿즈" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box6 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//교보온리
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"디 에센셜" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box7 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//스테디 국내
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"좋은" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box8 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $.ajax({//스테디 해외
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"product" },
        headers:{Authorization: "KakaoAK 8cc5ae53eef0ecb6b84056d9807e957c"}
    })
        .done(function( msg ) {
            for(let i in msg.documents){
                let best = $(".list_box9 > li").eq(i);
                let text = msg.documents[i].title;
                if(text.length >15){
                    text = text.substring(0,15)+"...";
                }
                best.children("a").find("img").attr("src", msg.documents[i].thumbnail)
                .end()
                .find("p").text(text);            
                best.find("span:last").text(msg.documents[i].authors + " · " + msg.documents[i].publisher);
            }
        });
        $(".list_box1").siblings("ul").hide();
        //베스트셀러 or 스테디셀러 선택
        $("#kb_best > li:first").click(function(){
            $(this).addClass("black").siblings().removeClass("black");
            $("#bestSeller").show().children("li:first").addClass("purple").siblings().removeClass("purple");
            $(".list_box1").show().siblings("ul").hide();
            $("#steadySeller").hide();
        });
        $("#kb_best > li:last").click(function(){
            $(this).addClass("black").siblings().removeClass("black");
            $("#steadySeller").show().children("li:first").addClass("purple").siblings().removeClass("purple");;
            $(".list_box8").show().siblings("ul").hide();
            $("#bestSeller").hide();
        });
        //베스트셀러 or 스테디셀러 하위 카테고리 선택
        $("#bestSeller > li").click(function(){
            let i = $(this).index() + 1;
            $(".list_box"+i).show().siblings().hide();
            $(this).addClass("purple").siblings().removeClass("purple");
        });
        $("#steadySeller > li").click(function(){
            let i = $(this).index() + 8;
            $(".list_box"+i).show().siblings().hide();
            $(this).addClass("purple").siblings().removeClass("purple");
        });           
});