import React from 'react'
// import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Card from '@mui/material/Card';


export default function WhatYouGet() {
  return (
    <Row className='justify-content-center mt-5 p-lg-5 bg-white'>
        <h1 className='text-dark w-auto mb-lg-4'>What You Get</h1>
        <Container  className='d-flex justify-content-center px-2 mx-0 flex-lg-row flex-md-column flex-column my-md-4 my-lg-5'>
            <Col xs={10} md={5} lg={4} className='ms-4 ms-md-0 ms-lg-0 mx-md-3 scale-on-hover'>
                <Card className='bg-transparent p-3 m-lg-4 my-3   card-height  justify-content-center outline-brown text-dark'>
                    <div className="text-center mb-3"><LibraryMusicIcon className='large-icon' /></div>
                    
                    <p className='text-center'>Get to choose from a catalogue of authentic african themed music</p>
                </Card>
            </Col>
            <Col xs={10} md={5} lg={4} className='ms-4 ms-md-0 ms-lg-0 mx-md-3 scale-on-hover'>
                <Card className='bg-transparent m-lg-4 my-3 p-3 card-height outline-brown text-dark'>
                    <div className="text-center mb-3"><AccountBalanceWalletIcon className='large-icon' /> </div>
                    <p className='text-center'>Get Royalty free for life music at an affordable price no hidden fees</p>
                </Card>
            </Col>
            <Col xs={10} md={5} lg={4} className='ms-4 ms-md-0 ms-lg-0 mx-md-3 scale-on-hover'>
                <Card className='bg-transparent p-3 card-height m-lg-4 my-3 outline-brown text-dark '> 
                <div className="text-center mb-3"><CloudUploadIcon className='large-icon'/> </div>
                
                <p className='text-center'>Create, upload and Earn from your music passively</p>
            </Card>
            </Col>
            
        </Container>
        <button className='text-light bg-dark btn px-4 d-flex flex-wrap w-auto'>Learn More</button>
    </Row>
  )
}
