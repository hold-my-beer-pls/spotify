import React, {useEffect, useState} from 'react'
import axios from "axios";
import PlaylistItem from "../components/PlaylistItem";
import './Playlist.css';

const Playlist = () => {

  const [playlist, setPlaylist] = useState<any[]>([])

  useEffect(() => {
    axios.get(`https://yandex-music-cors-proxy.herokuapp.com/https://api.music.yandex.net:443/users/1183254918/playlists/list`, {
      headers: {
        'Authorization': 'OAuth y0_AgAAAABGhwmGAAG8XgAAAADRExryHIjZPrlVQz6s6MCTdfhfaIQKnJ0'
      }
    }).then(({data}: any) => {
      setPlaylist(data.result)
    }).catch((error) => console.log(error));
  }, [])

  return (
    <div className="playlist">
      <div className="playlist__title">Плейлисты</div>
      <div className="playlist__list">
        {
          playlist.map((item) => <PlaylistItem key={item.uid} data={item}/>)
        }
      </div>
    </div>
  );
}

export default Playlist;

