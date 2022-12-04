$(function(){
    // Hide, Show, Toggel
    $('#hide').on('click', function(){
        $('p.halo').hide(1000);
    });
    $('#show').on('click', function(){
        $('p.halo').show(1000);
    });

    // Toggle
    $('#toggle').on('click', function(){
        $('p.halo').toggle(1000);
    });

});
