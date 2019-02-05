// Core
import React, { useState, useEffect } from 'react';

// Instruments
import { getStyles } from '../helpers';
import { api } from '../API';

export const Kinoafisha = () => {
    const [ selectedFilter, setSelectedFilter ] = useState('upcoming');
    const [ movies, setMovies ] = useState([]);

    const _getMoviesByFilter = async (nextFilter) => {
        const movies = await api.getMovies(nextFilter);

        console.log('→ movies', movies);

        setMovies(movies);
    };

    const _setSelectedFilter = (event) => {
        const nextFilter = event.currentTarget.dataset.name;

        setSelectedFilter(nextFilter);
        _getMoviesByFilter(nextFilter);
    };

    // componentDidMount + componentWillUnmount
    useEffect(() => {
        _getMoviesByFilter(selectedFilter);
    }, []);

    // getDerivedStateFromProps
    // useEffect(() => {
    // логика
    // });

    // componentDidUpdate
    // useEffect(() => {
    // логика
    // }, [data]);

    const styles = getStyles({
        selectedFilter,
    });

    const moviesJSX = movies.map((movie) => {
        return (
            <div
                className = 'movie'
                key = { movie.id }>
                <div className = 'poster'>
                    <span className = 'genre'>{movie.genre}</span>
                    <img src = { movie.poster } />
                    <span className = 'rating'>{movie.rating}</span>
                </div>
                <span className = 'title'>{movie.title}</span>
            </div>
        );
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
            <div className = 'content'>{moviesJSX}</div>
        </>
    );
};
