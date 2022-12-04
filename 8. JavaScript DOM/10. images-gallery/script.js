const container  = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){

    // cek apakah yang di klik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        // set waktu agar saat klik class fade hilang dan bisa digunakan gambar yang lain
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        // memberikan class active pada thumbanil

        thumb.forEach(function(thumb){
            thumb.classList.remove('active');
            // thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
});