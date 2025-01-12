import { useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

// import debounce from "just-debounce-it";

import "./App.css";

function App() {
  const [sort, setSort] = useState(false);

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });
  /*
Sirve para retrasar la ejecución de la función y que no busque con cada letra que se escriba.
  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 2000),
    []
  ); */

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    // esto de newQuery nos sirve para tener presente el último valor, ya que, el estado es asíncrono
    const newQuery = event.target.value;
    // esto es una prevalidación antes de empezar a modificar el estado
    if (newQuery.startsWith(" ")) return;
    setSearch(newQuery);
  };

  return (
    <div className="page">
      <h1>Buscador de Películas</h1>
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Avenger, Star Wars..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
