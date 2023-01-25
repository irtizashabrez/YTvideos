import React, { useState } from 'react'

function SearchBar(props) {
    
    const [ term, setTerm ] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();

        props.onFormSubmit(term);
    };

  return (
    <div className='search-bar ui segment'>
        <form onSubmit={onFormSubmit}>
            <div className="ui form">
                <div className="ui field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={onInputChange}/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar