// imports
import React from 'react';
import '../css/Header.css';
import { 
    useStateValue 
} from '../StateProvider';
import IconButton from '@material-ui/core/IconButton'

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

// component
const Header: React.FC = () => {
  // @ts-ignore
  const [{ user }, dispatch] = useStateValue<any>();

    // template
    return (
        <div
        className='header'
        >
            <div
            className='header__logo__left'
            >
                <BubbleChartIcon 
                fontSize='large'
                className='header__logo'
                />
            </div> 
            <div
            className='header__input__Container'
            >
                <IconButton>
                <SearchIcon 
                fontSize="large"
                />
                </IconButton>
                <input 
                type='text'
                placeholder='Search Facedash'
                className='header__input__Container__input'
                />
            </div>
            <div className="header__center">
                <div className="header__option">
                    <HomeIcon />
                </div>
                <div className="header__option">
                    <FlagIcon />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__right__info">
                <Avatar 
                src={user.photoURL}
                />
                <h4>
                    {user.displayName}
                </h4>
                </div>
            </div>
        <IconButton>
        <AddIcon />
        </IconButton>
        <IconButton>
        <ForumIcon />
        </IconButton>
        <IconButton>
        <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
        <ExpandMoreIcon/>
        </IconButton>
        </div>
    )
}

export default Header;