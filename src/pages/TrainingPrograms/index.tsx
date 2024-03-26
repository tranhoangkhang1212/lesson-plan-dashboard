import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { TrainingPrograms as Icon } from '@/components/Icons';
import { Table } from '@/components/Table';
import { TrainingProgramsResponseDto } from '@/interfaces/Response/TrainingProgramsResponseDto';

import styles from './training-programs.module.scss';

const response: TrainingProgramsResponseDto[] = [
    {
        id: 0,
        name: '1',
        createdAt: new Date(),
        createdBy: '',
        duration: 0,
        status: '',
        rating: 0,
    },
    {
        id: 1,
        name: '2',
        createdAt: new Date(),
        createdBy: '',
        duration: 0,
        status: '',
        rating: 0,
    },
    {
        id: 2,
        name: '3',
        createdAt: new Date(),
        createdBy: '',
        duration: 0,
        status: '',
        rating: 0,
    },
];
const TrainingPrograms = () => {
    const cols = useMemo<ColumnDef<TrainingProgramsResponseDto>[]>(
        () => [
            { header: 'ID', accessorKey: 'id' },
            { header: 'Name', accessorKey: 'name' },
            { header: 'Created At', accessorKey: 'createdAt' },
            { header: 'Created By', accessorKey: 'createdBy' },
            { header: 'Status', accessorKey: 'status' },
            { header: 'Rating', accessorKey: 'rating' },
        ],
        [],
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Icon />
                <span>Training programs</span>
            </div>
            <div className={styles.table}>
                <Table data={response} columns={cols} pageSize={10} pageCount={50} fetchData={() => {}} />
            </div>
        </div>
    );
};

export default TrainingPrograms;
