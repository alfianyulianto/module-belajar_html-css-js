$(function(){
    // Event keyup
    // $(':input').keyup(function(){
    //     console.log($(':input').val());
    // });

    // // Event keydown atau keypress
    // $(':input').keydown(function(){
    //     console.log($(':input').val());
    // });
    // $(':input').keypress(function(){
    //     console.log($(':input').val());
    // });

    // Event change
    $(':input').on('change', function(){
        console.log($(':input').val());
    });
    $(':input').click(function(){
        $(':input').change();
    });

});
