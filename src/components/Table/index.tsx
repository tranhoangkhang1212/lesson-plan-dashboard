import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ColumnDef, RowData } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table as CoreTableType } from '@tanstack/table-core';
import clsx from 'clsx';
import { useEffect } from 'react';

import { PaginationRequest } from '@/interfaces/Request/PaginationRequestDto';

import { Empty } from '../Icons';
import Loading from '../Loading/Loader';
import styles from './table.module.scss';

interface ReactTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    pageSize: number;
    pageCount: number;
    loading?: boolean;
    fetchData: (pagination: PaginationRequest) => void;
    onRowClick?: (data: T) => void;
    className?: string;
}

export const Table = <T extends object>(props: ReactTableProps<T>) => {
    const { data = [], columns = [], pageSize, pageCount = 0, loading, fetchData, onRowClick, className } = props;
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        pageCount,
        manualPagination: true,
    });

    useEffect(() => {
        if (!fetchData) {
            return;
        }
        fetchData({ page: table.getState().pagination.pageIndex + 1, pageSize });
    }, [table.getState().pagination.pageIndex, fetchData]);

    return (
        <>
            <div className={className}>
                <table className={styles.table}>
                    <thead className={styles.head}>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className={styles.header}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {loading ? (
                            <RowCenter>
                                <Loading />
                            </RowCenter>
                        ) : (
                            <>
                                {table.getRowModel().rows.length > 0 ? (
                                    <>
                                        {table.getRowModel().rows.map((row) => (
                                            <tr
                                                key={row.id}
                                                className={clsx(styles.row, {
                                                    [styles.click]: onRowClick,
                                                })}
                                                onClick={() => onRowClick && onRowClick(row.original)}
                                            >
                                                {row.getVisibleCells().map((cell) => (
                                                    <td className={styles.cell} key={cell.id}>
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <RowCenter>
                                        <Empty />
                                        <span>No data</span>
                                    </RowCenter>
                                )}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            {pageCount > 1 && <Pagination table={table} />}
        </>
    );
};

interface PaginationProps<T> {
    table: CoreTableType<T>;
}

const Pagination = <T extends RowData>(props: PaginationProps<T>) => {
    const { table } = props;

    const handlePreviousPage = () => {
        table.previousPage();
    };

    const handleNextPage = () => {
        table.nextPage();
    };

    return (
        <div className={styles.pagination}>
            <button
                className={clsx(styles.button, styles.previous, { [styles.disabled]: !table.getCanPreviousPage() })}
                onClick={handlePreviousPage}
                disabled={!table.getCanPreviousPage()}
            >
                <FontAwesomeIcon icon={faAngleLeft} className={clsx({ 'opacity-60': !table.getCanPreviousPage() })} />
                <span>Previous</span>
            </button>
            <button
                className={clsx(styles.button, styles.next, { [styles.disabled]: !table.getCanNextPage() })}
                onClick={handleNextPage}
                disabled={!table.getCanNextPage()}
            >
                <span>Next</span>
                <FontAwesomeIcon icon={faAngleRight} className={clsx({ 'opacity-60': !table.getCanNextPage() })} />
            </button>
        </div>
    );
};

interface RowCenterProps {
    children: JSX.Element | JSX.Element[];
}

const RowCenter: React.FC<RowCenterProps> = (props) => {
    return (
        <tr className="relative">
            <td className="absolute flex-col -translate-x-1/2 flex-center left-1/2 top-6">{props.children}</td>
        </tr>
    );
};
