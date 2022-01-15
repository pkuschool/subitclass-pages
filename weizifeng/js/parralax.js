/*
window.matchMedia('')
      .addEventListener('change', event => {
    console.log(event);
    $('#intro').each(function() {
        let difference = $(window).scrollTop() - $(this).offset().top;
        let minmax = $(window).height();
        if ($(this).offset().top < $(window).scrollTop()) {
            let half = (difference / 2) + 'px';
            $(this).find('h1').css('top',half);
            $(this).find('h1').css('font-size',half);
        } else {
            $(this).find('h1').css('top', '0');
        }
    });
});
let intro_pos=document.querySelector("#intro").getBoundingClientRect().top;
*/