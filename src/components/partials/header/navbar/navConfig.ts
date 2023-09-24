import type { AnchorHTMLAttributes } from 'react';

type NavConfigItem = {
    id: number;
    title: string;
    href: string;
    target: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    backgroundColor?: string; 
};

export const navConfig: NavConfigItem[] = [
    {
        id: 1,
        title: 'Projects',
        href: '/404',
        target: '_blank',
    },
    {
        id: 2,
        title: 'Services',
        href: '/404',
        target: '_blank',
    },
    {
        id: 3,
        title: 'About us',
        href: '/404',
        target: '_blank',
    },
    {
        id: 4,
        title: 'Contact us',
        href: '/404',
        target: '_blank',
    },
    {
        id: 5,
        title: 'Start a project',
        href: '/404',
        target: '_blank',
        backgroundColor: 'secondary.main',
    },
];
