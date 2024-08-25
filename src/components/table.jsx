import React from 'react';
import { useTable, usePagination } from 'react-table';
import { useNavigate } from 'react-router-dom';

const DataTable = ({ columns, data, initialPageSize = 10, rowClickPath }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: initialPageSize },
        },
        usePagination
    );

    const navigate = useNavigate();

    const handleRowClick = (id) => {
        if (rowClickPath) {
            navigate(`${rowClickPath}/${id}`);
        }
    };

    return (
        <div>
            <table {...getTableProps()} className="min-w-full bg-white rounded border-slate-300">
                <thead className="bg-rose-500">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="p-3 text-sm text-white"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                onClick={() => handleRowClick(row.values.id)}
                                className="cursor-pointer border-b"
                            >
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="text-sm text-center text-slate-700 font-extrabold p-3"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="px-3 py-1.5 bg-rose-500 text-xs text-white font-extrabold rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="px-3 py-1.5 bg-rose-500 text-xs text-white font-extrabold rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
                <div className='flex flex-row gap-1.5'>
                    <div className='text-xs font-extrabold'>
                        Page {' '} {pageIndex + 1} of {pageOptions.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
