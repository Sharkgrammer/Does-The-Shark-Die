// @ts-ignore
function Header({search, searchHandler}) {

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-2/3 md:w-1/2">
                <input className="border-2 focus:border-0 accent-red-500 hover:border-red-500 border-dark-bg dark:border-light-bg h-10 bg-white font-semibold capitalize rounded-3xl py-1 px-3 w-full" value={search}
                       onChange={searchHandler}/>
            </div>
        </div>
    )
}

export default Header