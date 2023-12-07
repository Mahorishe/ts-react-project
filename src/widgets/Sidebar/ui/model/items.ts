import { AppRouterPaths } from 'app/providers/RouterApp';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileICon from 'shared/assets/icons/profile.svg';
import React from 'react';

export interface SidebarItemType {
    path: string,
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: AppRouterPaths.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: AppRouterPaths.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: AppRouterPaths.profile,
        text: 'Профиль',
        Icon: ProfileICon,
    },
];
