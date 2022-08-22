$(document).ready(function() {

  $(".linkedin").click(function() {
    location.href = 'https://www.linkedin.com/in/yuxin-meng-70bb8b248/';
  })

  $(".hide_intro").click(function() {
    $(".intro").slideToggle();
    if ($(".hide_show").text() === "▲ click to hide 'me' ▲") {
      $(".hide_show").text("▼ click to show 'me' ▼");
    } else {
      $(".hide_show").text("▲ click to hide 'me' ▲");
    }
  })

})