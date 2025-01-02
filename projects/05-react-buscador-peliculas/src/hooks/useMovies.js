import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";


export function useMovies({search, sort}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({search}) => {
      if(search === previusSearch.current) return
      try{
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch(e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])


  const sortedMovies = useMemo(() => {
    if(!movies) return
    return sort
  ? [...movies].sort((a, b) => a.year.localeCompare(b.year))
  : movies
  }, [movies, sort])

  return { movies:sortedMovies, getMovies, loading, error };
}