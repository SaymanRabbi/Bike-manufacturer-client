import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.css'
const Rating = ({setRatings}) => {
    const [rating, setRating] = useState(0)
    setRatings(rating)
    return (
        <div>
            {
                [...Array(5)].map((start, index) => {
                    
                    const correntvalue = index + 1
                    return (
                        <label>
                    
                            <input type="radio" name="rating" value={correntvalue} onClick={() => setRating(correntvalue)} />
                            <FontAwesomeIcon className={`text-2xl cursor-pointer ${ correntvalue <= rating? ' text-yellow-600':''}`}icon={faStar}></FontAwesomeIcon></label>
                    )
                }
               ) }
        </div>
    );
};

export default Rating;