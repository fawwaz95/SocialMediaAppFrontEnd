const ConfirmBox = ({ userToUnfollow , userToRemove, showConfirmWindow, setProfileData, userName }) => {
    console.log("Calling ConfirmBox Component!!!!!!");
    
    const handleUnfollowConfirm = () => {
        unFollowUser(setProfileData, userName, userToUnfollow);
        showConfirmWindow(false); 
    };

    const handleUnfollowCancel = () => {
        showConfirmWindow(false);
    };

    const unFollowUser = async (setProfileData, userName, userToUnfollow) => {
        console.log("unFollowUser function called " + userToUnfollow);
    
        try {
            const response = await fetch(`http://localhost:3001/routes/unFollowUser?user_id=${userName}&friend_id=${userToUnfollow}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error in unFollowUser function:", errorData.error);
                alert("Can't unfollow user... please contact admin");
                return;
            }
    
            const data = await response.json();
            console.log("Unfollow user data returned...");
            console.log(data);
    
            if(data.success === true){
                console.log(`Removing ${data.unFollowed} from hook......`);
                setProfileData(prev => ({
                    ...prev,
                    following: prev.following.filter(user => user !== data.unFollowed)
                }));
            }
    
    
        } catch (error) {
            console.error("Error in unFollowUser function:", error);
            alert("An error occurred while trying to unfollow the user.");
        }
    };

    const handleRemoveConfirm = () => {
        console.log("hanleRemoveConfirm invoked....");
        showConfirmWindow(false);
        removeTheFollower(userName, userToRemove, setProfileData);
    }

    const handleRemoveCancel = () => {
        console.log("handleRemoveCancel invoked....");
        showConfirmWindow(false);
    }

    const removeTheFollower = async  (userName, userToRemove, setProfileData) => {
        console.log("removeTheFollower invoked....");
        try{
        const response = await fetch(`http://localhost:3001/routes/removeFollower?user_id=${userName}&friend_id=${userToRemove}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error("Unable to fetch remove follower....." + "Response: " + response.ok);
        }

        const data = await response.json();
        console.log(data);

        setProfileData(prev => ({
            ...prev,
            followers: prev.followers.filter(user => user != userToRemove),
        }));

        }catch(error){
            console.error(error);
            console.log("Error in removeTheFollower....");
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg mb-4 text-gray-800">
                {userToUnfollow ? 
                    `Are you sure you want to unfollow ${userToUnfollow}?` : 
                    `Are you sure you want to remove ${userToRemove}?`
                }
            </p>
                <div className="flex justify-around">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={userToUnfollow ? handleUnfollowConfirm : handleRemoveConfirm}>
                        Yes
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={userToUnfollow ? handleUnfollowCancel : handleRemoveCancel}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmBox;