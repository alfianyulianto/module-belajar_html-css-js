const searchButton = document.querySelector('.search-button');

// masih berbentuk synchronouse
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');
//     const movies = getMovies(inputKeyword.value);
//     // console.log(movies);     // hasilnya berupa promise
//     // padahal kita sudah melakukan then harusnya movies sudah berbentuk object bukan promise lagi
//     // hal ini terjadi karena yang kita lakukan pada getMoviews() itu merupakan cara yg "synchronouse" yaitu menyimpan function pada sebuah variabel itu merupakan cara yg synchronouse
//     // makanya hasil yg dikelmbailakan dari function getMovies() berbentuk promise yg keadanny pending
//     // Jadi ketika kita melakukan request ke API harusnya menunggu dulu sampai datanya resolve, tetapi keburu dilakukaj console.log pada variabel movies makanya data yg dikembalikan masih dalam bentuk promise
//     updateUI(movies);
// });

// sudah berbentu asynchronouse
searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);        // sudah berbentu json
    updateUI(movies);
});
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=5325cbf7&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m=>cards += showCard(m));

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// di video sebelumnya eventHandler yg modal-detail-button kita simpan di dalam then yg ada di fect
// untuk kasus yg ini kita ingin buat aagr tombol kita independet terpisah dari method then yg ada di fetch
// event binding
// ketika kita memberikan sebuah event ke elementnya belum ada, tetapi jika elementnya sudah ada eventnya akan tetap masih bisa berjalan
document.addEventListener('click', async function (e) {
    // e.target : akan mengambil element yang diklik
    // classList.contains() : digunakan untuk mengecek apakah ada class tertentu di element
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});
function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=5325cbf7&i=' + imdbid) 
        .then(response => response.json())
        .then(m => m);
}
function updateUIDetail(m) {
    const movieDetail = showDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}





function showCard(m) {
    return  `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
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