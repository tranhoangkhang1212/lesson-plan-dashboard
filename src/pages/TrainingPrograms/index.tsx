import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

import { TrainingPrograms as Icon } from '@/components/Icons';
import { StatusType } from '@/components/Status';
import TableDataList from '@/components/TableDataList';
import { DemoPackageResponseDto } from '@/interfaces/Response/DemoPackageResponseDto';
import { TrainingProgramsStatus } from '@/interfaces/Response/TrainingProgramsResponseDto';

import styles from './training-programs.module.scss';

const TrainingPrograms = () => {
    // const cols = useMemo<ColumnDef<DemoPackageResponseDto>[]>(
    //     () => [
    //         { header: 'ID', accessorKey: 'id' },
    //         { header: 'Name', accessorKey: 'name' },
    //         { header: 'Created At', accessorKey: 'createdAt' },
    //         { header: 'Created By', accessorKey: 'createdBy' },
    //         {
    //             header: 'Status',
    //             accessorKey: 'status',
    //             cell: (value) => (
    //                 <div className={styles.status}>
    //                     <Status type={getStatusType(value.row.original.status)} text={value.getValue() as string} />
    //                 </div>
    //             ),
    //         },
    //         { header: 'Rating', accessorKey: 'rating' },
    //     ],
    //     [],
    // );

    const cols = useMemo<ColumnDef<DemoPackageResponseDto>[]>(
        () => [
            { header: 'ID', accessorKey: 'id' },
            { header: 'Name', accessorKey: 'packageName' },
            { header: 'Branch', accessorKey: 'branch' },
            { header: 'Number of Days', accessorKey: 'numberOfDays' },
            { header: 'Number of Sessions', accessorKey: 'numberOfSessions' },
            { header: 'Price', accessorKey: 'packagePrice' },
            { header: 'Type', accessorKey: 'type' },
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
                <TableDataList cols={cols} path="/api/DemoPackage" />
            </div>
        </div>
    );
};

export default TrainingPrograms;
