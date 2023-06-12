import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/store";
import { createRandomSong } from "../../data";
import Button from "./Button";


export default function SongPlaylist() {
  const dispatch = useDispatch();

  const SongPlaylist = useSelector((state: { songs: any; }) =>{
    return state.songs
  })


  const handleSongAdd = (song: string) => {
    dispatch(addSong(song))
    // Add song to list of songs
  };
  const handleSongRemove = (song: any) => {
    dispatch(removeSong(song))
    // Remove song from list of songs
  };

  const renderedSongs = SongPlaylist.map((song:any) => {
    return (
      <li key={song}>
        {song}
        <Button primary rounded 
        onClick={()=>handleSongRemove(song)}
        > 
        X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
        <Button primary  
        onClick={()=>{handleSongAdd(createRandomSong())}}
        > 
        + Add Song to Playlist
        </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}


