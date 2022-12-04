$(function(){
    // fadeOut
    $('button:last').on('click', function(){
        $('#div1').fadeOut();
        $('#div2').fadeOut("slow"); 
        $('#div3').fadeOut(3000); 
    });

});
