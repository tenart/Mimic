function bubbleGradient() {
    $('span.self').each(function(i) {
        if ( $('#kb_toggle').attr("class").indexOf('on') < 0 ) {
            var offset = $(this).offset();
            var vOffset = (450 - offset.top) * -1;
            var opacity = vOffset * ((1 - 0.4)/450) + 0.4; 
            if ( opacity < 0.6 ) {
                opacity = 0.6;
            } else if ( opacity > 1 ) {
                opacity = 1;
            };
            $(this).fadeTo(0,opacity);
        }; 
        
        if ( $('#kb_toggle').attr("class").indexOf('on') >= 0 ) {
            var offset = $(this).offset();
            var vOffset = (450 - offset.top) * -1;
            var opacity = vOffset * ((1 - 0.4)/450) + 0.55; 
            if ( opacity < 0.6 ) {
                opacity = 0.6;
            } else if ( opacity > 1 ) {
                opacity = 1;
            };
            $(this).fadeTo(0,opacity);
        };
    });
}
var refreshId = setInterval(bubbleGradient, 50);