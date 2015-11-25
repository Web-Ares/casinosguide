$(function(){

    new Menu();

} );

var Menu = function () {

    var _btn = $('.site__header-menu'),
        _menu = $('.site__aside'),
        _window = $(window);

    var _addEvents = function () {

            _btn.on({
                click: function(){
                    _menu.offset({top:_btn.offset().top+_btn.outerHeight(true), left:_btn.offset().left+_btn.outerWidth(true)})
                }
            });

        },
        _init = function () {
            _addEvents();
        };

    _init();
};

$(window).on({
    load: function () {
        
    }
});