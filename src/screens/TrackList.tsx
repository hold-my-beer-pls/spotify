import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './TrackList.css'
import TrackItem from "../components/TrackItem";

const TrackList = () => {
  const params: any = useParams()
  const {playlistId} = params
  const [trackList, setTrackList] = useState<any>({})

  useEffect(() => {
    axios.get(`https://yandex-music-cors-proxy.herokuapp.com/https://api.music.yandex.net:443/users/1183254918/playlists/${playlistId}`,{
      headers: {
        'Authorization': 'OAuth y0_AgAAAABGhwmGAAG8XgAAAADRExryHIjZPrlVQz6s6MCTdfhfaIQKnJ0'
      }
    }).then(({data}: any) => {
      setTrackList(data.result)
    }).catch((error) => console.log(error));
  }, [])

  return (
    <div className="track_list">
      <div className="track_list__info">
        <div className="playlist_item__cover">
          {
            trackList.cover?.uri ?
              <img src={'//' + trackList.cover.uri.replace('%%', '200x200')} className="playlist_item__cover_logo" alt="logo" />
              :
              <div className="playlist_item__cover_count">
                {trackList.trackCount}
              </div>
          }
        </div>
        <div className="track_list__info__description">
          <div className="track_list__info__description__playlist track_list__text_secondary">ПЛЕЙЛИСТ</div>
          <div className="track_list__info__description__name track_list__text">{trackList.title}</div>
          <div className="track_list__info__description__user track_list__text_secondary">
            плейлист от пользователя <span className="track_list__text">{trackList.owner?.name}</span>
          </div>
        </div>
      </div>
      <div className="track_list__list">
        {
          trackList.tracks?.map((item: any) => <TrackItem key={item.id} data={item}/>)
        }
      </div>
    </div>
  )
};

export default TrackList;