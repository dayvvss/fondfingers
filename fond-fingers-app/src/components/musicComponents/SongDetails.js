import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Replay10Icon from '@mui/icons-material/Replay10';
import Icon from '@mui/material/Icon';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faPlayCircle,faForward,faBackward, faPauseCircle} from "@fortawesome/free-solid-svg-icons"
import { ProgressBar } from 'react-bootstrap';


export default function SongDetails(props) {
  
  const [count,setCount] = useState(0)

  const background = useState(props.img_src)
  // const [background,setBackground] = useState('')
  // setBackground(props.img_src)
  
  
 
  return (

    // <div className="row d-flex flex-row">
    //   <div className="col-lg-2 d-flex align-items-middle c-player--details">
    //     <div className=" rounded" >
    //         <img src={props.img_src} className=" img-thumbnail  " alt=""  />
    //     </div>
    //   </div>
    //   <div className="row d-flex flex-row">
    //       <p className='me-lg-3'>{props.songs.artist }</p>
    //       <p>{props.songs.title}</p>
    //   </div>

    // </div>

    
      <Row className='d-flex flex-row align-items-center p-4'>
        <Col style={{backgroundImage:`url(${background})`}} className='col-4 col-lg-1 d-flex flex-row p-2' >
        {/* <img src={props.img_src} className=" img-thumbnail  " alt=""  /> */}
        <div className="play me-1"  onClick={props.play} >
        <Icon size="2x" icon={props.isPlaying ? PauseCircleIcon : PlayCircleIcon }/>
         </div>
        </Col>
        <Col lg={8} className='d-flex justify-space-between flex-wrap align-items-center'>
            <p>{props.songs.title}</p>
            <p className='mx-2'> by </p>
            <p className='me-3'>{props.songs.artist }</p>
            <input type="range" name="range" value={props.percentage} className='form-range w-100' step={0.01} min="0" max={100} onChange={props.onChange} id="customRange1" />

            <p>{props.currenttime}</p>
           
       

        </Col>
      </Row>
    
    
  )
}

