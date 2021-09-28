$("body").on("click", ".scrollable-tabs li", function () {
    $(".scrollable-tabs li a.active").removeClass("active");
    $(this).addClass("active");
  });