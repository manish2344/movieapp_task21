const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");
const apiurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=209e3c76fc5fbe2f8266859f142b1e69&page=1";
const image = "https://image.tmdb.org/t/p/w500"
const search_api = "https://api.themoviedb.org/3/search/movie?api_key=209e3c76fc5fbe2f8266859f142b1e69&query="
getdata(apiurl) ///call function
    //getdata
async function getdata(api) {
    const res = await fetch(api)
    const data = await res.json();
    showmovie(data.results);
    //  console.log(data.results);

}
///show all data 
function showmovie(movies) {
    main.innerHTML = ""
    movies.forEach(movie => {
        const {
            title,
            overview,
            poster_path,
            original_language
        } = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
          <img src = "${image + poster_path}"alt = "" >
          <div class = "movie-info" >
          <h3> ${ title } </h3> <span class = "green">9.8</span> 
          <p> movie language: ${original_language } </p> 
          <div class = "overview" >
         ${overview}
          </div>
          </div>`
        main.appendChild(movieEl);
    });
}
///search data from api
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchterm = search.value;
    if (searchterm && searchterm !== "") {
        getdata(search_api + searchterm);
        search.value = ''
    } else {
        window.location.reload()
    }

})