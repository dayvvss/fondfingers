// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faPlayCircle,faPause,faForward,faBackward, faPauseCircle} from "@fortawesome/free-solid-svg-icons"

import Icon from '@mui/material/Icon';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import React from 'react'

function Controls(props) {
  return (
<div className="controls d-flex flex-space-between ">
    <div className="skip me-1">
        <Icon size="2x" icon={Replay10Icon} />
    </div>
    <div className="play me-1 " onClick={()=>props.setIsplaying(!props.isPlaying)} >
        <Icon  icon={props.isPlaying ? PauseCircleIcon : PlayCircleIcon }/>
    </div>
    <div className="skip me-1">
        <Icon size="2x" icon={Forward10Icon}/>
    </div>
</div>
    )
}

export default Controls