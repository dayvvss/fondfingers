import {useState,useEffect} from 'react'
import Player from './components/Player';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [songs,setSongs] = useState([
    {
      title:"Song 1",
      artist:"Davies ",
      img_src:"./img/img-1.jpg ",
      src:"/music/african marimba.mp3"
    },
    {
      title:"Song 2",
      artist:"Wakili",
      src:"/music/afrostyle.m4a",
      img_src:"./img/img-2.png ",

    },
    {
      title:"Song 3",
      artist:"Siaya",
      src:"/music/all over the place demo.m4a ",
      img_src:"./img/img-3.jpg ",

    },
    {
      title:"Song 4",
      artist:"Davies ",
      src:"/music/all in a days work.mp3",
      img_src:"./img/img-3.jpg ",
      
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
  songList
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

export default App;
