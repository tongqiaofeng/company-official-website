$(function () {
  $('#myTab a').click(function (e) {
    e.preventDefault();
    console.log($(this));
    $(this).tab('show');
  });

  $('.first-tabs').click(function () {
    $(this).parent().parent().parent().parent().css('background', "url('../imgs/product/product-background-03-2.png')");
    console.log($(this));
    console.log($('.first-img').attr('src'));
    // $(this).css('background', "url('../imgs/product/pro-back03.png') center center no-repeat");
    // $('.second-tabs').css('background', '#000');
    // $('.last-tabs').css('background', '#000');
    $(this).addClass('tabs_back');
    $('.second-tabs').removeClass('tabs_back');
    $('.last-tabs').removeClass('tabs_back');

    if ($('.first-img').attr('src') == './imgs/product/icon01.png') {
      $('.first-img').attr('src', './imgs/product/icon01-1.png');
      $('.second-img').attr('src', './imgs/product/icon02.png');
      $('.last-img').attr('src', './imgs/product/icon03.png')
    };

  });

  $('.second-tabs').click(function () {
    $(this).parent().parent().parent().parent().css('background', "url('../imgs/product/product-background-03-2.png')");
    // $(this).css('background', "url('../imgs/product/pro-back03.png') center center no-repeat");
    // $('.first-tabs').css('background', '#000');
    // $('.last-tabs').css('background', '#000');
    $(this).addClass('tabs_back');
    $('.first-tabs').removeClass('tabs_back');
    $('.last-tabs').removeClass('tabs_back');
    if ($('.second-img').attr('src') == './imgs/product/icon02.png') {
      $('.second-img').attr('src', './imgs/product/icon02-1.png');
      $('.first-img').attr('src', './imgs/product/icon01.png');
      $('.last-img').attr('src', './imgs/product/icon03.png')
    };
  });

  $('.last-tabs').click(function () {
    $(this).parent().parent().parent().parent().css('background', "url('../imgs/product/product-background-03-1.png')");
    // $(this).css('background', "url('../imgs/product/pro-back03.png') center center no-repeat");
    // $('.second-tabs').css('background', '#000');
    // $('.first-tabs').css('background', '#000');
    $(this).addClass('tabs_back');
    $('.first-tabs').removeClass('tabs_back');
    $('.second-tabs').removeClass('tabs_back');
    if ($('.last-img').attr('src') == './imgs/product/icon03.png') {
      $('.last-img').attr('src', './imgs/product/icon03-1.png');
      $('.second-img').attr('src', './imgs/product/icon02.png');
      $('.first-img').attr('src', './imgs/product/icon01.png')
    };
  });

})