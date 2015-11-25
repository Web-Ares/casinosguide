(function(){

        $.each( $('.text-label'), function(){
            new InputVal ( $(this) );
        } );

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

  
})();
