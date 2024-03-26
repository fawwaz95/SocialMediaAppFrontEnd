
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostWidget = () => {
    const fileInputRef = useRef(null);
    const [uploadFile, setUploadFile] = useState({});
    const [isUploading, setIsUploading] = useState(false);
    const [uploadUrl, setUploadUrl] = useState();
    const userInfoState = useSelector((state) => state.userInfo);

    useEffect(() => {
        console.log("Use effecting.......Post widget");
        console.log(uploadFile);
    }, [uploadFile, userInfoState, uploadUrl, isUploading])

    const handleUploadIconClick = () => {
        fileInputRef.current.click();
      };

    const handleFileChange = async (event) => {
        const file = event.target.files;
        console.log('Selected files:', file[0].name);
        setUploadFile(file[0]);
        showFileUpload(file[0].name);
    };

    const showFileUpload = async (fileName) => {
        setTimeout(async () => {
            console.log("calling after 1 seconds for reindexing......");
            console.log(fileName);
            await setUserUpload(fileName);
        }, 1000);
    }

    const setUserUpload = async (userUpload) => {
        console.log("User upload? " + userUpload);
        const setFilePath = `images\\${userUpload}`;
        setUploadUrl(setFilePath);
    }

    const uploadPost = async () => {
        console.log("Inside Upload post function");
        console.log(uploadFile);
        try{
            const formData = new FormData();
            formData.append('file', uploadFile);
            formData.append('email', userInfoState.userInfo.email);
    
            const postMethod = {
                method: "POST",
                body: formData,
            };
    
            const response = await fetch("http://localhost:3001/routes/fileUpload", postMethod);
            const data = await response.json();
    
            console.log("Heres the data uploadPost: ");
            console.log(data);

            await clearUploadData();
    
        }catch(error){
            console.error(error);
        }
    }

    const clearUploadData = async () => {
        await setUploadFile({});
        await setIsUploading(false);
        await setUploadUrl("");
    }

    return (
        <div id="postWidget" className="ml-8 text-sm text-white text-base rounded-md bg-zinc-900">
            <div className="flex p-4 border-b border-white">
                <Link to="Profile"><img src="/images/profile_image.jpg" className="rounded-full h-20 w-20 mr-8" /></Link>
                <textarea className="flex place-self-center bg-gray-500 w-full h-1/2 rounded-full pl-4 pt-4" placeholder="Post somthing...." />
           </div>
           <div className="flex justify-between p-4">
                <div className="flex items-center">
                    <a href="#"> <img src="/images/camera_icon.svg" className="h-8 pr-2" /> </a>
                    <div>Camera</div>
                </div>
                <div className="flex items-center">
                    <a id="uploadIcon" href="#" onClick={handleUploadIconClick}> <img src="/images/upload_icon.svg" className="h-8 pr-2" /> </a>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div>Upload</div>
                    {uploadUrl && <img src={uploadUrl} alt="Upload Img" className="h-8 m-2"></img>}
                </div>
                <button id="postBtn" className="bg-sky-900 pl-8 pr-8 py-2 rounded-full" onClick={uploadPost}> Post </button>
           </div>
        </div>
    )
}

export default PostWidget;