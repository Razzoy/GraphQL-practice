import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import React from 'react'
import { useParams } from 'react-router-dom'
import { singleFilm } from '../queries/singleFilm';
import style from '../pages/Pages.module.scss'

export function Search() {

    const { filmID } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['singleFilm'],
        queryFn: async () =>
            request(
                'https://swapi-graphql.netlify.app/.netlify/functions/index',
                singleFilm,
                { filmId: filmID }
            ),
    });

    console.log(data);

    if (isLoading) {
        return (
            <div>
                Loading.....
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error: {error.message}
            </div>
        )
    }

    return (
        <div className={style.film}>
            <h1>{`Episode ${data.film.episodeID}`}</h1>
            <h2>{data.film.title}</h2>
            <p>{`Produced by ${data.film.producers}`}</p>
            <p>{data.film.openingCrawl}</p>
        </div>
    )
}

