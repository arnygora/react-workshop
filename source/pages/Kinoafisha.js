// Core
import React, { useState } from 'react';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    // 1. Функцию для обновления фильтра
    // 2. Получить стили для каждого фильтра

    const _setSelectedFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        console.log('→ nextFilter', nextFilter);
    };

    return (
        <>
            <div className = 'header'>
                <div className = 'logo' />
                <div className = 'filters'>
                    <div
                        className = ''
                        data-name = 'latest'
                        data-year = '2019'
                        onClick = { _setSelectedFilter }>
                        <span>Новинки {new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
