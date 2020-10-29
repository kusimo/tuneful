import React, { useState } from 'react';
import './style/Likes.css';

const Likes = ({ onAudioSelect }) => {

    const [likes, setLikes] = useState(JSON.parse(localStorage.getItem('musicLikes')) || []);

    if (!likes) return <div>No Likes</div>

    const removeFav = (song) => {
        let unlike = likes.filter(music => music.id !== song.id)
        localStorage.setItem('musicLikes', JSON.stringify(unlike))
        setLikes(JSON.parse(localStorage.getItem('musicLikes')) || [])
    }

    const getImageUrl = url => {
        return (
          'https://e-cdns-images.dzcdn.net/images/' +
          url.substring(url.indexOf('/cover') + 1)
        )
      }

    const items = likes.map((item) => {

        return (
            <li key={item.id} className="item">
                <div className="cover-placeholder"
                    onClick={() => { onAudioSelect(item); }}>
                    <div className="cover"
                        style={{ backgroundImage: `url(${getImageUrl(item.album.cover_small)})` }}>
                    </div>
                </div>
                <div className="info">
                    <span onClick={() => { onAudioSelect(item); }}>
                        <span className="title">{item.title}</span>
                        <span className="artist">{item.artist.name}</span>
                    </span>
                  
                    <span onClick={() => removeFav(item)} className="remove">Remove</span>
                </div>
            </li>
        )

    })

    return (
        <div id="liked" className="Likes fadeIn">
            <div className="header">
                <h3 className="header__label">Favorite Tunes</h3>
            </div>
            <ul className="loved">
                {items}
            </ul>
        </div>

    )
}

export default Likes;