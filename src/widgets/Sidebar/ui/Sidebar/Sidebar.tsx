import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwithcer';
import { Button } from 'shared/ui/Button'
import { ThemeButton } from "shared/ui/Button/ui/Button";

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
      <Button data-testid='sidebar-toggle' onClick={onToggle} theme={ThemeButton.CLEAR}>Toggle</Button>
      <div className={cls.switchers} >
        <ThemeSwitcher />
        <LangSwither />
      </div>
    </div>
  );
};