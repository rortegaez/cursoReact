const API_KEY = 'e9717037'

export const searchMovies = async ({ search }) => {
	if(search === '') return null

	try {
		const response = await fetch(`https://www.omdbapi.com/?=${API_KEY}&s=${search}`)
		const json = await response.json()

		const movies = json.search
		return movies?.map(movie => ({
			id: movie.imdbID,
			title: movie.Title,
			year: movie.Yerar,
			image: movie.Poster
		}))
	} catch(Error) {
		throw new Error('Error searching movies')
	}
}