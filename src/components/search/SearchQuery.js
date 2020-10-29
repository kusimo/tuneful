import React, { useState, useEffect } from 'react';
import MusicApi from '../../api/MusicApi';
import Feed from '../../components/Feed';


const SearchQuery = ({ text, onAudioSelect }) => {
    const [translated, setTranslated] = useState([]);
    const [debounceText, setDebouceText] = useState(text);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timerId = setTimeout(() => {
            setDebouceText(text)
        },500);

        return () => {
            clearTimeout(timerId)
        }
    },[text]);

    

    useEffect(() => {
        const doTranslation = async () => {
           const {data} = await MusicApi.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${debounceText}`); 
            setTranslated(data.data);
        };

        
        setLoading(false)
        if(debounceText !== "") doTranslation();
       

    }, [debounceText]);


    return (
        <Feed lists={translated} loading={loading} onAudioSelect={onAudioSelect}  />
    )
};

export default SearchQuery;
