const Header = () => {
    return(
        <div className="fixed top-0 left-0 w-full bg-gray-950 text-white p-4 flex justify-between">
            <div className="flex">
                <div className="font-inter text-2xl ml-20 mr-8">Moodz</div>
                <input type="search" placeholder="Search..." className="pl-4 pr-4 rounded-full bg-gray-200 text-black"/>
            </div>

            <div className="flex mr-4">
                <div className="font-inter text-sm mr-4">nightmode icon</div>
                <div className="font-inter text-sm">notification icon</div>
            </div>
        </div>
    )
}

export default Header;