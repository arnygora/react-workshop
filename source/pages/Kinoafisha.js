// Core
import React, { useState } from 'react';

export const Kinoafisha = () => {
    const [ selectedFilter, setSetSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
            </div>
        </>
    );
};
