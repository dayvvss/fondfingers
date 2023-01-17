import React from 'react'
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
export default function Categories() {
  return (
    <Row bg='light' className='bg-slant p-lg-5 p-md-5  p-4 justify-content-center' >
        <h1 className='text-center'>Categories</h1>
        <p className='text-center'>Browse our website's audio tracks by category.</p>
        <Container className='justify-content-center d-flex flex-wrap m-2 m-md-0 mb-md-5 mb-lg-5'>
            <Col lg={5} md={8} xs={10} className='d-flex flex-row categories '>
                <div className="round me-3">
                    <GraphicEqRoundedIcon></GraphicEqRoundedIcon>
                </div>
                <div className="d-flex flex-column">
                    <h2>Music</h2>
                    <p>
                    We have a variety of music tracks, such as instrumental tracks, background music, and songs.
                    </p>
                    <a href="#">Browse Music</a>
                </div>

            </Col>
            <Col lg={5} md={8} xs={10} className='d-flex flex-row categories'>
                <div className="round me-3">
                    <GraphicEqRoundedIcon></GraphicEqRoundedIcon>
                </div>
                <div className="d-flex flex-column">
                    <h2>Sound Effects</h2>
                    <p>
                    Get sound effects for use in various projects, such as nature sounds, Foley sounds, and sci-fi sounds
                    </p>
                    <a href="#">Browse Sound Effects</a>
                </div>

            </Col>
            <Col lg={5} md={8} xs={10} className='d-flex flex-row mt-lg-4 categories'>
                <div className="round me-3">
                    <GraphicEqRoundedIcon></GraphicEqRoundedIcon>
                </div>
                <div className="d-flex flex-column">
                    <h2>Ambient sounds</h2>
                    <p>
                    We have tracks of ambient sounds, such as white noise, city noises, and natural sounds.
                    </p>
                    <a href="#">Browse Ambient Sounds</a>
                </div>

            </Col>
            <Col lg={5} md={8} xs={10} className='d-flex flex-row mt-lg-4 categories'>
                <div className="round me-3">
                    <GraphicEqRoundedIcon></GraphicEqRoundedIcon>
                </div>
                <div className="d-flex flex-column">
                    <h2>Samples and loops</h2>
                    <p>
                    Browse collections of samples and loops that can be used in music production and other creative projects
                    </p>
                    <a href="#">Browse Samples</a>
                </div>


            </Col>
        </Container>

    </Row>
  )
}