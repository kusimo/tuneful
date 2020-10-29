import React from 'react';
import './style/CuePlayerControl.css'
import playicon from '../assets/play.svg'

const CuePlayerControl = () => {
    return (
        <div className="controlls">
            <div className="loader-wrap">
                <div className="loader">Loading...</div>
            </div>
            <div id="icon" className="icon play">
                    <img src={playicon} alt="play" />
            </div>
        </div>
    )
}

export default CuePlayerControl;