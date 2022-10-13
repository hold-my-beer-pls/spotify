import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TrackList from './screens/TrackList'
import Playlist from './screens/Playlist'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
        <Routes>
          <Route path={'/track_list/:playlistId'} element={<TrackList />} />
          <Route path={'/'} element={<Playlist />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;