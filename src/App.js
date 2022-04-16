import AddMovie from "./components/Addmovie";
import MoviesList from "./components/movielist";
import SearchMovie from "./components/filter";
import { moviesData } from "./components/moviedata";
import { useState } from "react";

function App() {
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    moviesData.push(newMovie);
  };

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesData.filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch) &&
            el.rating === ratingSearch
        )}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
