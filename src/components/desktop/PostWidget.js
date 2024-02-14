
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const PostWidget = () => {
    const fileInputRef = useRef(null);
    const [uploadFile, setUploadFile] = useState({});

    useEffect(() => {
        console.log("Useeffecting.......Post widget");
        console.log(uploadFile);

        if(uploadFile && uploadFile.name){
             fetchEndpoint(uploadFile);
        }

    }, [uploadFile])

    const handleClick = () => {
        fileInputRef.current.click();
      };

    const handleFileChange = async (event) => {
        const file = event.target.files;
        console.log('Selected files:', file[0].name);
        setUploadFile(file[0]);
    };

    const fetchEndpoint = async (file) => {
        console.log("What is file ? ");
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);

        console.log("Form data");
        console.log(formData);

        const postMethod = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: formData,
        };

        const response = await fetch("http://localhost:3001/routes/fileUpload", postMethod);
        const data = await response.json();

        console.log("Heres the data fetchEndpoint " + data);
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
                </div>
                <button className="bg-sky-900 pl-8 pr-8 py-2 rounded-full"> Post </button>
           </div>
        </div>
    )
}

export default PostWidget;