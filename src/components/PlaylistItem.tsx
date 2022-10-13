import React from 'react'
import { useNavigate } from "react-router-dom";
import './PlaylistItem.css';

const PlaylistItem = ({data}: any) => {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/track_list/" + data.kind);
  }

  return (
    <div className="playlist_item" onClick={clickHandler}>
      <div className="playlist_item__cover">
        {
          data.cover?.uri ?
            <img src={'//' + data.cover.uri.replace('%%', '200x200')} className="playlist_item__cover_logo" alt="logo" />
            :
            <div className="playlist_item__cover_count">
              {data.trackCount}
            </div>
        }
      </div>
      <div className="playlist_item__title">
        {data.title}
      </div>
    </div>
  );
}

export default PlaylistItem;