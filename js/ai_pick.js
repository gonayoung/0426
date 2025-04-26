$.ajax({
    url: "./json/ai_pick.json",
    dataType: "json",
    success: function (data) {
        if (data.length > 0) {
            for (var i in data) {
                $(".ai_pick_list").append(
                    '<li>' +
                    '<img src="img/' + data[i].url + '">' +
                    '<div class="text-box">' +
                        '<span>' + data[i].tag + '</span>' +
                        '<h4>' + data[i].title + '</h4>' +
                    '</div>' +
                    '</li>'
                );
            }
        }
    }
});

