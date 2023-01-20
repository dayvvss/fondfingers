import {useState,useEffect} from 'react'
import Player from './Player';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.min.css';

function MusicSection() {
  const genres = {
        1:"Pop",
        2:"Amapiano",
        3:"Hip-hop",
        4:"Electronic",
        5:"Jazz",
        6:"Blues",
        7:"Folk",
        8:"African",
        9:"R&B/Soul",
        10:"Latin",
        11:"Classical",
        12:"Reggae",
        13:"Funk",
        14:"Metal",
        15:"Punk",
        16:"Gospel/Christian",
        17:"Grunge",
        18:"Bluegrass",
        19:"World Music"
  }
  // Vocals
const vocals =
{
    1:"male",
    2:"female",
    3:"no-vocals" 
}
// Moods
const moods ={
        1:"Upbeat",
        2:"Mellow",
        3:"Sad",
        4:"Happy",
        5:"Energetic",
        6:"Romantic",
        7:"Dramatic",
        8:"Atmospheric",
        9:"Intense",
        10:"Relaxing",
        11:"Funky",
        12:"Sensual",
        13:"Mysterious",
        14:"Suspenseful",
        15:"Dreamy"

}
 const tempos = {
  // Song Tempos
      Fast: "130-160 BPM",
      Medium: "90-120 BPM",
      Slow: "60-80 BPM"
  

 } 
  const [songs,setSongs] = useState([
    {
      title:"Song 1",
      artist:"Davies ",
      img_src:"/songart/img-1.jpg",
      src:"/music/african marimba.mp3",
      genre:genres[7],
      tempo:tempos.Fast,
      mood:moods[5],
      vocal:vocals[3]
    },
    {
      title:"Song 2",
      artist:"Wakili",
      src:"/music/afrostyle.m4a",
      img_src:"/songart/img-2.jpg ",
      genre:genres[1],
      tempo:tempos.Medium,
      mood:moods[9],
      vocal:vocals[3],

    },
    {
      title:"Song 3",
      artist:"Siaya",
      src:"/music/all over the place demo.m4a ",
      img_src:"/songart/img-3.jpg ",
      genre:genres[3],
      tempo:tempos.Medium,
      mood:moods[8],
      vocal:vocals[3]

    },
    {
      title:"Song 4",
      artist:"Davies ",
      src:"/music/all in a days work.mp3",
      img_src:"/songart/img-4.jpg ",
      genre:genres[7],
      tempo:tempos.Medium,
      mood:moods[1],
      vocal:vocals[3]

      
    }
  ])


  const songList = songs.map((song,index)=>{
  

  return(
    <Player key={index}
      index ={index}
      songs={song}
      img_src={song.img_src}
      music= {song.src}
      genre={song.genre}
      mood={song.mood}
      tempo={song.tempo}
      vocal={song.vocal}
    />
  )

})
return(
  <div className='justify-content-center py-5 p-lg-5  mt-sm-5  bg-dark-brown'>
    <h1 className='text-light text-center mb-5'>Featured Music</h1>
    <Row className='justify-content-center my-4'>
      {songList}
    </Row>
    
  </div>
  
)

}

export default MusicSection;
