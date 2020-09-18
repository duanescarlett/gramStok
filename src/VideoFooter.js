import React from 'react'
import './VideoFooter.css'
import { Avatar, Button } from '@material-ui/core'
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ModeCommentIcon from "@material-ui/icons/ModeComment"
import SendIcon from "@material-ui/icons/Send"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import Ticker from "react-ticker"

function VideoFooter( props ) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <Avatar src={props.avatarSrc} />
        <h3>{props.channel} <Button>Follow</Button></h3>
      </div>
      
      <div className="videoFooter__ticker">
        <MusicNoteIcon 
          className="videoFooter__icon" />

        <Ticker 
          node="smooth">
          {({ index }) => (
            <>
              <h1>{ props.song }</h1>
            </>
          )}
        </Ticker>
      </div>

      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="large" />
          
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize="large" />
            <>
            <div className="likes">{props.likes}</div>
            </>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon fontSize="large" />
            <>
            <div className="shares">{props.shares}</div>
            </>
          </div>
        </div>
      </div>

    </div>
  )
}

export default VideoFooter
