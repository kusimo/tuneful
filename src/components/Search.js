import React, {useState} from 'react';
import SearchQuery from './search/SearchQuery';
import './style/Search.css';


const Search = ({onAudioSelect}) => {
    const [text, setText] = useState('');

    return (
        <div id="search-page">
            <div className="header"><h1 className="header__label">Search</h1></div>

            <div className="search">
                <form
                    className="search__form">
                    <input
                        onChange={e => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder={`Search `}
                        className="search__form__field"
                    />
                </form>

            </div>
           
            <SearchQuery text={text}  onAudioSelect={onAudioSelect} />
        </div>
    );
};

export default Search;

