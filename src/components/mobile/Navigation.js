import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="fixed w-full flex flex-col bottom-0 p-4 text-white bg-slate-700 z-50">
            <div>
                <Link to="/Profile"> Profile </Link>
            </div>
            <div> 
                <Link to="/Friends"> Friends </Link>
            </div>
            <div> 
                <Link to="/Newsfeed"> Newsfeed </Link>
            </div>
            <div className="flex">
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
            <Outlet />
        </div>
    )
}

export default Navigation;