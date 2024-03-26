import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { TrainingPrograms as Icon } from '@/components/Icons';
import Status, { StatusType } from '@/components/Status';
import { Table } from '@/components/Table';
import { TrainingProgramsResponseDto, TrainingProgramsStatus } from '@/interfaces/Response/TrainingProgramsResponseDto';
import { trainingPrograms } from '@/mocks/training-programs';

import styles from './training-programs.module.scss';

const TrainingPrograms = () => {
    const cols = useMemo<ColumnDef<TrainingProgramsResponseDto>[]>(
        () => [
            { header: 'ID', accessorKey: 'id' },
            { header: 'Name', accessorKey: 'name' },
            { header: 'Created At', accessorKey: 'createdAt' },
            { header: 'Created By', accessorKey: 'createdBy' },
            {
                header: 'Status',
                accessorKey: 'status',
                cell: (value) => (
                    <div className={styles.status}>
                        <Status type={getStatusType(value.row.original.status)} text={value.getValue() as string} />
                    </div>
                ),
            },
            { header: 'Rating', accessorKey: 'rating' },
        ],
        [],
    );

    const getStatusType = (status: TrainingProgramsStatus): StatusType => {
        if (status === 'Processing') {
            return 'processing';
        }
        if (status === 'Rejected') {
            return 'canceled';
        }
        return 'success';
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Icon />
                <span>Training programs</span>
            </div>
            <div className={styles.table}>
                <Table data={trainingPrograms} columns={cols} pageSize={10} pageCount={50} fetchData={() => {}} />
            </div>
        </div>
    );
};

export default TrainingPrograms;
