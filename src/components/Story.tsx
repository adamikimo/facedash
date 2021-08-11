// imports
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/Story.css';

// props interface
interface Props{
    image?: string;
    profilePic?: string;
    title?: string;
}

// components
const Story: React.FC<Props> = ({  image, profilePic, title }) => {
    // template
    return (
        <div
        className='story'
        style={{
            backgroundImage: `url(${image})`
        }}
        >
            <Avatar 
            src={profilePic}
            className='story__avatar'
            />
            <h4>{title}</h4>
        </div>
    )
}

export default Story


