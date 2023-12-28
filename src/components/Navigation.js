import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="text-black">
            <li> Profile </li>
            <li> Friends </li>
            <li> Newsfeed </li>
            <div className="fixed flex bottom-5 mr-4">
                <div className="mr-4">
                    <a href="#">
                        <img src="/images/lightmode_icon.svg" className="h-6" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="/images/notification_icon.svg" className="h-6" />
                    </a>
                </div>
            </div>
        </div>
        /*<div className="text-white p-4 sm:w-1/5">
            <p className="text-2xl pb-20">SnapGram </p>
            <nav>
                <ul className="text-sm sm:text-lg">
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/home_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Home"> Home </Link>
                        </li>
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/explore_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Explore"> Explore </Link>
                        </li>
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/saved_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Saved"> Saved </Link>
                        </li>
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/following_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Following"> Following </Link>
                        </li>
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/following_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Followers"> Followers </Link>
                        </li>
                        <li className="pb-10 flex hover:bg-sky-700 rounded-lg"> 
                            <img src="/images/profile_icon.svg" className="h-7 pr-2"/>
                            <Link to="/Profile"> Profile </Link>
                        </li>                    
                </ul>
            </nav>
        </div>*/
    )
}

export default Navigation;