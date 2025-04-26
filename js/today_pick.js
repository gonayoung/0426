$(function(){
    $.ajax({ /*w전체*/
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"에세이" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {     
          
          $(".Today_box1 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday1 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });      
          
  
      $.ajax({ /*국내도서 */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"소설" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box2 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday2 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });
      $.ajax({ /*외국도서 */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"vogue" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box3 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday3 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });
      $.ajax({ /*이북 */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"심리학" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box4 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday4 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });
      $.ajax({ /*sam */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"무역" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box5 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday5 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });
      $.ajax({ /*핫트랙 */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"앨범" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box6 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday6 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });
      $.ajax({ /*교보온리 */ 
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"명화" },
      headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
      .done(function( msg ) {    
          
          $(".Today_box7 > li").each(function(i) {
              let bigToday = $(this);
              let text = msg.documents[i].contents;
              let text2 = text.substring(0, 80);
              bigToday.find("img").attr("src", msg.documents[i].thumbnail);
              bigToday.find(".bigText")
                .append($("<span>").text(msg.documents[i].title))
                .append($("<span>").text(msg.documents[i].authors))
                .append($("<span>").text(msg.documents[i].price+"원"))            
                .append($("<p>").text(msg.documents[i].publisher))
                .append($("<p>").text(text2+"..."));
            });
      
            $(".smallToday7 li").each(function(i) {
              let small = $(this);
              small.append($("<img>").attr("src", msg.documents[i + 1].thumbnail))
                .append($("<span>").text(msg.documents[i + 1].title));
            });
      });     
          
  
  });
      