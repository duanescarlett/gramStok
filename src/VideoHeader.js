import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlined from '@material-ui/icons/CameraAltOutlined'
import './VideoHeader.css'

function VideoHeader() {
  return (
    <div className='videoHeader'>
      <ArrowBackIosIcon />
      <h3>GramStok</h3>
      <CameraAltOutlined />
    </div>
  )
}

export default VideoHeader
