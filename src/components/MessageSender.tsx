// imports
import React, { 
    useState, 
    useRef 
} from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../css/MessageSender.css';
import { 
    useStateValue 
} from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

// icons from material-ui
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

// component
const MessageSender: React.FC = () => {
    // using the custom hook
    const [{ user }, dispatch] = useStateValue();
    // state
    const [input, setInput] = useState('');
    // handle submit function
    const handleSubmit = (e: any)=> {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
        });
    }
    
    // template
    return (
        <div
        className='message-sender'
        >
            <div className="message-sender__top">
                <Avatar 
                src={user.photoURL}
                />
                <form>
                    <input
                    type="text"
                    className='message-sender__inputText'
                    value={input}
                    onChange={el => setInput(el.target.value)}
                    placeholder={`what do you want to write, ${user.displayName}?? write it here!!`}
                    />
                    <button 
                    type='button'
                    onClick={handleSubmit}
                    >
                        POST
                    </button>
                </form>
            </div>
            <div 
            className="message-sender__bottom"
            >
                <div 
                className="message-sender__option"
                >
                    <VideocamIcon 
                    style={{
                        color: 'green',
                    }}
                    />
                    <h4>Live video</h4>
                </div>
                <div 
                className="message-sender__option"
                >
                    <PhotoLibraryIcon 
                    style={{
                        color: 'green',
                    }}
                    />
                    <h4>Photo/video</h4>
                </div>
                <div 
                className="message-sender__option"
                >
                    <InsertEmoticonIcon 
                    style={{
                        color: 'green',
                    }}
                    />
                    <h4>Emoji</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;