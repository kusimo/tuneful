import React from 'react';
import './style/FeedItem.css'
import FeedItem from './FeedItem'


const Feed  = ({ lists, loading, onAudioSelect }) => {

    if (!lists || lists === null) {
        loading = true;
        return <div className="signal"></div>
    }


    const items = lists.map((item) => {

        return <FeedItem  key={item.id} item ={ item } onAudioSelect={onAudioSelect} />

    });
  
        return(
            <div className="feed-block">
                {loading? (
                    <div className="signal"></div>
                ): ''
                }
                <div className="feed fadeIn">
                    <ul className="feed">
                      {items}
                    </ul>
                </div>
            </div>
        )
    
}

export default Feed;