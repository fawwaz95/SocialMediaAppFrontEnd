import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const CommentBox = ({openCommentWindow}) => {
    //const [comments, setComments] = useState([]);
    //const [openCommentBox, setOpenCommentBox] = useState(true);

    useEffect(()=>{
        console.log("CommentBox is visible!!!");

        /*return () => {
            console.log("Unmount.....closeCommentBox: false")
            setOpenCommentBox(false);
        }*/
    },[])

    const closeBtn = () =>{
        console.log("CommentBox is closed!!!");
        openCommentWindow(false);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            {openCommentWindow &&
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-lg mb-4 text-gray-800">
                                <h2>Comments</h2>
                                <div>
                                    <p className="border-2 p-4 text-sm">
                                        Some sort of comment on post
                                    </p>
                                </div>
                                
                        </p>
                        <Link to="/Homepage">
                            <button className="bg-slate-300 p-2" onClick={() => closeBtn()}>Post</button>
                        </Link>
                    </div>
            }
       </div>
    )
}

export default CommentBox;