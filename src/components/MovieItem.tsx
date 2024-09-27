import {Movie} from "../types/Movie.tsx";

interface props {
    data: Movie;
}

function MovieItem({data}: props) {

    return (
        <div>
            <div className="h-10">

                <h1>{data.title}</h1>

            </div>
        </div>
    )
}

export default MovieItem