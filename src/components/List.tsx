import {Movie} from "../types/Movie.tsx";
import MovieItem from "./MovieItem.tsx";

interface props {
    data: Movie[];
}

function List({data}: props) {

    return (
        <div>
            <div className="w-full bg-red-500">

                {data.map((movie, index) => (
                    <div>
                        <MovieItem data={movie} key={index}/>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default List