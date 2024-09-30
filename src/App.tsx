import List from "./components/List.tsx";
import {useEffect, useState} from "react";
import {Movie} from "./types/Movie.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";


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
            <div className="min-h-screen flex flex-col gap-2 py-2">

                <div className="pb-2">
                    <Header search={search} searchHandler={searchData}/>
                </div>

                <div className="px-2">
                    <List data={filteredData}/>
                </div>

                <div className="flex-grow"/>

                <Footer/>

            </div>
    )
}

export default App
