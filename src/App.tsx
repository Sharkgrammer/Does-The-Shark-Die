import List from "./components/List.tsx";
import {useEffect, useState} from "react";
import {Movie} from "./types/Movie.tsx";


function App() {

    const [data, setData] = useState<Movie[]>([]);

    async function getJSONData() {

        try {
            const response = await fetch("https://raw.githubusercontent.com/Sharkgrammer/Does-The-Shark-Die/refs/heads/master/data.json");

            if (response.ok) {
                let res = await response.json();
                console.log(res);

                setData(res);
            }

        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        getJSONData();
    },[])


    return (
        <div>

            <List data={data} />

        </div>
    )
}

export default App
