import clsx from 'clsx';
import { FC } from 'react';

import styles from './header.module.scss';
import Profile from './Profile';
import Search from './Search';

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={clsx(styles.container, className)}>
            <Search />
            <Profile />
        </div>
    );
};

export default Header;
