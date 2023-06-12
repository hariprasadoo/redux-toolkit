"use client"
import { useDispatch } from "react-redux";
import { reset } from "./redux/store";

import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import Button from "./components/Button";


export default function Home() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset())

  };

  return (
    <div className="container is-fluid">
      <Button success
      onClick={() => handleResetClick()} 
      className="button is-danger">
        Reset Both Playlists
      </Button>
      <h1>Home Page</h1>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
