import {useState,useEffect} from 'react'
import Player from './Player';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import 'bootstrap/dist/css/bootstrap.min.css';

function MusicSection() {
  const [tags,setTags] = useState([
    // Genre
    {
      "genres": [
        "Pop",
        "Rock",
        "Hip-hop",
        "Electronic",
        "Jazz",
        "Blues",
        "Folk",
        "Country",
        "R&B/Soul",
        "Latin",
        "Classical",
        "Reggae",
        "Funk",
        "Metal",
        "Punk",
        "Gospel/Christian",
        "Grunge",
        "Bluegrass",
        "World Music"
    ]
  },
  { //Moods
    "moods": [
        "Upbeat",
        "Mellow",
        "Sad",
        "Happy",
        "Energetic",
        "Romantic",
        "Dramatic",
        "Atmospheric",
        "Intense",
        "Relaxing",
        "Funky",
        "Sensual",
        "Mysterious",
        "Suspenseful",
        "Dreamy"
    ]
},
// Song Tempos
{
  "tempos": [
      {"Fast": "130-160 BPM"},
      {"Medium": "90-120 BPM"},
      {"Slow": "60-80 BPM"}
  ]
},
// Vocals
{
  "vocals":[
    "male",
    "female",
    "no-vocals"
  ]
}


  ])
  const [songs,setSongs] = useState([
    {
      title:"Song 1",
      artist:"Davies ",
      img_src:"/songart/img-1.jpg",
      src:"/music/african marimba.mp3"
    },
    {
      title:"Song 2",
      artist:"Wakili",
      src:"/music/afrostyle.m4a",
      img_src:"/songart/img-2.jpg ",

    },
    {
      title:"Song 3",
      artist:"Siaya",
      src:"/music/all over the place demo.m4a ",
      img_src:"/songart/img-3.jpg ",

    },
    {
      title:"Song 4",
      artist:"Davies ",
      src:"/music/all in a days work.mp3",
      img_src:"/songart/img-4.jpg ",
      
    }
  ])

  const [currentSongIndex,setCurrentSongIndex] = useState(0)
  const [nexSongIndex,setNextSongIndex] = useState(currentSongIndex + 1)

const songList = songs.map((song,index)=>{
  console.log(song.src)

  return(
    <Player key={index}
   index ={index}
      nexSongIndex={nexSongIndex}
      songs={song}
      img_src={song.img_src}
      music= {song.src}
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
  // return (
  //   <div className="App ">
  //     <Player 
  //     currentSongIndex = {currentSongIndex}
  //     setCurrentSongIndex={setCurrentSongIndex}
  //     nexSongIndex={nexSongIndex}
  //     songs={songs[currentSongIndex]}
  //     img_src={songs[currentSongIndex].img_src}
  //     music= {songs[currentSongIndex].src}
  //     />
  //   </div>
  // );
}

export default MusicSection;
