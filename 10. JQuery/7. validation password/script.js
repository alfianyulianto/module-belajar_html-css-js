$(function(){
    $('#repeat-password').on('keyup', function(){
        const password = $('#password').val();
        const repeatPassword = $(this).val();
        if(repeatPassword !== password){
            $(this).addClass('is-invalid').removeClass('is-valid');
        } else if(repeatPassword === password) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });

})