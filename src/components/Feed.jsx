import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import '../css/Feed.css';
import db from '../firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot(s => {
            setPosts(
            s.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }
    ,[]
    );

    return (
        <div
        className='feed'
        >
            <StoryReel />
            <MessageSender />
            {
                posts.map(post => 
                (<Post 
                key={post.id}
                profilePic={post.data.profilePic}
                username={post.data.username}
                timeStamp={post.data.timeStamp}
                message={post.data.message}
                />)
            )
            }
        </div>
    )
}

export default Feed;
