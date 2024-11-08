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
// 메인이미지 이동

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

// 버튼눌렀을때 맨위 , 맨아래로

$(".bt1").click(function () {
  let i = $(this).index();
  let t = $(".wrap").eq(i).offset().top;
  $("html").stop().animate({ scrollTop: t }, 500);
});

$(".bt2").click(function () {
  let i = $(this).index();
  let t = $(".footer").offset().top;
  $("html").stop().animate({ scrollTop: t }, 500);
});

// 스크롤 내렸을때 버튼이 발생 , 소멸

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(".ctn1").offset().top) {
      $(".btn").css("opacity", 1);
    } else {
      $(".btn").css("opacity", 0);
    }
  });
});

// 모달창 클로즈 눌렀을때 사라지기

$(function () {
  $(".close").click(function () {
    $(".pop").hide();
    $(".pop_wrap").hide();
  });

  $(".pop_wrap").click(function () {
    $(".pop").hide();
    $(".pop_wrap").hide();
  });
});

$("html,body").animate({ scrollTop: $("#target").offset().top }, 500);
