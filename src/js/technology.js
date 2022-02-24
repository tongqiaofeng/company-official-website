$(function () {
  $('#down_img').click(function () {
    console.log($(window).width());
    var h = $(window).scrollTop(); //获取当前滚动条距离顶部的位置
    var w = $(window).width();
    if (w > 1400) {
      $("html,body").animate({
        scrollTop: h + 800
      }, 800); //点击按钮向下移动800px，时间为800毫秒
    } else {
      $("html,body").animate({
        scrollTop: h + 400
      }, 800); //点击按钮向下移动800px，时间为800毫秒
    }
  })
})