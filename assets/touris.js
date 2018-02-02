var bar = document.querySelector('progress')
    , max = document.body.scrollHeight - window.innerHeight
    , val;
var headerHeight = document.querySelector('header').style.height;
bar.max = max;
addEventListener('scroll', function () {
    bar.value = pageYOffset - headerHeight;
});