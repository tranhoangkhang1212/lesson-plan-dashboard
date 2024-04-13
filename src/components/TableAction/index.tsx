import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import styles from './table-action.module.scss';

interface TableActionProps {
    onViewClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const TableAction: FC<TableActionProps> = ({ onViewClick, onEditClick, onDeleteClick }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faEye} className={styles.view} onClick={onViewClick} />
            <span>|</span>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={onEditClick} />
            <span>|</span>
            <FontAwesomeIcon icon={faTrashCan} className={styles.delete} onClick={onDeleteClick} />
        </div>
    );
};

export default TableAction;
