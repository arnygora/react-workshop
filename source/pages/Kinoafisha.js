// Core
import React, { useState } from 'react';

// Instruments
import { getStyles } from '../helpers';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    // 1. Функцию для обновления фильтра
    // 2. Получить стили для каждого фильтра

    const _setSelectedFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        console.log('→ nextFilter', nextFilter);
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
