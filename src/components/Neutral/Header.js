import { useState } from 'react';
import { Link } from "react-router-dom";
import MessageBox from '../WindowPopups/MessageBox';
import Navigation from '../Mobile/Navigation';
import { useIsMobile } from '../../contexts/MobileContext';

const Header = () => {
    const [isLightMode, setisLightMode] = useState(false);
    const [showMsgBox, setShowMsgBox] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useIsMobile();

    const setMode = () => {
        console.log("Setting mode......");
        setShowMsgBox(prevState => !prevState);
    }

    const openMenu = () => {
        console.log("....setting menu");
        setShowMenu(current => !current);
    }

    return (
        <div>
            {!isMobile ? (
            <div className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 flex justify-between z-50">
                <div>
                    <div className="flex">
                        <div className="font-inter text-2xl ml-3 mr-4 text-blue-400"> <Link to="/"> Moodz </Link></div>
                        <input type="search" placeholder="Search..." className="pl-4 pr-4 rounded-full bg-gray-600 text-black" />
                    </div>
                    <div className="fixed top-5 right-0 mr-4 gap-4 flex">
                        <div className="flex gap-4">
                            <a href="#" onClick={() => { setMode() }}>
                                <img src="/images/lightmode_icon.svg" className="h-6" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="/images/notification_icon.svg" className="h-6" />
                            </a>
                        </div>
                        <div>Logout</div>
                    </div>
                </div>
            </div>
            ) : (
                <div>
                    <div className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 flex justify-between">
                        <div className="font-inter text-xl mt-2 ml-2 mr-2">Moodz</div>
                        <a className="fixed right-5" href="#" onClick={openMenu}>
                            <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1." stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </a>
                    </div>
                    {showMenu && <Navigation />}
                </div>
            )}

        </div>
    )
}

export default Header;