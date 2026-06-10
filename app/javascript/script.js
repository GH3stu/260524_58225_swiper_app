import $ from "jquery";

document.addEventListener("turbo:load", () => {
  $('.jquery').on('click', function () {
    $(this).css('color', 'red');
  });
});
