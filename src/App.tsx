import List from "./components/List.tsx";
import {useEffect, useState} from "react";
import {Movie} from "./types/Movie.tsx";


function App() {

    const [search, setSearch] = useState<string>('');

    const [data, setData] = useState<Movie[]>([]);

    const [filteredData, setFData] = useState<Movie[]>([]);


    async function getJSONData() {

        try {
            const response = await fetch("https://raw.githubusercontent.com/Sharkgrammer/Does-The-Shark-Die/refs/heads/master/data.json");

            if (response.ok) {
                let res = await response.json();

                // @ts-ignore - object is of Movie
                res.sort((m1, m2) => m1.title.localeCompare(m2.title));

                setData(res);
                setFData(res);
            }

        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        getJSONData();
    }, [])

    const searchData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();

        setSearch(searchValue);

        const fData = data.filter((movie) =>
            movie.title.toLowerCase().includes(searchValue)
        );

        setFData(fData);
    };


    return (
        <div className="h-screen flex flex-col">

            <div className="bg-main w-full py-3 flex justify-center items-center">
                <div className="flex gap-2 items-center w-2/3 md:w-1/2">
                    <input className="h-10 bg-white font-bold text-xl rounded-3xl py-1 px-3 w-full" value={search}
                           onChange={searchData}/>
                </div>
            </div>

            <div className="p-2">
                <List data={filteredData}/>
            </div>

            <div className="flex-grow"/>

            <div className="bg-main h-auto md:h-20 text-white grid md:flex justify-end items-center px-2">

                <div className="flex items-center flex-row-reverse md:flex-row py-2">
                    <a href='https://ko-fi.com/X8X7HOLE0' target='_blank'>
                        <img src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com'
                             className="h-10 cursor-pointer"/>
                    </a>
                    <h1 className="px-2 text-sm">Developed by <span
                        className="whitespace-nowrap">Daniel Keane Kelly</span></h1>
                </div>

                <div className="flex-grow"/>

                <div className="flex items-center justify-end py-2">
                    <h1 className="px-2 text-sm">Data sourced from themoviedb.org</h1>
                    <a href='https://www.themoviedb.org/' target='_blank'>
                        <img className="h-10"
                             src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"/>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default App
