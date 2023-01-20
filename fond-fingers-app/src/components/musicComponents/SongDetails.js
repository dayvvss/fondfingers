import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import AddIcon from '@mui/icons-material/Add';
import Replay10Icon from '@mui/icons-material/Replay10';
import Icon from '@mui/material/Icon';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faPlayCircle,faForward,faBackward, faPauseCircle} from "@fortawesome/free-solid-svg-icons"


export default function SongDetails(props) {
  
  const [count,setCount] = useState(0)

  const style = {
    width:'100%',
    height:'auto',
    backgroundSize:'cover',
    background:`url(${props.img_src})`
    
  }
  const cardStyling ={
    width:'280px',
  }
  
  
 
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

    
      
        <Col lg={3} md={5} xs={9} className='d-flex  flex-wrap align-items-center pb-4 '>
          <Card className='mb-5 pb-4 border-0' style={cardStyling}>
                <div style={style} className='' >
                 {/* <img src={props.img_src} className=" img-thumbnail  " alt=""  /> */}
                  <div className="play  my-5 text-center"  onClick={props.play} >
                  
                      {props.isPlaying ? <PauseCircleIcon className='text-light large-icon'/> : <PlayCircleIcon fontSize='large' className='text-light large-icon' /> }

                      
                      {/* <Icon  icon={props.isPlaying ? PauseCircleIcon : PlayCircleIcon }/> */}
                  </div>
                </div>
                <div className='d-flex flex-row justify-content-center mt-3'>
                  <p className=''>{props.songs.title}</p>
                  <p className=''>-</p>
                  <p className='me-3'>{props.songs.artist }</p>
                </div>
                <div className="d-flex flex-wrap mx-3 tag-box">
                   <div className="bg-secondary bg-opacity-25 p-1 d-flex align-items-center  tags"><p className='mb-0'> {props.genre}</p></div>
                   <div className="bg-secondary bg-opacity-25 p-1 align-center tags"><p className='mb-0'> {props.mood}</p></div>
                   <div className="bg-secondary bg-opacity-25 p-1 align-center tags"><p className='mb-0'> {props.vocal}</p></div>
                   <div className="bg-secondary bg-opacity-25 p-1 align-center tags"><p className='mb-0'> {props.tempo}</p></div>
                </div>
               
                <div className='d-flex flex-row justify-content-end'>
                  {/* <input type="range" name="range" defaultValue={0} className='progressBar w-100' step={0.01} min="0" max={100} onChange={props.onChange} id="customRange1" /> */}
                  <p className="justify-content-start mb-0 w-auto">{props.time}</p>
                  <p className='justify-content-end flex-wrap mb-0'>{ props.duration}</p>
                </div>
                <Button className='w-auto bg-dark mx-3'>
                  <AddIcon  />
                </Button >
          </Card>
            
           
        </Col>
  
    

    
  )
}
