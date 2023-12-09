import Genre from './genre'
interface Movie{
    title:string;
    id:string;
    releaseDate:Date;
    description:string;
    imdbRating:number;
    earnings:number;
    genre?: Genre;
    image?:string
}

export default Movie