
// navigation bar
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


// contact us
$(".cusinp").focus(function () {
  $(this).parent().addClass("focus");
}).blur(function () {
  if ($(this).val() === '') {
    $(this).parent().removeClass("focus");
  }
})

//to solve contact us reload focus problem
$(document).ready(function () {
  if ($(".cusinp").val() != "") {
    $(".cusinp").parent().addClass("focus");
  }
});