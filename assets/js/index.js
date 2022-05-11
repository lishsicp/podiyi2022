$(function() {
    $('.scrollup').click(function() {
      $("html, body").animate({
        scrollTop:0
      },1000);
    })
})
$(window).scroll(function() {
    if ($(this).scrollTop()>500) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
});


document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        el.classList.toggle('bg-color');
        $target.classList.toggle('is-active');
        $target.classList.toggle('bg-color');
      });
    });
  }
});
