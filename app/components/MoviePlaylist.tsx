import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovies, reset } from "../redux/store";
import { createRandomMovie } from "../../data";
import Button from "./Button";

function MoviePlaylist() {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state: { movies: any; }) =>{
    return state.movies
  })

  const handleMovieAdd = (movie: string) => {
    dispatch(addMovie(movie))
    // Add song to list of songs
  };
  const handleMovieRemove = (movie: any) => {
    dispatch(removeMovies(movie))
    // Remove song from list of songs
  };
  
  const renderedMovies = moviePlaylist.map((movie:any) => {
    return (
      <li key={movie}>
        {movie}
        <Button secondary
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <Button primary
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
