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

  $("html,body").animate({ scrollTop: $("#target").offset().top }, 500);
