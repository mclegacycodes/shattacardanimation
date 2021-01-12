$(
    function(){
        $('span').hide().fadeIn(2000);
        $('#shatta').on('click mouseover', function(){
            let shatta = $('#shatta');
            shatta.animate({
                top: 60
            });
            shatta.delay(100).animate({
                top: -60
            })
        });

        
        $('#beyonce').on('click mouseover', function(){
            let b = $('#beyonce');
            b.animate({
                top: 60
            });
            b.delay(100).animate({
                top: -60
            })
        });

       
        $('#cardi').on('click mouseover', function(){
            let c = $('#cardi');
            c.animate({
                top: 60
            });
            c.delay(100).animate({
                top: -60
            })
        });

    }
);