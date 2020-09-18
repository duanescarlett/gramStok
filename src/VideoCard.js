import React, {useState, useRef} from 'react'
import VideoHeader from './VideoHeader'
import './VideoCard.css'  
import VideoFooter from './VideoFooter'

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
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
        src={url} 
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        alt='Gramstok reel video'
        loop
      />
      <VideoFooter 
        shares={shares}  
        like={likes}
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  )
}

export default VideoCard