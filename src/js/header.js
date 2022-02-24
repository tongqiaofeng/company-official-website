let url = window.location.href;
console.log(url);
//以下为截取url的方法
function returnUrl(href) {
  // indexOf 是查某个指定的字符串在字符串首次出现的位置（索引值） （也就是从前往后查）
  // lastIndexOf 是从右向左查某个指定的字符串在字符串中最后一次出现的位置（也就是从后往前查）
  // indexOf是从前向后查  而lastIndexOf是从后向前查   但是二者返回索引都是从前开始数数和计算的
  let number = href.lastIndexOf("/");
  return href.substring(number + 1);
}

$('.min-liHome a').each(function () {
  console.log($(this));
  if (returnUrl($(this).attr('href')) == returnUrl(url)) {
    $(this).children().addClass('active');
  } else {
    $(this).children().removeClass('active');
  }
});

$('.navbar-toggle').click(function () {
  if ($('#menu').css('display') == 'none') {
    $('#menu').css('display', 'block');
  } else if ($('#menu').css('display') == 'block') {
    $('#menu').css('display', 'none');
  }
})

$(".min-icon").click(function () {
  if ($(".min-navbar").css('display') == 'none') {
    $(".min-navbar").css('display', 'block')
  } else if ($(".min-navbar").css('display') == 'block') {
    $(".min-navbar").css('display', 'none')
  }
})