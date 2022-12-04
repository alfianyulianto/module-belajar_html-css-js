$('.search-button').on('click', function(){
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=5325cbf7&s=" + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards);

            // let el = movies.map(m=>
            //     showDetail(m);
            // ).join('');
            // ini dom
            // $('.movie-container').html(el);
    
            // ketika tombol detil di-klik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=5325cbf7&i=" + $(this).data('imdbid'),
                    success: result => {
                        const movieDetail = showMoviewDetail(result);
                        $('.modal-body').html(movieDetail);
                    },
                    error: err => {
                        console.log(err.responseText)
                    }
                });
            });
        },
        error: err => {
            console.log(err.responseText)
        }
    });
});

function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">SHow Details</a>
                    </div>
                </div>
            </div>`;
};

function showMoviewDetail(result) {
    return  `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${result.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${result.Title} ${result.Year}</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${result.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=5325cbf7&s=avengers",
//     success: result => {
//         const movies = result.Search;
//         let cards = '';
//         movies.forEach(m => {
//             cards += showDetail(m)
//         });
//         // ini dom
//         $('.movie-container').html(cards);

//         // ketika tombol detil di-klik
//         $('.modal-detail-button').on('click', function(){
//             $.ajax({
//                 url: "http://www.omdbapi.com/?apikey=5325cbf7&i=" + $(this).data('imdbid'),
//                 success: result => {
//                     const movieDetail = showMovieDetail(result);
//                     $('.modal-body').html(movieDetail);
//                 },
//                 error: err => {
//                     console.log(err.responseText)
//                 }
//             });
//         });
//     },
//     error: err => {
//         console.log(err.responseText)
//     }
// });

// function showCards(m) {
//     return `<div class="col-md-4 my-3">
//                 <div class="card">
//                     <img src="${m.Poster}" class="card-img-top">
//                     <div class="card-body">
//                         <h5 class="card-title">${m.Title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
//                         <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">SHow Details</a>
//                     </div>
//                 </div>
//             </div>`;
// };

// function showMoviewDetail(result) {
//     return  `<div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <img src="${result.Poster}" class="img-fluid">
//                     </div>
//                     <div class="col-md">
//                         <ul class="list-group">
//                             <li class="list-group-item">
//                                 <h4>${result.Title} ${result.Year}</h4>
//                             </li>
//                             <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
//                             <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
//                             <li class="list-group-item"><strong>Writer : </strong>${result.Writer}</li>
//                             <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>`;
// }