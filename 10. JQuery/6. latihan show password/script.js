$(function(){
    $('#checkbox').on('click', function(){
        if($(this).is(":checked")){                // bisa menggnakan prop / is
            $('#password').attr('type', 'text');
        } else {
            $('#password').attr('type', 'password');
        }
    })
})