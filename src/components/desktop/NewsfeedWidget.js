import { useEffect, useState } from "react";
import { useIsMobile } from "../../contexts/MobileContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NewsfeedPage from "../Mobile/NewsfeedPage";
import ConfirmBox from "../WindowPopups/ConfirmBox";
import CommentBox from "../WindowPopups/CommentBox";

const NewsfeedWidget = () => {
  const isMobile = useIsMobile();
  const [newsfeed, setNewsfeed] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [confirmWindow, showConfirmWindow] = useState(false);
  const [userToUnfollow, setUserToUnfollow] = useState("");
  const [allLikedPosts, setAllLikedPosts] = useState([]);
  const [commentWindow, openCommentWindow] = useState(false);
  const userInfoState = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchAllData = async () => {
      await getNewsfeed();
      await getFollowing();
      await fetchLikedPosts();
    };

    if (userInfoState.userInfo.userName) {
      fetchAllData();
    }
  }, [userInfoState.userInfo.userName]);

  const getNewsfeed = async () => {
    try {
      const results = await fetch(`http://localhost:3001/routes/getNewsfeed`);
      const data = await results.json();
      setNewsfeed(data);
    } catch (error) {
      console.error("Error fetching newsfeed:", error);
    }
  };

  const getFollowing = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/routes/getFollowingFollowers?user_id=${userInfoState.userInfo.userName}`
      );

      if (!response.ok) throw new Error("Failed to fetch following users");

      const data = await response.json();
      setFollowingUsers(data.success ? data.followingFollowersData.following : []);
    } catch (error) {
      console.error("Error fetching following users:", error);
    }
  };

  const fetchLikedPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/routes/getLikedPosts`);
      const jsonData = await response.json();

      if (jsonData.success) {
        const { response: { data: likedPosts } } = jsonData;
        setAllLikedPosts(likedPosts);
      }
    } catch (error) {
      console.error("Error fetching liked posts:", error);
    }
  };

  const toggleLikePost = async (url) => {
    try {
      const likedPost = {
        url: url,
        likedBy: userInfoState.userInfo.userName,
      };

      const postMethod = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likedPost }),
      };

      const response = await fetch("http://localhost:3001/routes/likedPost", postMethod);

      if (response.ok) {
        await fetchLikedPosts();
      } else {
        console.error("Error toggling like:", response.status);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const followFriend = async (event, item) => {
    event.preventDefault();
    try {
      const postMethod = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userInfoState.userInfo.userName,
          friendUserName: item.userName,
        }),
      };

      const response = await fetch("http://localhost:3001/routes/followFriend", postMethod);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("The result.......followFriend");
      console.log(result);
    } catch (error) {
      console.error("Error following friend:", error);
    }
  };

  const unFollowFriend = (userToUnfollow) => {
    setUserToUnfollow(userToUnfollow);
    showConfirmWindow(true);
  };

  const commentOnPost = () => {
    openCommentWindow((current) => !current);
  };

  return (
    <div>
      {!isMobile ? (
        <div className="py-4 ml-8 text-white text-xs">
          {newsfeed.map((item) => (
            <div className="bg-zinc-900 rounded-md" key={item.url}>
              <div id="contentHeader" className="flex items-center pt-4">
                <Link to={`/Profile/${item.userName}/${true}`}>
                  <div>
                    <img
                      src="/images/profile_image.jpg"
                      className="rounded-full h-12 w-12 md:h-20 md:w-20 mr-4 ml-4"
                      alt="Profile"
                    />
                  </div>
                </Link>
                <div className="flex-1 pl-4">
                  <div>{item.userName}</div>
                  <div className="text-slate-400">{item.location}</div>
                </div>
                <div
                  onClick={(e) =>
                    followingUsers.includes(item.userName)
                      ? unFollowFriend(item.userName)
                      : followFriend(e, item)
                  }
                  className={`flex m-auto justify-between p-2 ${
                    followingUsers.includes(item.userName)
                      ? "bg-green-400"
                      : "bg-slate-700"
                  } rounded-full mr-4`}
                >
                  <a href="#">
                    <img
                      src="images/following_icon.svg"
                      className="h-5"
                      alt="Follow"
                    />
                  </a>
                </div>
              </div>
              <div id="contentBody">
                <div className="flex flex-col items-start">
                  <div className="py-4 pl-4">Caption</div>
                  <img
                    src={item.url}
                    className="pt-4 pb-4 max-h-96 max-w-full self-center"
                    alt="Post"
                  />
                </div>
                <div className="flex">
                  <div
                    className="pl-4 pr-4 pb-4"
                    onClick={() => toggleLikePost(item.url)}
                  >
                    {allLikedPosts.some(
                      (likedPost) =>
                        likedPost.url === item.url &&
                        likedPost.likes.includes(
                          userInfoState.userInfo.userName
                        )
                    ) ? (
                      <img
                        src="/images/heart_icon_temp.svg"
                        className="h-4"
                        alt="Liked"
                      />
                    ) : (
                      <img
                        src="/images/heart_white_icon.svg"
                        className="h-4"
                        alt="Not Liked"
                      />
                    )}
                  </div>
                  <div>
                    <img
                      src="/images/message_bubble_white_icon.svg"
                      className="h-4"
                      alt="Comment"
                      onClick={commentOnPost}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {confirmWindow && (
            <ConfirmBox
              userToUnfollow={userToUnfollow}
              showConfirmWindow={showConfirmWindow}
              userName={userInfoState.userInfo.userName}
            />
          )}
          {commentWindow && <CommentBox openCommentWindow={openCommentWindow} />}
        </div>
      ) : (
        <NewsfeedPage />
      )}
    </div>
  );
};

export default NewsfeedWidget;
