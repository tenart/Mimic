$( document ).ready(function() {

    $('textarea.outtext').elastic();
    
    $(document).on('click', 'textarea.outtext', function() {
        if ( $(this).val() == " " ) {
            alert('this thing is empty');
        };
        
    });

    $('#add_target').click(function() {
        $('#msg_container').append('<span class="outtext target"><div class="delete"></div><textarea class="outtext target"></textarea><br><div id="receive_tail"></div></span>');
        $('textarea').elastic();
        updateScreen();
    });

    $('#add_self').click(function() {
        $('#msg_container').append('<span class="outtext self"><div class="delete"></div><textarea class="outtext self"></textarea><br><div id="send_tail"></div></span>');
        $('textarea.self').focusin();
        $('textarea').elastic();
        updateScreen();
    });

    $(document).on('blur', '#recipient', function() {
        $('#to_name').empty().append( $(this).val() );
    });

    $(document).on('blur', 'textarea', function() {
        if ( $(this).val().length > 0 ) {
            $(this).empty().append( $(this).val() );
        };

        updateScreen();
    });            

    $('#movetoscreen').click(function() {
        updateScreen();
    });

    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
        updateScreen();
    });

    $( "#phone_messages" ).draggable({ axis: "y" });

    function updateScreen() {
        var msg_containerHTML = $('#msg_container').html();
        $('#phone_messages').empty();
        $('#phone_messages').append(msg_containerHTML).append("<span class='outtext target self hide'></span><span class='outtext target hide'></span>");

        $('#phone_messages textarea.self').replaceWith(function(){
            return $("<div class='self bubble' />").append($(this).contents());
        });

        $('#phone_messages textarea.target').replaceWith(function(){
            return $("<div class='target bubble' />").append($(this).contents());
        });

        $('#phone_messages span.self').each(function(i) {
            if ( $(this).next().attr("class").indexOf("target") >= 0 ) {
                $(this).attr("class","outtext self last sent");
            };
            
            if ( $('#chat_color_toggle').attr('class').indexOf('on') < 0 ) {
                $('#phone_messages span .self').css("background","#00d048");
                $('#phone_messages span.last #send_tail').css("background","url(images/SMSTail.png) no-repeat");
            };
            
        });

        $('#phone_messages span.target').each(function(i) {
            if ( $(this).next().attr("class").indexOf("self") >= 0 ) {
                $(this).attr("class","outtext target last received");
            };
        });
        
    };
    
    $('.signal_button').click(function() {
        
        $(this).addClass('filled');
        var sigValue = parseInt($(this).attr('sig'),10);
        var sigImageURL = 'url(images/sig' + sigValue + '.png)';
        
        $('#signal').css("background", sigImageURL);
                
        $('.signal_button').each(function(i) {
            if ( parseInt($(this).attr("sig"),10) > sigValue ) {
                $(this).removeClass('filled');
            } else if ( parseInt($(this).attr("sig"),10) < sigValue ) {
                $(this).addClass('filled');
            };
        });
        
        
    });
    
    $(document).on('blur', '#provider_name', function() {
        if ( $(this).val().length > 0 ) {
            $('#provider').text($(this).val());
        } else {
            $(this).empty().append('&nbsp;');
        };
    }); 
    
    $('#wifi_toggle').click(function() {
        $(this).toggleClass('on');
        $('#wifi').toggle();
    });
    
    $(document).on('blur', '#clock_time', function() {
        if ( $(this).val().length > 0 ) {
            $('#clock').text($(this).val());
        } else {
            $(this).empty().append('&nbsp;');
        };
    }); 
    
    $(document).on('blur', '#unread', function() {
        if ( $(this).val().length > 0 ) {
            if ( $(this).val() == '0' ) {
                $('#back_text').text('Back');
            } else {
                $('#back_text').text('Back (' + $(this).val() + ')');
            }
        } else {
            $(this).empty().append('&nbsp;');
        };
    });
    
    $('#chat_color_toggle').click(function() {
        
        if ( $(this).attr('class').indexOf('on') >= 0 ) {
            $('#phone_messages span div.self').css("background","#00d048");
            $('#phone_messages span.last #send_tail').css("background","url(images/SMSTail.png) no-repeat");
            $(this).removeClass('on');
        } else if ( $(this).attr('class').indexOf('on') < 0) {
            $('#phone_messages span div.self').css("background","#007bff");
            $('#phone_messages span.last #send_tail').css("background","url(images/STail.png) no-repeat");
            $(this).addClass('on');
        };
    });
    
    
    $('#kb_toggle').click(function() {
        $(this).toggleClass('on');
        $('#bottom_bar').toggleClass('raised');
        $('#keyboard').toggle();
    });
    
    $('#dim_toggle').click(function() {
        if ( $(this).attr('class').indexOf('on') >= 0 ) {
            $('#phone_screen').fadeTo('fast',1);
            $(this).removeClass('on');
        } else if ( $(this).attr('class').indexOf('on') < 0) {
            $('#phone_screen').fadeTo('fast',0.2);
            $(this).addClass('on');
        };
    });
    
    
    updateScreen();
        
});

