import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profile from '~/images/profile.png';

import styles from './profile.module.scss';

const Profile = () => {
    return (
        <div className={styles.container}>
            <img src={profile} alt="Avatar" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3>Tran Khang</h3>
                    <span>Admin</span>
                </div>
            </div>
            <div className={styles.down}>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    );
};

export default Profile;
