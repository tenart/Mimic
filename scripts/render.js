$( document ).ready(function() {
    $("#render").click(function () {
        
        $('#phone_screen').fadeTo(0,1);
        
        $('canvas').remove();

        html2canvas(document.getElementById("phone_screen"), {
            onrendered: function (canvas) {
                document.body.appendChild(canvas);
                $('canvas').attr('id', 'newcanvas');
                $('#download').attr('class', 'button');
                
                
            },
            width: 450,
            height: 799
        });
        
        
        if ( $("#dim_toggle").attr('class').indexOf('on') >= 0 ) {
            $('#phone_screen').fadeTo(0,0.5);
        };
        
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('#download').click(function () {

        var downloadName = 'IMG_' + getRandomInt(1111, 9999) + '.PNG';

        if ($(this).attr("class") == "button") {
            downloadCanvas(this, 'newcanvas', downloadName)
        }
    });
});