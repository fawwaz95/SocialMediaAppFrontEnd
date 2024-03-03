
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
    
        if(uploadFile && uploadFile.name && !isUploading){
            setIsUploading(true);
            uploadPost(uploadFile);
        }
    
    }, [uploadFile, userInfoState, uploadUrl, isUploading])

    const handleClick = () => {
        fileInputRef.current.click();
      };

    const handleFileChange = async (event) => {
        const file = event.target.files;
        console.log('Selected files:', file[0].name);
        setUploadFile(file[0]);
    };

    const uploadPost = async (file) => {
        try{
            const formData = new FormData();
            formData.append('file', file);
            formData.append('email', userInfoState.userInfo.email);
    
            const postMethod = {
                method: "POST",
                body: formData,
            };
    
            const response = await fetch("http://localhost:3001/routes/fileUpload", postMethod);
            const data = await response.json();
    
            console.log("Heres the data uploadPost: ");
            console.log(data);
    
            setTimeout(async () => {
                console.log("calling after 2.5 seconds for reindexing......");
                await fetchUserUpload(data.cloudinaryResult.public_id);
            }, 2500);
        }catch(error){
            console.error(error);
        }
    }

    const fetchUserUpload = async (publicId) =>{
        const response = await fetch(`http://localhost:3001/routes/getUserUpload?publicId=${publicId}`);
        const data = await response.json();

        console.log("Got the single post?");
        console.log(data);
        setUploadUrl(data[0].url);
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
                    <a href="#" onClick={handleClick}> <img src="/images/upload_icon.svg" className="h-8 pr-2" /> </a>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div>Upload</div>
                    {uploadUrl && <img src={uploadUrl} alt="Upload Img" className="h-8"></img>}
                </div>
                <button className="bg-sky-900 pl-8 pr-8 py-2 rounded-full"> Post </button>
           </div>
        </div>
    )
}

export default PostWidget;