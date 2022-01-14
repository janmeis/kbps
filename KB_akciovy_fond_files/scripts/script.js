$(() => {
  var tabs = $("#myTab a");
  tabs.click(function (e) {
    e.preventDefault();
    tabs.each(function () {
      $(this).removeClass("active");
      $($(this).attr("href")).removeClass("active");
    });
    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });

  $('[data-toggle="tooltip"]').tooltip();
})();
