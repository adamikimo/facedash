// imports
import React from 'react'
import Story from './Story';
import '../css/StoryReel.css';

// component
const StoryReel = () => {
    // template
    return (
        <div
        className='storyReel'
        >
            <Story 
            image='https://images.unsplash.com/photo-1610356575103-83bdd0338fac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            profilePic='https://images.unsplash.com/photo-1610047801982-9484d88b4fe2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            title='Adam Ismail'
            />   
            <Story 
            image='https://images.unsplash.com/photo-1605718665998-85fbd49c5eff?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            profilePic='https://images.unsplash.com/photo-1610212411735-e68d49920025?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            title='Omar Ismail'
            />
            <Story 
            image='https://images.unsplash.com/photo-1608457543170-bac3c080f277?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            profilePic='https://images.unsplash.com/photo-1609099621209-22da17a25d9e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            title='Ismail Kamal'
            />
        </div>
    )
}

export default StoryReel
