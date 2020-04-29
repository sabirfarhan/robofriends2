import React from 'react';

const SearchBox = ({ searchChange }) => {

    return (

        <div>
            <input
                className='pa2 ba b--grey bg-lightest-purple br4 bw1 tc ma3'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>

    );

}

export default SearchBox;