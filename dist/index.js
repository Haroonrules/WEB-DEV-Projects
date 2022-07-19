const myKey = "539155c0";
const moviesName = document.getElementById("movies-name");
const searchBtn = document.getElementById("search-btn");
const movieDiv = document.getElementById("movie-div");

const moviesData = () => {
  fetch(`http://www.omdbapi.com/?apikey=${myKey}&s=${moviesName.value}`)
    .then((res) => res.json())
    .then((data) => {
      const movieImdbId = data.Search.map((Search) => {
        const imdb = {
          id: Search.imdbID,
        };
        fetch(`https://www.omdbapi.com/?apiKey=${myKey}&i=${imdb.id}`)
          .then((res) => res.json())
          .then((data) => {
            const moviesData = {
              poster: data.Poster,
              title: data.Title,
              imdbStars: data.imdbRating,
              runtime: data.Runtime,
              genre: data.Genre,
              plot: data.Plot,
            };
            movieDiv.innerHTML += `
            <div class="movies">
            <div class="poster-container">
            <img src="${moviesData.poster}" class="poster"></img>
            </div>
            <div class="movie-details__container">
            <div class="detail-items">
            <h2 class="movie-title">${moviesData.title}</h2>
            <p>⭐ ${moviesData.imdbStars}</p>
            </div>
            <div class="detail-items justify-between">
            <p>${moviesData.runtime}</p>
            <p>${moviesData.genre}</p>
            <div class="watchlist">
            <img src="icons/add-more.svg" class="watchlist-icon">
            <a href="">Watchlist</a>
            </div>
            </div>
            <div>
            <p>${moviesData.plot}</p>
            </div>
            <hr>     
            `;
          });
      });
    })
    .catch((err) => {
      movieDiv.innerHTML = `<h3 class="error-message">Unable to find what you’re looking for. Please try another search.</h3>`;
    });
};

searchBtn.addEventListener("click", (e) => {
  if (movieDiv.hasChildNodes()) {
    movieDiv.innerHTML = "";
  }
  moviesData();
});
