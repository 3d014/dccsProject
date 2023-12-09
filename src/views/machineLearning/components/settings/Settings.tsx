import Movie from "../../../../../common/models/movie"
import { useNavigate } from "react-router-dom"
const Settings=({movie}:{movie:Movie})=>{
    const navigate=useNavigate()
    return <button onClick={()=>{
        navigate(`/MovieEditor/${movie.id}`)
    }}>settings</button>
}

export default Settings