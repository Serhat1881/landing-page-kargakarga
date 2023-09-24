import type { SvgIconProps } from '@mui/material';
import React from 'react';

import {
    Bin,
    Calendar,
    ChevronDown,
    Copy,
    Cross,
    Document,
    Edit,
    Facebook,
    Hamburger,
    Instagram,
    Link,
    Linkedin,
    Location,
    Lock,
    LogOut,
    Mail,
    Message,
    Mobile,
    Next,
    People,
    Person,
    Phone,
    Pin,
    Previous,
    RightArrow,
    RotateLeft,
    RoundAdd,
    Search,
    Share,
    Twitter,
} from '../icons';

export interface IconProps extends SvgIconProps {
    iconName:
        | 'add'
        | 'bin'
        | 'calendar'
        | 'chevronDown'
        | 'copy'
        | 'cross'
        | 'document'
        | 'edit'
        | 'facebook'
        | 'hamburger'
        | 'instagram'
        | 'link'
        | 'linkedin'
        | 'location'
        | 'lock'
        | 'logout'
        | 'mail'
        | 'message'
        | 'mobile'
        | 'next'
        | 'people'
        | 'person'
        | 'phone'
        | 'pin'
        | 'play'
        | 'previous'
        | 'rightArrow'
        | 'rotateLeft'
        | 'search'
        | 'share'
        | 'twitter';
}

interface IconMap {
    [key: string]: React.FC<SvgIconProps>;
}

const iconMap: IconMap = {
    add: RoundAdd,
    bin: Bin,
    calendar: Calendar,
    chevronDown: ChevronDown,
    copy: Copy,
    cross: Cross,
    document: Document,
    edit: Edit,
    facebook: Facebook,
    hamburger: Hamburger,
    instagram: Instagram,
    link: Link,
    linkedin: Linkedin,
    location: Location,
    lock: Lock,
    logout: LogOut,
    mail: Mail,
    message: Message,
    mobile: Mobile,
    next: Next,
    people: People,
    person: Person,
    phone: Phone,
    pin: Pin,
    previous: Previous,
    rightArrow: RightArrow,
    rotateLeft: RotateLeft,
    search: Search,
    share: Share,
    twitter: Twitter,
};

const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
    const IconComponent = iconMap[iconName];

    return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
