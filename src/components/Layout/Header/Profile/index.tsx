import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggle } from 'react-use';

import profile from '~/images/profile.png';

import Dropdown from '../Dropdown';
import styles from './profile.module.scss';

const Profile = () => {
    const [isShowDropDown, toggleShowDropdown] = useToggle(false);

    return (
        <div className={styles.container}>
            <img src={profile} alt="Avatar" />
            <div className={styles.info}>
                <div className={styles.content}>
                    <h3>Tran Khang</h3>
                    <span>Admin</span>
                </div>
            </div>
            <button className={styles.down} onClick={toggleShowDropdown}>
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <Dropdown isShow={isShowDropDown} />
        </div>
    );
};

export default Profile;
