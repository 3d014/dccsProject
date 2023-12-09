import { MovieContext} from "../../providers/MovieContext"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Movie from '../../../common/models/movie'
import {v4 as uuidv4} from 'uuid'
import './MovieEditor.css'



export const MovieEditor=()=>{
  
    const [initialMovie,setInitialMovie]=useState<Movie>({
            id:uuidv4(),
            title:"",
            releaseDate:new Date(),
            description:'',
            imdbRating:0,
            earnings:0,
            genre:{
                id:uuidv4(),
                genreTitle:''

            },
            image:''
    })
    const {movies}=useContext(MovieContext)
    const {id}=useParams()
    
    useEffect(()=>{
        if(id && movies.some(movie=>movie.id===id)){
            setInitialMovie(movies.find(movie=>movie.id===id)||initialMovie)
        } 
        
    },[id,movies])
    
    

    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,property:string)=>{
        if(property!=='releaseDate'){  
            setInitialMovie({
                ...initialMovie,
                [property]:event.target.value
            })
        } else{
            setInitialMovie({
                ...initialMovie,
                [property]:new Date(event.target.value)
            })
        }
          
        
    }

    return <div className="editorContainer">
        <div className="leftSide">
            <div className="inputContainer">
                <label>Title</label>
                <input value={initialMovie.title} onChange={(e)=>{handleInputChange(e,'title')}}></input>
            </div>
            
            <div className="inputContainer">
                <label>Release Date</label>
                <input type='date' value={initialMovie.releaseDate.toISOString().slice(0,10)} onChange={(e)=>{handleInputChange(e,'releaseDate')}}></input>
            </div>
            <div className="inputContainer">
                <label>IMDB Rating</label>
                <input type='number' min='0' max='10' value={initialMovie.imdbRating} onChange={(e)=>{handleInputChange(e,'imdbRating')}}></input>
            </div>
            <div className="inputContainer">
                <label>Earnings</label>
                <input type='number' value={initialMovie.earnings} onChange={(e)=>{handleInputChange(e,'earnings')}}></input>
            </div>

            <div className="inputContainer">
                <label>Description</label>
                <input value={initialMovie.description} onChange={(e)=>{handleInputChange(e,'description')}}></input>
            </div>

            <div className="inputContainer">
                <label>Genre</label>
                <select value={initialMovie.genre?.genreTitle} onChange={(e)=>{handleInputChange(e,'genre.genreTitle')}} placeholder={'select your option'}>
                    <option value={'Horror'}>Horror</option>
                    <option value={'Comedy'}>Comedy</option>
                </select>
            </div>
        </div>





        <div className="rightSide">
            <button>UPLOAD</button>

            <input type='file'></input>
        </div>
    </div>
}