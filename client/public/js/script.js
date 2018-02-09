
$(document).ready(function () {
  $("a").click(function (event) {
    if (this.hash!=="") {
      event.preventDefault();
      var hash = this.hash;
      $('html').animate({
        scrollTop: $(hash).offset().top

      },500, function () {
        window.location.hash = hash;
      });
    }
  });
});