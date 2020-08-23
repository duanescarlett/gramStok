import React from 'react';
import './App.css';
import logo from './international.png'
import VideoCard from './VideoCard'

function App() {
  return (

    // BEM naming convention
    <div className="app">

      <h1>Hey Master let's build an IG clone</h1>
      
      <div className="app__top">
        {/* // Image at the top */}
        <img className="app__logo" src={logo} alt="logo" />
        <h1>GramStok</h1>
        {/* // Reels text */}
      </div>
    
      <div className="app__videos">
        {/* // Contrainer for the video */}
        {/* <Video /> */}
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    
    </div>

  );
}

export default App;
