$(function() {
    $('#gnav a').on('click', function(event) {
        $('#btn_open').prop('checked',false);
    });
  
    $("#gnav a,.btn_menu").click(function () {
      $(this).toggleClass("active");
      $("body").toggleClass("active");
  });
  });
