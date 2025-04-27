$(function () {
    $.getJSON("json/event_area.json", function (data) {
      if (data.length > 0) {
        for (let i in data) {
          let html = `
            <li>
              <img src="img/${data[i].img}" alt="${data[i].title}">
              <p class="event_title">${data[i].title}</p>
              <p class="event_date">${data[i].date}</p>
            </li>
          `;
          $(".event_list").append(html);
        }
      }
    });
  });