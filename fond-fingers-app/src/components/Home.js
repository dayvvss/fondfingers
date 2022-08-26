import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import heroImg from './../img/african.png'
import heroImg1 from './../img/african-1.png'
import heroImg2 from './../img/african-2.png'
import zigzag from './../img/zigzag.png'


export default function Home() { 
  

  return (
    <>
    <Row className='d-flex flex-lg-row flex-column p-lg-5 p-md-3 p-sm-4 justify-content-center m-2 m-md-1 m-lg-5 h-100 '>
      <Col lg="5" md='12' sm='11' className='p-lg-5 p-md-5 p-4 justify-content-center' >
        <h1 className='text-paper'>
        Stock Audio for African Content for Creators
        </h1>
        <p className='text-paper'>
        A Library filled with authentic African themed music pieces for you documentaries, youtube videos or commeercials
        </p>
        <button className="px-3 nav-btn">Learn More</button>
      </Col>
      <Col lg="7" md="12" sm ="10" xs className='p-0 p-md-4 justify-content-center ' >
        <img src={heroImg} 
        className='w-100'
        style={{maxWidth:'580px',minWidth:'300px'}}
        alt= "black woman in sun glasses" srcSet={ `${heroImg} 1200w, ${heroImg1} 768w, ${heroImg2} 400w `}/>
      </Col>

    </Row>
    <img src={zigzag} alt="" width={'100%'} className=' mt-5'/>
    </>
  )
}
