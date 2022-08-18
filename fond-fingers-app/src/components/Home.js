import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import heroImg from './../img/african.png'
import heroImg1 from './../img/african-1.png'
import heroImg2 from './../img/african-2.png'


export default function Home() { 
  

  return (
    <>
    <Row className='p-lg-4'>
      <Col lg="5" className='p-lg-4 ' >
        <h1 className='text-paper'>
        Stock Audio for African Content for Creators
        </h1>
        <p className='text-paper'>
        A Library filled with authentic African themed music peices for you documentaries, youtube videos or commeercials
        </p>
        <button className=" nav-btn">Learn More</button>
      </Col>
      <Col lg="4" md="4" sm>
        <img src={heroImg} 
        
        alt= "black woman in sun glasses" srcset={ `${heroImg} 1200w, ${heroImg1} 768w, ${heroImg2} 400w `}/>
      </Col>
    </Row>
    </>
  )
}
