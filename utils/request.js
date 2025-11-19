const API_KEY = process.env.REACT_APP_API_KEY;
const requests ={
    fetchTrending : `/trending/all/week?api_key = ${API_KEY}&language-en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key = ${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movies/tv?api_key = ${API_KEY}&language-en-US`,
    fetchAnimation: `/discover/tv?api_key = ${API_KEY}&with_networks=16`,
    fetchAction: `/discover/tv?api_key = ${API_KEY}&with_networks= 10759`,
    fetchDokumentarFilm: `/discover/tv?api_key = ${API_KEY}&with_networks=99`,

}
export default requests;