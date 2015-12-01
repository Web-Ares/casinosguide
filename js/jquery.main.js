(function(){
    'use strict';

    $(function(){

        $.each( $('.text-label'), function(){
            new InputVal ( $(this) );
        } );

        $.each( $('.ranking-trend'), function(){
            new Graph ( $(this) );
        } );

        $.each( $('.last-reviews__items'), function(){
            new Review( $(this) );
        } );

        $.each( $('.last-reviews__main'), function(){
            new WriteReview( $(this) );
        } );

        new Menu();

    });

    var InputVal = function (obj) {

        var _obj = obj,
            _input = _obj.find('input'),
            _textarea = _obj.find('textarea');

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

                _textarea.on({
                    keyup: function(){
                        console.log(101);
                        var curItem = $(this),
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

                _textarea.on({
                    focusout: function(){

                        var curItem = $(this),
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
            _btnOffsetLeft = _btn.offset().left,
            _menu = $('.site__aside'),
            _scroll = null,
            _window = $(window);

        var _addEvents = function () {

                _window.on({
                    'resize': function(){
                        _btnOffsetLeft = _btn.offset().left;
                        _menu.removeClass('opened');
                        _menu.attr('style','');
                        _menu.getNiceScroll().remove();
                    },
                    'load': function(){
                        if(_window.width()>768){
                            _menu.getNiceScroll().remove();
                        }

                    }
                });

                _btn.on({
                    click: function(){
                        if(!_menu.hasClass('opened')){
                            _menu.addClass('opened');
                            _setLeftPosMenu();
                            setTimeout(function(){
                                _addScroll();
                                _menu.getNiceScroll().resize();
                            },500)
                        }else{
                            _menu.removeClass('opened');
                            _menu.attr('style','');
                            _menu.getNiceScroll().remove();
                            _menu.css({
                                left: '-'+ _menu.outerWidth(true)+'px'
                            });
                        }
                    }
                });

            },
            _setLeftPosMenu = function(){
                _menu.offset({
                    left: _btnOffsetLeft+_btn.outerWidth(true)
                });
            },
            _addScroll = function(){
                _scroll = _menu.niceScroll({
                    cursorcolor:"#dc462d",
                    cursoropacitymin: "0",
                    cursorborderradius: "5px",
                    cursorborder: false,
                    cursorwidth: "5px",
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                });
            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

    var Graph = function (obj) {

        var _obj = obj,
            _graph = _obj.find('.rankin-trend__graph'),
            _scroll = null,
            _window = $(window);

        var _addEvents = function () {

                _window.on({
                    'resize': function(){
                        _scroll.resize();

                    },
                    'load': function(){
                        _addScroll();

                    }
                });

            },
            _addScroll = function(){
                _scroll = _graph.niceScroll({
                    cursorcolor:"#dbdbdb",
                    cursoropacitymin: "1",
                    cursorborderradius: "0",
                    cursorborder: false,
                    cursorwidth: "18px",
                    //touchbehavior: true,
                    horizrailenabled: true,
                    background: "#efefef",
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                });
            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

    var Review = function (obj) {

        var _obj = obj,
            _scroll = null,
            _window = $(window);

        var _addEvents = function () {

                _window.on({
                    'resize': function(){
                        _scroll.resize();

                    },
                    'load': function(){
                        _addScroll();

                    }
                });

            },
            _addScroll = function(){
                _scroll = _obj.niceScroll({
                    cursorcolor:"#dbdbdb",
                    cursoropacitymin: "0",
                    cursorborderradius: "0",
                    cursorborder: false,
                    cursorwidth: "12px",
                    touchbehavior: true,
                    background: "#efefef",
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                });
            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

    var WriteReview = function (obj) {

        var _obj = obj,
            _review = _obj.find('.last-reviews__write'),
            _writeReview = _obj.find('.btn_write-review'),
            _reviewClose = _review.find('.last-reviews__write-close');

        var _addEvents = function () {

                _writeReview.on({
                    'click': function(){
                        if(!_review.hasClass('opened')){
                            _review.addClass('opened');
                        }else{
                            _review.removeClass('opened');
                        }

                        return false;

                    }
                });

                _reviewClose.on({
                    'click': function(){
                        _review.removeClass('opened');

                        return false;

                    }
                });

            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

})();

$(window).on({
    load: function () {

    }
});