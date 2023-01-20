import React,{useEffect,useState,useRef} from 'react'
import Row from 'react-bootstrap/Row'
import Controls from './Controls'
import SongDetails from './SongDetails'
var songTime = 0;

export default function Player(props) {

    const audioEl = useRef(null)

    useEffect(()=>{
    const duration = Math.floor(audioEl.current.duration)
        const minute = Math.floor(duration/60)
        const seconds = duration%60
songTime = minute +'.'+ seconds
        setDuration(songTime)
         

       console.log(duration)
})

    const [isPlaying,setIsplaying] = useState(false)
    // useEffect(()=>{
    //     if(isPlaying){
    //         audioEl.current.play()
    //     }
    //     else{
    //         audioEl.current.pause()
    //     }
        
    // })
    const play = ()=>{
        if(!isPlaying){
            setIsplaying(true)
            audioEl.current.play()
            console.log('its playing')
            if(audioEl.ended){
                console.log(audioEl.ended)
            } 
            
        }
        if(isPlaying){
            setIsplaying(false)
            audioEl.current.pause()
            console.log('its stop playing')
            
        }
        // else{
        //     audioEl.current.pause()
        // }
        
    }
const [duration,setDuration] = useState(0)
const [current, setCurrent] = useState(0)    
const[percentage,setPercentage] = useState(0)
const [time,setCurrentTime] = useState(0)



const onChange = (e)=>{
    const percentage = (audioEl.currentTime/ audioEl.duration) * 100 
    // audioEl.currentTime = (audioEl.duration/100)* e.target.value
    setPercentage(percentage)
     console.log(percentage)
}


   const getDuration = (e)=> {
        
        const duration = Math.floor(e.currentTarget.currentTime)
        const percent = ((e.currentTarget.currentTime/ e.currentTarget.duration )*100)
        setPercentage(percentage)
      
        }
    //    const current_time =(e)=>{
    //     setCurrent(e.currentTarget.currentTime)
    //     console.log(e.currentTarget.currentTime)
    //    }
        
    // const onLoadedData =(e)=>{
         

    //     const duration = Math.floor(e.currentTarget.duration)
    //     const minute = Math.floor(duration/60)
    //     const seconds = duration%60

    //     setDuration(duration)
    //      songTime = minute +'.'+ seconds

    //    console.log( songTime)

    // }    
    

  return (
    <>
        
            <audio ref={audioEl}  onTimeUpdate={getDuration} src={props.music}></audio>
                <SongDetails songs={props.songs} 
                img_src={props.img_src}
                isPlaying={isPlaying} 
                setIsplaying={setIsplaying}
                duration={duration}
               genre={props.genre}
               mood={props.mood}
               vocal= {props.vocal}
               tempo= {props.tempo}
                onChange={onChange}
                play={play}
                percentage={percentage}
            
                />
        
        
        
        
    </>
  )
}
