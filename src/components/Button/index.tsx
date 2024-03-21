import clsx from 'clsx';
import { FC } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
    className?: string;
    content: string;
}

const Button: FC<ButtonProps> = (props) => {
    const { className, content } = props;

    return <button className={clsx(styles.button, className)}>{content}</button>;
};

export default Button;
