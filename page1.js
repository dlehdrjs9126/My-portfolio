$(function () {
  $(".nav").mouseover(function () {
    $(".sub_me").stop().slideDown();
    $(".sub_me").css("display", "flex");
  });
  $(".sub_me").mouseleave(function () {
    $(".sub_me").stop().slideUp();
    $(".sub_me").css("display", "flex");
  });
});

$(function () {
  let i = 0;
  $(".main_img").hide().first().show();

  setInterval(function () {
    let ni = (i + 1) % 3;
    $(".main_img").eq(i).fadeOut(2000);
    $(".main_img").eq(ni).fadeIn(2000);
    i = ni;
  }, 3000);
});

$("html,body").animate({ scrollTop: $("#target").offset().top }, 500);
