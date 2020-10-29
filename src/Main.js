import React, { useEffect, useState } from 'react';
import './components/style/Main.css';
import MusicApi from './api/MusicApi';
import Discover from './components/Discover';
import Feed from './components/Feed';
import Search from './components/Search';
import Likes from './components/Likes';
import Route from './components/router/Route';
import Page404 from './components/Page404';


const Main = ({ updateCurrentAudio }) => {

    const [musicData, setMusicData] = useState(
        {
            loading: false,
            snippets: null,
        }
    );

    const [selectedAudio, updateSelectedAudio] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('132');
    
    useEffect(() => { 
        return updateCurrentAudio(selectedAudio);
    }, [selectedAudio, updateCurrentAudio]);


    useEffect(() => {

        setMusicData({ loading: true });

            MusicApi.get('https://cors-anywhere.herokuapp.com/https://deezer-proxy-d6blegb47.now.sh/chart/'+currentCategory+'/tracks')
            .then((response) => {
                const dataSnippets = response.data.data;
                setMusicData({ loading: false, snippets: dataSnippets });
            })
            .catch(error => {
                setMusicData({ loading: false });
                console.log(error.response)
            });
 
    }, [setMusicData, currentCategory]);


    const onAudioSelect = (audio) => {
        updateSelectedAudio(audio);
       
    }

    const updateCurrentCategory = (catname) => {
        setCurrentCategory(catname)
    }




    return (
        <div className="main">
             <Route path="/" >
                <Discover title="Discover" updateCurrentCategory={updateCurrentCategory} />
                <Feed lists={musicData.snippets} loading={musicData.loading} onAudioSelect={onAudioSelect} />
            </Route>
            <Route path="/search">
                <Search onAudioSelect={onAudioSelect} />
            </Route>
            <Route path="/favourites">
                <Likes onAudioSelect={onAudioSelect} />
            </Route>
            <Route path="/settings">
                <Page404 />
            </Route>
            <Route path="/premium">
                <Page404 />
            </Route>
           
        </div>
    )
}

export default Main;