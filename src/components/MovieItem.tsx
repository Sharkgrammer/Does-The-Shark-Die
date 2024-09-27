import {Movie} from "../types/Movie.tsx";

interface props {
    data: Movie;
}

function MovieItem({data}: props) {

    return (
        <div className="text-white font-semibold">

            <div className="border border-black rounded-2xl overflow-hidden bg-main">
                <h1 className={`text-white text-2xl font-bold text-center p-2 border-b border-white ${data.die ? "bg-red-900" : "bg-green-900"}`}>{data.title}</h1>

                <div className="flex justify-center py-2">
                    <img src={data.image} className="h-80 rounded-xl"/>
                </div>

                <div className="select-none">
                    <p className="h-20 min-h-20 px-2 py-1 border-white border-b border-t overflow-hidden hover:overflow-auto hover:h-auto">{data.desc}</p>
                </div>

                <div className={`text-center select-none py-2 ${data.die ? "bg-red-900" : "bg-green-900"}`}>
                    <p className="text-white text-2xl font-bold">{data.die ? "The Shark Dies" : "The Shark Lives"}</p>
                </div>
            </div>


        </div>
    )
}

export default MovieItem