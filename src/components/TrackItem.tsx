import React, {useEffect, useState} from 'react'
import './TrackItem.css';

const TrackItem = ({data}: any) => {
  const [trackInfo, setTrackInfo] = useState<any>({})

  useEffect(() => {
    setTrackInfo(data)
  }, [data])

  if (!trackInfo?.track) {
    return <div>Загрузка</div>
  }

  return (
    <div className="track_item">
      <div className="track_item__cover">
        <img
          src={trackInfo.track.artists[0]?.cover?.uri ? '//' + trackInfo.track.artists[0].cover.uri.replace('%%', '50x50') :
            'https://beatmaker.tv/activecontent/images/users/304143/beatmaker-small.jpg'}
          className="track_item__cover__img" alt="logo" />
      </div>
      <div className="track_item__description">
        <div className="track_item__description__title">{trackInfo.track.title}</div>
        <div className="track_item__description__artist">{trackInfo.track.artists[0].name}</div>
      </div>
    </div>
  );
}

export default TrackItem;