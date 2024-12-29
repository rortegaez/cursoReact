import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

import "./App.css";

// const API_KEY = "e9717037";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  /*
  DEBES DE ESTUDIAR ESTE CÓDIGO
const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    // esto de newQuery nos sirve para tener presente el último valor, ya que, el estado es asíncrono
    const newQuery = event.target.value;
    // esto es una prevalidación antes de empezar a modificar el estado
    if (newQuery.startsWith(" ")) return;
    setSearch(event.target.value);
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
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
