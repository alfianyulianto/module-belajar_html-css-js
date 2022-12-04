$(function(){
    // append
    // // $('#sectionA').append('<p>Paragraf Ini di Tambahan dengan Append</p>');
    // $('.p3').append($('h1'));
    // var $newdiv1 = $( "<div id='object1'>YULIANTO</div>" ),
    // newdiv2 = document.createElement( "div" ),
    // existingdiv1 = document.querySelector( ".p1" );
    // $( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );


    // prepend
    // $('#sectionA').prepend('<p>Paragraf Ini di Tambahan dengan Prepend</p>');
    // var $newdiv1 = $( "<div id='object1'>YULIANTO</div>" ),
    // newdiv2 = document.createElement( "div" ),
    // existingdiv1 = document.querySelector( ".p1" );
    
    // $( "body" ).prepend( $newdiv1, [ newdiv2, existingdiv1 ] );
    
    // is
    $('ul').on('click', function(event){
        // console.log(event.target);
        var target = $(event.target);
        if(target.is('li')){
            target.css('background-color', 'yellow');
        }
    });

    // toggle
    $('.button-toggle').on('click', function(){
        $('.toggle').toggle();
    });

    // addClass
    $('#sectionB').on('click', function(){
        $(this).addClass('warnaMerah');
    });

    // removeClass
    $('#sectionC').on('click', function(){
        $(this).removeClass('backgroundKuning');
    });

    // text
    $('.button-text').click(function(){
        alert('Text : ' + $('p:last').text());
    });

    // html 
    $('.button-html').click(function(){
        alert('HTML  : ' + $('p:last').html());
    });

    // val
    $('.button-val').click(function(){
        var val = $('input').val();
        if(val) {
            alert('Halo, ' + val);
        } else {
            alert('Sometings, wrong!!')
        }
    });

    // map
    $('.coba-map').on('click', function(){
       var li = $('li').map(function(){
           return $(this).text();
       });
       console.log(li);
    });

});