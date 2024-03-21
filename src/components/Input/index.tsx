import clsx from 'clsx';
import { FC, HTMLInputTypeAttribute, HTMLProps, useId } from 'react';

import styles from './input.module.scss';

interface IInputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    error?: string;
    required?: boolean;
}

const Input: FC<IInputProps> = (props) => {
    const { className, label, type } = props;

    const id = useId();
    return (
        <div className={clsx(styles.container, className)}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input {...props} id={id} className={styles.input} type={type} />
        </div>
    );
};

export default Input;
