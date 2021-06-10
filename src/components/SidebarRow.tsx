import React from 'react'
import '../css/SidebarRow.css';
import Avatar from '@material-ui/core/Avatar';

interface Props{
    src?: string;
    Icon?: any;
    title?: string;
}

const SidebarRow: React.FC<Props> = ({ src, Icon, title }) => {
    return (
        <div
        className='sidebar-row'
        >
            {
            src && 
            <Avatar 
            src={src}
            />
            }
            {
            Icon && 
            <Icon />
            }
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
