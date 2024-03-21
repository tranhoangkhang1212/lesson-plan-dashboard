import { FC, ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
