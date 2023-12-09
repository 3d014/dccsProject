import Movie from "../../../common/models/movie"
import Table from "./components/table/Table"
import Columns from "../../../common/models/columns"
import './MachineLearning.css'
import Settings from "./components/settings/Settings"



let movies:Movie[]=[{
    title:'Batman',
    id:'2',
    releaseDate: new Date('decembar 19, 1997'),
    description:'flying black retard',
    imdbRating:8,
    earnings:2_000_000
    
},
{ 
title:'Batman',
id:'2',
releaseDate: new Date('decembar 19, 1997'),
description:'flying black retard',
imdbRating:8,
earnings:2_000_000}]




let config:Columns<Movie>[]=[
    {
        getHeader(){return ''},
        getValue(obj){return <div><Settings movie={obj}/></div>}
    },
    {
        getHeader(){return 'Title'},
        getValue(obj){return obj.title}
    },
    {
        getHeader(){return 'Release Date'},
        getValue(obj){return obj.releaseDate.toDateString()}
    },
    {
        getHeader(){return 'Description'},
        getValue(obj){return obj.description}
    },
    {
        getHeader(){return 'IMDB Rating'},
        getValue(obj){return obj.imdbRating}
    },
    {
        getHeader(){return 'Earnings'},
        getValue(obj){return obj.earnings}
    },
    

]


const MachineLearning=()=>{
    return <div className={'tableDiv'}>
        <button className="addMovie">add</button>
        <Table data={movies} config={config}/></div>
}

export default MachineLearning