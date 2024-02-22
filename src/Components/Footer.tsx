import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SorryMp3 from '/sorry.mp3'
import Deidara from '/deidara.mp3'
function Footer() {

  const playlist = [
    { src: SorryMp3},
    { src: Deidara },
  
  ]
  

  const [currentTrack, setTrackIndex] = React.useState(0)
  const handleClickNext = () => {
      console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
  
  const handleEnd = () => {
    console.log('end')
    setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
  }
  return (
    <>  <footer className=" basis-1/12 flex flex-col justify-center content-center ">
    <h1 className="self-center">lecteur de musique</h1>
    <AudioPlayer
          volume="0.5"
          src={playlist[currentTrack].src}
          showSkipControls
          onClickNext={handleClickNext}
          onEnded={handleEnd}
          onError={()=> {console.log('play error')}}
          // Try other props!
        />
  </footer></>
  )
}

export default Footer

