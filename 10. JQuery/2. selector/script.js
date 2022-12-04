// JQuery Selector
// $(document) : untuk menyeleksi semua document di file html
// ready(function(){}) : untuk mengeksekusi dokumen setelah di load 
$(document).ready(function(){
    // Selector Tag
    $('h1').css('color', 'red');
    $('p').css('color', 'blue');

    // Selector class
    $('.judul').css('background-color', 'yellow');
    $('.paragraf').css('background-color', 'salmon');

    // Selector id
    $('#judul').css('border', '2px solid blue')
    $('#paragraf').css('border', '2px dotted black')


    // Selector attribute
    $('[nama="alfian"]').css('color', 'yellow');
    // $('[nama!="alfian"]').css('color', 'pink');

});