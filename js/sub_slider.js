$(function () {
    $.ajax({
        url: "./json/sub_slider.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".sub").append(
                        '<li>' +
                        '<img src="img/' + data[i].url + '">' +
                        '<div class="text-box">' +
                        '<h3>' + data[i].title + '</h3>' +
                        '<h4>' + data[i].subtitle + '</h4>' +
                        '<p class="content">' + data[i].content + '</p>' +
                        '<p class="page">' + data[i].page + '</p>' +
                        '</div>' +
                        '</li>'
                    );
                }
            }
        }
    });
});