$(function(){
    $.ajax({
      method: "GET", /*전체 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"습관" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box1 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*국내 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"시집" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box2 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*국외 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"무라카미" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box3 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*이북 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"단편소설" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box4 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*sam */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"제주도" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box5 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*핫트랙스 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"볼펜" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box6 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $.ajax({
      method: "GET",/*교보 */
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"디 에센셜" },
    headers:{Authorization: "KakaoAK de2a4fecc706c3c21421b267c8d08db9"}
    })
    .done(function( msg ) {
    for( let i in msg.documents){
        let title = msg.documents[i].title; 
        let title2 = title.substring(0,35);

        let md =$(".md_box7 a").eq(i);
        md.append($("<img>").attr("src", msg.documents[i].thumbnail))
        .append($("<span>").text(title2))
        .append($("<span>").text(msg.documents[i].authors + " /  " + msg.documents[i].publisher));
    }
    });
    $(".md_box3").siblings("ul").hide();
    $("#md_sub_title > li").click(function(){
    let i = $(this).index() + 1;
    $(".md_box"+i).show().siblings("ul").hide();
    $(this).addClass("purple").siblings().removeClass("purple");
    }); 

    function nextmd() {
        let num = $("#md_sub_title .purple").index()+1; 
    $(".md_box" + num).stop().animate({marginLeft:-230},function(){
        $('.md_box' + num + '> li:first').appendTo('.md_box' + num);
        $('.md_box' + num).css({marginLeft:0});
    });
    }
    function prevmd(){
        let num = $("#md_sub_title .purple").index()+1;
    $('.md_box' + num + '> li:last').prependTo('.md_box' + num);
    $('.md_box' + num).css({marginLeft:-230});
    $('.md_box' + num).stop().animate({marginLeft:0},);
    }
    $("#btnL_md").click(function(){
    prevmd();
    });
    $("#btnR_md").click(function(){
    nextmd();
    });
});