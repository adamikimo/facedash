// imports
import React from 'react'
import '../css/Post.css';
import Avatar from '@material-ui/core/Avatar';

// icons from material-ui
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

// props interface
interface Props{
    ProfilePic?: any;
    message?: string;
    timeStamp?: string;
    imgName?: string;
    username?: string | number;
}

// component
const Post: React.FC<Props> = ({ProfilePic, message, timeStamp, imgName, username}) => {
    // template
    return (
        <div
        className='post'
        >
            <div className="post__top">
                <Avatar 
                src={ProfilePic}
                className='post__avatar'
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timeStamp ? timeStamp : '')).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
            {message}
            </div>
            <div className="post__options">
                        <div className="post__option">
                            <ThumbUpIcon />
                            <h4>Like</h4>
                        </div>
                        <div className="post__option">
                            <ChatBubbleOutlinedIcon />
                            <h4>Comment</h4>
                        </div>
                        <div className="post__option">
                            <NearMeIcon />
                            <h4>Share</h4>
                        </div>
                        <div className="post__option">
                            <AccountCircleIcon />
                            <ExpandMoreOutlinedIcon />
                        </div>
                    </div>
        </div>
    )
}

export default Post
