import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import { TrainingPrograms } from '@/components/Icons';
import PackageType from '@/components/PackageType';
import TableDataList from '@/components/TableDataList';
import { EPackageType } from '@/constants/packages';
import { DemoPackageResponseDto } from '@/interfaces/Response/DemoPackageResponseDto';
import { convertAmountToCurrency } from '@/utils/common';

import styles from './packages.module.scss';

const Packages = () => {
    const cols = useMemo<ColumnDef<DemoPackageResponseDto>[]>(
        () => [
            { header: 'Tiêu đề', accessorKey: 'packageName' },
            { header: 'Mô tả', accessorKey: 'descriptions' },
            { header: 'Số ngày tập', accessorKey: 'numberOfDays' },
            { header: 'Số buổi tập', accessorKey: 'numberOfSessions' },
            {
                header: 'Giá',
                accessorKey: 'packagePrice',
                cell: (value) => convertAmountToCurrency(value.getValue() as number),
            },
            {
                header: 'Loại',
                accessorKey: 'type',
                cell: (value) => (
                    <PackageType text={value.getValue() as string} type={value.getValue() as EPackageType} />
                ),
            },
            { header: 'Cơ sở', accessorKey: 'branch' },
        ],
        [],
    );

    const navigate = useNavigate();
    const handleCreatePackageClick = () => {
        navigate('/package-create');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <TrainingPrograms />
                    <span>Gói tập </span>
                </div>
                <div>
                    <Button
                        content={<span>Tạo gói tập</span>}
                        className={styles.button}
                        onClick={handleCreatePackageClick}
                    />
                </div>
            </div>
            <div className={styles.table}>
                <TableDataList cols={cols} path="/api/DemoPackage" />
            </div>
        </div>
    );
};

export default Packages;
