import styles from './loading.module.scss';

const MiniLoading = () => {
    return (
        <div className={styles['mini-loading']}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default MiniLoading;
