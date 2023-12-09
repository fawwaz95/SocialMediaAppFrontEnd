const Navigation = () => {
    return( 
        <div className="text-white p-4 w-1/6">
            <p className="text-2xl pb-20"> SnapGram</p>
            <nav>
                <ul className="text-lg">
                    <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> <img src="/images/home_icon.svg" className="h-7 pr-2"/> Home</li>
                    <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> <img src="/images/explore_icon.svg" className="h-7 pr-2"/> Explore</li>
                    <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> <img src="/images/people_icon.svg" className="h-7 pr-2"/>People</li>
                    <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> <img src="/images/saved_icon.svg" className="h-7 pr-2"/>Saved</li>
                    <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> <img src="/images/profile_icon.svg" className="h-7 pr-2"/>Profile</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;