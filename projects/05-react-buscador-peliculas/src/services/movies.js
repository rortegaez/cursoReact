const API_KEY = 'e9717037'

export const searchMovies = async ({ search }) => {
	if(search === '') return null

	try {
		const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
		const json = await response.json()

		// Accede a la propiedad 'Search' del objeto JSON devuelto por la API
		const movies = json.Search


		return movies?.map(movie => ({
			id: movie.imdbID,
			title: movie.Title,
			year: movie.Year,
			image: movie.Poster
		}))
	} catch(Error) {
		throw new Error('Error searching movies')
	}
}