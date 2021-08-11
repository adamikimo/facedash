// imports
import React from 'react';

// icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import PeopleIcon from '@material-ui/icons/People';
import SidebarRow from './SidebarRow';
import { 
    useStateValue 
} from '../StateProvider';
import '../css/SideBar.css';

// component
const SideBar: React.FC = () => {
  // using the custom hook
  const [{ user }, dispatch] = useStateValue();

    // template
    return (
        <div
        className='sidebar'
        >
            <SidebarRow 
            src={user.photoURL}
            title={user.displayName}
            />
            <SidebarRow 
            Icon={LocalHospitalIcon}
            title='COVID-19 information center'
            />
            <SidebarRow 
            Icon={EmojiFlagsIcon}
            title='Pages'
            />
            <SidebarRow 
            Icon={PeopleIcon}
            title='Freinds'
            />
            <SidebarRow 
            Icon={ChatIcon}
            title='Massenger'
            />
            <SidebarRow 
            Icon={StorefrontIcon}
            title='MarketPlace'
            />
            <SidebarRow 
            Icon={VideoLibraryIcon}
            title='videos'
            />
            <SidebarRow 
            Icon={ExpandMoreOutlinedIcon}
            title='More'
            />
        </div>
    )
}

export default SideBar
