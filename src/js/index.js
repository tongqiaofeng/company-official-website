// import "./jquery.min"
// import "./bootstrap"
import "./ajax"
import "./link"
import "./header"
import "./product"
import "./technology"
import "./index"

$('.navbar-toggle').click(function () {
  if ($('#menu').css('display') == 'none') {
    $('#menu').css('display', 'block');
  } else if ($('#menu').css('display') == 'block') {
    $('#menu').css('display', 'none');
  };
  if ($('#menu2').css('display') == 'none') {
    $('#menu2').css('display', 'block');
  } else if ($('#menu2').css('display') == 'block') {
    $('#menu2').css('display', 'none');
  };
  if ($('#menu3').css('display') == 'none') {
    $('#menu3').css('display', 'block');
  } else if ($('#menu3').css('display') == 'block') {
    $('#menu3').css('display', 'none');
  };
  if ($('#menu4').css('display') == 'none') {
    $('#menu4').css('display', 'block');
  } else if ($('#menu4').css('display') == 'block') {
    $('#menu4').css('display', 'none');
  };
})