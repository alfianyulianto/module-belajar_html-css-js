const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=5325cbf7&s=' + inputKeyword.value)
        // json() : untuk merubah response menjadi data json
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m=>cards += showCard(m));

            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards

            // ketika tombol detail di-klik
            // menggunakan querySelectorAll() : karena tombol yang mau diambil banyak
            // beda dengan JQuery untuk pemanggilan satu tombol dengan tombol yang banyak menggunakan sintaks yg sama 
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            // modalDetailButton karena bentuknya nodeList maka kita lakukan loop untuk mencari tombol mana yang kita klik
            modaldetailButton.forEach(btn=> {
                btn.addEventListener('click', function () {
                    // console.log(this);
                    const imdbid = this.dataset.imdbid;     // untuk menangkap data-imdbid di tombol modal-detail-button
                    fetch('http://www.omdbapi.com/?apikey=5325cbf7&i=' + imdbid)
                        // json() : untuk merubah response menjadi data json
                        .then(response => response.json())
                        .then(response => {
                            const movieDetail = showDetail(response);
    
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        });
                });
            });
        });
});


function showCard(m) {
    return  `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">SHow Details</a>
                    </div>
                </div>
            </div>`;
}
function showDetail(response) {
    return  `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${response.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${response.Title} ${response.Year}</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong>${response.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${response.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${response.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${response.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}