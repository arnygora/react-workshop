// Core
import React, { useState } from 'react';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = ''
                        data-name = 'latest'>
                        <span>Новинки {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
