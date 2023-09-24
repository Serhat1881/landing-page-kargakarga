import type { SvgIconProps } from '@mui/material';
import React from 'react';

import {
    Bin,
    Brochure,
    Calendar,
    Camera,
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
    Mortarboard,
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
    Social,
    Twitter,
    Youtube,
    Plus,
    Star
} from '@/components/icons';

export interface VIconProps extends SvgIconProps {
    iconName:
        | 'add'
        | 'bin'
        | 'brochure'
        | 'calendar'
        | 'camera'
        | 'chevronDown'
        | 'copy'
        | 'cross'
        | 'document'
        | 'edit'
        | 'facebook'
        | 'instagram'
        | 'hamburger'
        | 'link'
        | 'linkedin'
        | 'location'
        | 'lock'
        | 'logout'
        | 'mail'
        | 'message'
        | 'mobile'
        | 'mortarboard'
        | 'next'
        | 'people'
        | 'person'
        | 'phone'
        | 'pin'
        | 'previous'
        | 'rightArrow'
        | 'rotateLeft'
        | 'search'
        | 'share'
        | 'social'
        | 'twitter'
        | 'youtube'
        | 'plus'
        | 'Star';
}

interface IconMap {
    [key: string]: React.FC<SvgIconProps>;
}

const iconMap: IconMap = {
    add: RoundAdd,
    bin: Bin,
    brochure: Brochure,
    calendar: Calendar,
    camera: Camera,
    chevronDown: ChevronDown,
    copy: Copy,
    cross: Cross,
    document: Document,
    edit: Edit,
    facebook: Facebook,
    instagram: Instagram,
    hamburger: Hamburger,
    link: Link,
    linkedin: Linkedin,
    location: Location,
    lock: Lock,
    logout: LogOut,
    mail: Mail,
    message: Message,
    mobile: Mobile,
    mortarboard: Mortarboard,
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
    social: Social,
    twitter: Twitter,
    youtube: Youtube,
    plus: Plus,
    Star: Star
};

const VIcon: React.FC<VIconProps> = ({ iconName, ...props }) => {
    const IconComponent = iconMap[iconName];

    return IconComponent ? <IconComponent {...props} /> : null;
};

export default VIcon;
