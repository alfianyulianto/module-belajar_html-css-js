$(function(){
    $('button').on('click', function(){
        // $('#div1').load("demo_test.txt");
        // $('#div1').load("demo_test.txt #p1");

        $('#div1').load("http://www.omdbapi.com/?apikey=5325cbf7", function (response, status, xml) {
            console.log(response);
            console.log(status);
            console.log(xml);

            if (status === 'error') {
                $(this).html(xml.statusText)
            }
        })
    });
});
