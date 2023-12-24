import {useState} from 'react';
import MessageBox from './MessageBox';

const Header = () => {
    const [isLightMode, setisLightMode] = useState(false);
    const [showMsgBox, setShowMsgBox] = useState(false);

    const setMode = () => {
        console.log("Setting mode......");
        setShowMsgBox(prevState => !prevState);
    }

    return(
        <div className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 flex justify-between">
            <div className="flex">
                <div className="font-inter text-2xl ml-20 mr-8">Moodz</div>
                <input type="search" placeholder="Search..." className="pl-4 pr-4 rounded-full bg-gray-200 text-black"/>
            </div>

            <div className="flex mr-4">
                <div className="mr-4">
                    <a href="#" onClick={()=> {setMode()}}>
                        <img src="/images/lightmode_icon.svg" className="h-6"/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="/images/notification_icon.svg" className="h-6"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;