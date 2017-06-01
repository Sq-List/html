1.用ID来做定位链接：
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


2.如果你的元素没有ID，你想用名字来做定位链接，可以使用这个：
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});

3.为了增强性能，你应该将 $('html, body') 选择器缓存起来。这样每次点击时就不需要再重新查找了
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

4.如果你想更新当前页面的URL。在回调里稍微改一下就可以了：
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
