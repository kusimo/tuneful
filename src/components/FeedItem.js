import React from 'react';
import {likeSong, active} from './LikeAction';


const FeedItem = ({ item, onAudioSelect, headings }) => {
    const ref = React.createRef();   

    return (
        <li className="item">
            <div className="cover-placeholder"
                onClick={() => { onAudioSelect(item); }}>
                <div className="cover"
                    style={{ backgroundImage: `url(${item.album.cover_small})` }}>
                </div>
            </div>
            <div className="info"
                onClick={() => { onAudioSelect(item); }}>
                <span className="title">{item.title}</span>
                <span className="artist">{item.artist.name}</span>
            </div>
            <div className="rank">
                <span ref={ref} onClick={() => likeSong(item, ref)} className={`heart ${ active(item)? 'active': ''}`}>
                    <i className="icon icon-heart" />
                </span>
            </div>
        </li>
    )
}

export default FeedItem;