import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';

import styles from './form.module.scss';

const LoginForm = () => {
    return (
        <>
            <div className={styles.form}>
                <Input className={styles.input} label="UserName" placeholder="Username" />
                <Input className={styles.input} type="password" label="Password" placeholder="Password" />
            </div>
            <div className={styles.submit}>
                <Button content="Sign in" className={styles.button} />
                <div className={styles.register}>
                    <span className={styles.text}>{`Don't have an account?`}</span>
                    <Link to={''} className={styles.link}>
                        Create Account
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
