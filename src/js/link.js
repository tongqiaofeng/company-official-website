//包含页头相关的所有代码
$(function () {
  $.ajax({
    url: "header.html",
    type: "get",
    success: function (html) {
      //console.log(html);
      $(html).replaceAll("#header");
      $(html).replaceAll("#header2");
      $(html).replaceAll("#header3");
      $(html).replaceAll("#header4");
      $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("header");
    }
  })
});
//包含页尾相关的所有代码
$(function () {
  $.ajax({
    url: "footer.html",
    type: "get",
    success: function (html) {
      //console.log(html);
      $(html).replaceAll("#footer");
      $(`<link rel="stylesheet" href="css/footer.css"/>`).appendTo("footer");
    }
  })
})