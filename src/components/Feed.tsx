// imports
import React, { 
    useState, 
    useEffect
} from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import '../css/Feed.css';
import db from '../firebase';

// component
const Feed = () => {
    // states
    const [posts, setPosts] = useState<Array<any>>([]);

    // getting the data
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

    // feed template
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
                // @ts-ignore
                profilePic={post.data.profilePic as any}
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
