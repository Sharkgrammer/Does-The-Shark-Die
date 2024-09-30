import {Movie} from "../types/Movie.tsx";

interface props {
    data: Movie;
}

function MovieItem({data}: props) {

    function getTheme() {
        switch (data.die) {
            case 0:
                return "bg-green-800 dark:bg-green-600";
            case 1:
                return "bg-red-800 dark:bg-red-600";
            case 2:
                return "bg-gray-800 dark:bg-gray-600";
        }
    }

    return (
        <div className="text-white font-semibold">

            <div className="flex justify-center">
                <img src={data.image} className="rounded-t-xl"/>
            </div>

            <div className={`rounded-b-xl text-center select-none py-2 ${getTheme()}`}>
                <p className="capitalize px-2">{data.desc}</p>
            </div>

        </div>
    )
}

export default MovieItem