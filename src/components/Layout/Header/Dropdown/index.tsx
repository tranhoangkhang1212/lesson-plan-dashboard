import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './drop-down.module.scss';

interface DropdownProps {
    isShow: boolean;
}

const variants = {
    open: { opacity: 1, height: '88px' },
    closed: { opacity: 0, height: 0 },
};

const Dropdown: FC<DropdownProps> = ({ isShow }) => {
    return (
        <motion.div className={styles.container} animate={isShow ? 'open' : 'closed'} variants={variants}>
            <span>Thông tin</span>
            <span>Đăng xuất</span>
        </motion.div>
    );
};

export default Dropdown;
