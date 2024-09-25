import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
import { allFilms } from '../queries/allFilms'
import { Link } from 'react-router-dom';
import style from '../pages/Pages.module.scss'

export function Home() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['allFilms'],
        queryFn: async () => request(
            'https://swapi-graphql.netlify.app/.netlify/functions/index',
            allFilms
        ),
    });

    console.log(data);

    if(isLoading){
        return (
            <div>
                Loading.....
            </div>
        )
    }

    if(error){
        return (
            <div>
                Error: {error.message}
            </div>
        )
    }

    //Vi skal have fat i ID på en bestemt film når vi klikekr på filments titel

    function getID(id){
        console.log('Selected ID:', id);
        
    }

    return (
        <div className={style.links}>
            <h1>Star Wars Movies</h1>
            {data.allFilms.films.map((item) => (
                <Link to={`/search/${item.id}`} key={item.title}>{item.title}</Link>
            ))}
        </div>
    )
}
