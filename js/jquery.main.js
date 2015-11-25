(function(){

    $.each( $('.text-label'), function(){
        new InputVal ( $(this) );
    } );

    new Menu();


})();

var InputVal = function (obj) {

    var _obj = obj,
        _input = _obj.find('input');

    var _addEvents = function () {

            _input.on({
                keyup: function(){

                    var curInput = $(this),
                        curLabel = curInput.next('label');

                    if (!curInput.val()==0) {
                        curLabel.css({
                            'opacity': 0
                        })
                    }else{
                        curLabel.css({
                            'opacity': 1
                        })
                    }
                }
            });

            _input.on({
                focusout: function(){

                    var curInput = $(this),
                        curLabel = curInput.next('label');

                    if (!curInput.val()==0) {
                        curLabel.css({
                            'opacity': 0
                        })
                    }else{
                        curLabel.css({
                            'opacity': 1
                        })
                    }
                }
            });
        },

        _init = function () {
            _addEvents();
        };

    _init();
};

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