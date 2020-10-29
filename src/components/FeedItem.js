import React from 'react';
import {likeSong, active} from './LikeAction';


const FeedItem = ({ item, onAudioSelect, headings }) => {
    const ref = React.createRef();  
    
    const getImageUrl = url => {
        return (
          'https://e-cdns-images.dzcdn.net/images/' +
          url.substring(url.indexOf('/cover') + 1)
        )
      }

    return (
        <li className="item">
            <div className="cover-placeholder"
                onClick={() => { onAudioSelect(item); }}>
                <div className="cover"
                    style={{ backgroundImage: `url(${getImageUrl(item.album.cover_small)})` }}>
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