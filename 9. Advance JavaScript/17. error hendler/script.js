const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async function() {
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Movies Not Found!',
          })
    }
});
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=5325cbf7&s=' + keyword)
        // ketika kita menggunakan fatch maka error yang ditangkap adalah error yang ada pada URL
        // jika kita melakukan klik tombol search untuk input yg kosong dan nama film yg tidak ada di API itu erronya bukan dari fetch, error tersebut berasal dari browser. Karena saat jika kita klik tombol search untuk input yg kosong dan nama film yg tidak ada di API maka function updateUI yg menerima parameter movies yg kosong makanya akan muncul error dari browser
        // fetch akan "reject" ketika URL error
        // Jika URL error maka baru akan ketangkap
        .then(response => {
            // console.log(response);      
            // untuk mengecek responsenya berhasil atau tidak kita bisa gunakan "ok" atau "status"
            if (!response.ok) {     // response.ok === false
                // throw new Error() : membuat sebuah error, error ini akan ditangkap oleh blok catch
                throw new Error(response.statusText);
            }
            return response.json();     // jika response "true" maka kembalikan response dan bentuk json
        })
        .then(response => {
            // console.log(response)
            if (response.Response === "False") {
                 // throw new Error() : membuat sebuah error, error ini akan ditangkap oleh blok catch
                throw new Error(response.Error);
            }
            return response.Search;     // jika Response "true" maka kemablikan isi dari property Search
        });
}
function updateUI(movies) {
    let cards = '';
    movies.forEach(m=>cards += showCard(m));

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// event binding
// ketika kita memberikan sebuah event ke elementnya belum ada, tetapi jika elementnya sudah ada eventnya akan tetap masih bisa berjalan
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')){
        try{
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        } catch(err) {
            alert(err)
        }
    }
});
function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=5325cbf7&s=' + imdbid) 
        .then(response =>{
            if( !response.ok ) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(m => {
            if( m.Response === "False") {
                throw new Error(m.Error);
            }
            return m;
        });
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