!function(n){var s={};function t(e){if(s[e])return s[e].exports;var c=s[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=n,t.c=s,t.d=function(n,s,e){t.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,s){if(1&s&&(n=t(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var c in n)t.d(e,c,function(s){return n[s]}.bind(null,c));return e},t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,"a",s),s},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.p="",t(t.s=1)}([function(n,s,t){"use strict";t.r(s);t(2),t(3),t(4),t(5),t(6),t(0);$(".navbar-toggle").click((function(){"none"==$("#menu").css("display")?$("#menu").css("display","block"):"block"==$("#menu").css("display")&&$("#menu").css("display","none"),"none"==$("#menu2").css("display")?$("#menu2").css("display","block"):"block"==$("#menu2").css("display")&&$("#menu2").css("display","none"),"none"==$("#menu3").css("display")?$("#menu3").css("display","block"):"block"==$("#menu3").css("display")&&$("#menu3").css("display","none"),"none"==$("#menu4").css("display")?$("#menu4").css("display","block"):"block"==$("#menu4").css("display")&&$("#menu4").css("display","none")}))},function(n,s,t){n.exports=t(0)},function(n,s){},function(n,s){$((function(){$.ajax({url:"header.html",type:"get",success:function(n){$(n).replaceAll("#header"),$(n).replaceAll("#header2"),$(n).replaceAll("#header3"),$(n).replaceAll("#header4"),$('<link rel="stylesheet" href="css/header.css"/>').appendTo("header")}})})),$((function(){$.ajax({url:"footer.html",type:"get",success:function(n){$(n).replaceAll("#footer"),$('<link rel="stylesheet" href="css/footer.css"/>').appendTo("footer")}})}))},function(n,s){let t=window.location.href;function e(n){let s=n.lastIndexOf("/");return n.substring(s+1)}console.log(t),$(".min-liHome a").each((function(){console.log($(this)),e($(this).attr("href"))==e(t)?$(this).children().addClass("active"):$(this).children().removeClass("active")})),$(".navbar-toggle").click((function(){"none"==$("#menu").css("display")?$("#menu").css("display","block"):"block"==$("#menu").css("display")&&$("#menu").css("display","none")})),$(".min-icon").click((function(){"none"==$(".min-navbar").css("display")?$(".min-navbar").css("display","block"):"block"==$(".min-navbar").css("display")&&$(".min-navbar").css("display","none")}))},function(n,s){$((function(){$("#myTab a").click((function(n){n.preventDefault(),console.log($(this)),$(this).tab("show")})),$(".first-tabs").click((function(){$(this).parent().parent().parent().parent().css("background","url('../imgs/product/product-background-03-2.png')"),console.log($(this)),console.log($(".first-img").attr("src")),$(this).addClass("tabs_back"),$(".second-tabs").removeClass("tabs_back"),$(".last-tabs").removeClass("tabs_back"),"./imgs/product/icon01.png"==$(".first-img").attr("src")&&($(".first-img").attr("src","./imgs/product/icon01-1.png"),$(".second-img").attr("src","./imgs/product/icon02.png"),$(".last-img").attr("src","./imgs/product/icon03.png"))})),$(".second-tabs").click((function(){$(this).parent().parent().parent().parent().css("background","url('../imgs/product/product-background-03-2.png')"),$(this).addClass("tabs_back"),$(".first-tabs").removeClass("tabs_back"),$(".last-tabs").removeClass("tabs_back"),"./imgs/product/icon02.png"==$(".second-img").attr("src")&&($(".second-img").attr("src","./imgs/product/icon02-1.png"),$(".first-img").attr("src","./imgs/product/icon01.png"),$(".last-img").attr("src","./imgs/product/icon03.png"))})),$(".last-tabs").click((function(){$(this).parent().parent().parent().parent().css("background","url('../imgs/product/product-background-03-1.png')"),$(this).addClass("tabs_back"),$(".first-tabs").removeClass("tabs_back"),$(".second-tabs").removeClass("tabs_back"),"./imgs/product/icon03.png"==$(".last-img").attr("src")&&($(".last-img").attr("src","./imgs/product/icon03-1.png"),$(".second-img").attr("src","./imgs/product/icon02.png"),$(".first-img").attr("src","./imgs/product/icon01.png"))}))}))},function(n,s){$((function(){$("#down_img").click((function(){console.log($(window).width());var n=$(window).scrollTop();$(window).width()>1400?$("html,body").animate({scrollTop:n+800},800):$("html,body").animate({scrollTop:n+400},800)}))}))}]);