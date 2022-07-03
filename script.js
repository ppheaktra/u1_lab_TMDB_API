const API_KEY = ''
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH ='https://image.tmdb.org/t/p/original'

const input = document.querySelector("#search-input")
const movieResult = document.querySelector(".movie-list")
const button = document.querySelector("#search")

button.addEventListener('click', async () =>{
    let movieTitle = input.value 
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=dab95d85b33c9b75f96a3919de61ae9a`)
    renderList(response.data.results)
    console.log(response.data.results)
})
const renderList = ((movieDisplay) => {
    movieDisplay.map((movie) => {
        const imgDisplay = document.createElement('div')
        imgDisplay.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path}>`
        movieResult.append(imgDisplay)
        const titleDisplay = document.createElement('h2')
        titleDisplay.innerText = movie.original_title
        movieResult.append(titleDisplay)

        // moreDetails.addEventListener('click', () => {
        //     const moreDetails = document.createElement('button')
        //     moreDetails.innerHTML = 'view Details'
        //     movieResult.append(moreDetails)

        // })

    })

})