import React, {useState} from 'react';
import './components/style/Cue.css';
import './components/style/CuePlayerControl.css'

const Cue = ({ audio }) => {
   
    const [track] = useState(new Audio());
    const buttonRef = React.createRef();
    const imageRef = React.createRef();
    const spinnerRef = React.createRef();
    const [videoCanPlay, setVideoCanPlay] = useState(false);

    if (!audio) {
        return <div>Loading</div>
    }

    track.setAttribute('src', audio.preview);

    track.addEventListener('loadeddata', () => {
        if (track.readyState >= 2) {
            setTimeout(() => {
                track.play();
            }, 1000)
                ;
        }
    });


    track.addEventListener('canplay', () => { setVideoCanPlay(true) });

    track.addEventListener('canplay', () => {
        if (spinnerRef.current) {
            spinnerRef.current.classList.add('audio-loading');
            imageRef.current.classList.remove("spin");


        }
    });

    track.addEventListener('playing', () => audioIsPlaying());

    track.addEventListener('waiting', () => {
        if (spinnerRef.current) {
            spinnerRef.current.classList.add('audio-loading');
        }
    }, false);


    track.addEventListener('playing', () => {
        if (spinnerRef.current) {
            if (spinnerRef.current.classList.contains('audio-loading')) {
                spinnerRef.current.classList.remove('audio-loading');
            }
        }
    });

    track.addEventListener('ended', () => audioEnded());


    track.addEventListener('error', function (e) {
        setVideoCanPlay(false)
        let noSourcesLoaded = (this.networkState === HTMLMediaElement.NETWORK_NO_SOURCE);
        if (imageRef.current) imageRef.current.classList.remove("spin");
        if (noSourcesLoaded) console.log("ERROR:::::could not load audio source "); //@TO DO show message to the user
    }, true);


    const togglePlayPause = (text = "paused") => {
        const button = buttonRef.current;
        if (button !== null)
            if (text !== "paused") {
                button.classList.remove("paused");
                imageRef.current.classList.remove("spin");
            } else {
                button.classList.add("paused");
                imageRef.current.classList.add("spin");
            }
    }

    const audioIsPlaying = () => {
        togglePlayPause("paused")
    }

    const audioEnded = () => {
        togglePlayPause('play')
    }

    const buttonController = (sound) => {
        buttonRef.current.classList.toggle("paused")
        if (sound === 'play') {
            if (track.paused) {
                track.play();
                imageRef.current.classList.add("spin");
            } else {
                track.pause();
                imageRef.current.classList.remove("spin");
            }
        }
    }

    const hanleButtonPlayPause = (event) => {
        if (event && event.preventDefault) { // add?
            event.preventDefault();
            event.persist();
        }
        buttonController('play');
    }


        return (
            <div className="cue">
                <div className="cue-wrap fadeIn">
        <h3 className="label">Now Playing</h3>
                    <img ref={imageRef} className="cover" src={audio.album.cover_medium} alt="artist" />
                    <span className="title">{audio.title}</span>
                    <span className="artist">{audio.artist.name}</span>
                    <div className="player">
                        <div className="controlls">
                        
                           {
                            videoCanPlay ?
                                <div className="play-pause">
                                    <div className="spinref" ref={spinnerRef}></div>
                                    <div
                                        ref={buttonRef}
                                        onClick={() => {
                                            hanleButtonPlayPause();
                                        }}
                                        className=
                                        {`icon paused`}>
                                    </div>

                                </div>
                                :
                                <div className="loader-wrap">
                                    <div className="loader">Loading...</div>
                                </div>

                        }
                        </div>
                    </div>
                </div>

            </div>
        )
}

export default Cue;