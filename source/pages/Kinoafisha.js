// Core
import React, { useState, useEffect } from 'react';

// Instruments
import { getStyles } from '../helpers';
import { api } from '../API';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    const _setSelectedFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        setSelectedFilter(nextFilter);
    };

    const styles = getStyles({
        selectedFilter,
    });

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = { styles.latestFilter }
                        data-name = 'latest'
                        onClick = { _setSelectedFilter }>
                        <span>Новинки {new Date().getFullYear()}</span>
                    </div>
                    <div
                        className = { styles.upcomingFilter }
                        data-name = 'upcoming'
                        onClick = { _setSelectedFilter }>
                        <span>Скоро в кинотеатрах</span>
                    </div>
                    <div
                        className = { styles.popularFilter }
                        data-name = 'popular'
                        onClick = { _setSelectedFilter }>
                        <span>В топ-чартах</span>
                    </div>
                </div>
            </div>
        </>
    );
};
