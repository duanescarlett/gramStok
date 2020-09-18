import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './international.png'
import VideoCard from './VideoCard'
// import vikings from './Crazy.mp4'
import db from './firebase'

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    // this will only run once when it loads
    db.collection('vids').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (

    // BEM naming convention
    <div className="app">
      
      <div className="app__top">
        {/* // Image at the top */}
        <img className="app__logo" src={logo} alt="logo" />
        <h1>GramStok</h1>
        {/* // Reels text */}
      </div>
    
      <div className="app__videos">
        {/* // Contrainer for the video */}
        {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
          <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* avatarSrc
        channel
        likes
        shares
        song
        url */}

      </div>
    
    </div>

  );
}

export default App;
