import React, {createContext, useState} from 'react'
import Movie from '../../common/models/movie'

let initialMovies:Movie[]=[{
    title:'Batman',
    id:'1',
    releaseDate: new Date('decembar 19, 1997'),
    description:'flying black retard',
    imdbRating:8,
    earnings:2_000_000
    
},
{ 
title:'Superman',
id:'2',
releaseDate: new Date('decembar 19, 1997'),
description:'flying retard',
imdbRating:7,
earnings:2_000_500}]


interface MovieContextType{
    movies:Movie[],
    setMovies:React.Dispatch<React.SetStateAction<Movie[]>>

}
export const MovieContext=createContext<MovieContextType>({
    movies:[],
    setMovies:()=>{}

})


export const MoviesContextProvider =({children}:{children:React.ReactNode})=>{
    const [movies,setMovies]=useState<Movie[]>(initialMovies)

    return <MovieContext.Provider value={{movies,setMovies}}>
        {children}
    </MovieContext.Provider>
    

}



