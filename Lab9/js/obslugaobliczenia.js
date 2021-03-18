$(document).ready (function ()
{
    $('#tresc').css('background-color','lightgrey');
    $('#k').css('font-weight','bold').addClass('zielony');
    $('#n').css('font-weight','bold').addClass('zielony');
    $('#pr').css('font-weight','bold').addClass('zielony');
    $('#r').css('font-weight','bold').addClass('zielony');
    $('#ko').css('font-weight','bold').addClass('zielony');
    $("#oblicz").click(function(){

        var k=parseInt( $('#k').val() );
        var n=parseInt( $('#n').val() );
        var pr=parseInt( $('#pr').val() );
        var r=((k*pr/12/100)/(1-(1/Math.pow(1+pr/100/12,n)))).toFixed(2);
        var ko=(n*r).toFixed(2);
        if (isNaN(r))
        {
            $('#r').val("Błędne dane");
            $('#ko').val("Błędne dane");
        }
        else
            {
                $('#r').val(r);
                $('#ko').val(ko);
            }
    });

});
