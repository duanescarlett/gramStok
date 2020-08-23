import React, {useState, useRef} from 'react'
import VideoHeader from './VideoHeader'
import './VideoCard.css'  
import vikings from './Crazy.mp4'

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if(isVideoPlaying) {
      // Stop
      videoRef.current.pause()
      setIsVideoPlaying(false)
    }
    else {
      // Play
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className='videoCard'>
      <VideoHeader />
      <video 
        src={vikings} 
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        alt='Gramstok reel video'
        loop
      />
{/* <iframe className="videoCard__player" src="https://www.youtube.com/embed/tUDHfDPk-kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  )
}

export default VideoCard
