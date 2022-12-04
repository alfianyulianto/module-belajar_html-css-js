$(function(){
    // fadeIn
    $('button:last').on('click', function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn("slow"); 
        $('#div3').fadeIn(3000); 
    });

});
