$(function(){
    // fadeOut
    $('button:last').on('click', function(){
        $('#div1').fadeTo("slow", 0.1);
        $('#div2').fadeTo("slow", 0.3); 
        $('#div3').fadeTo("slow", 0.6); 
    });

});
