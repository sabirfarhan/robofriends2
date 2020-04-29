import React from 'react';

const Card = ({ id, name, email }) => {

    const consoleCard = (event) => {

        alert('this card has the id of ' + id);
        alert('this robot name is ' + name);
        alert('this robot\'s email address is ' + email)

    }

    return (

        <div className='bg-light-blue dib pa3 br3 ma2 grow shadow-5 bw5 tc' onClick={consoleCard}>


            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>

    );

};

export default Card;