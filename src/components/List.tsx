import {Movie} from "../types/Movie.tsx";
import MovieItem from "./MovieItem.tsx";

interface props {
    data: Movie[];
}

function List({data}: props) {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

                {data.map((movie, index) => (
                    <div key={index}>
                        <MovieItem data={movie} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default List