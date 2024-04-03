import styles from './training-program.module.scss';

const TrainingProgramDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Training Program</span>
                <h2>Phác đồ tập luyện E1 Cardio Workout</h2>
            </div>
            <div>
                <p>
                    <span>31</span>days (97 hours)
                </p>
            </div>
        </div>
    );
};

export default TrainingProgramDetail;
