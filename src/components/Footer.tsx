function Footer() {

    return (
        <div className="h-auto md:h-20 grid md:flex justify-end items-center px-2 text-black dark:text-white">

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
    )
}

export default Footer