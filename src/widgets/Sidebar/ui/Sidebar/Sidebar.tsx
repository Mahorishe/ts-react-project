import {useState} from 'react'
import { classNames } from 'shared/lib/classNames/className';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwithcer';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
      <div className={cls.switchers} >
        <ThemeSwitcher />
        <LangSwither />
      </div>
    </div>
  );
};