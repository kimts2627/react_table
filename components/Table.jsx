import React, { useMemo } from 'react'
import { usePagination, useSortBy, useTable } from 'react-table'
import Pagination  from './Pagination'

const Table = ({
  data,
  columns,
  pageCount,
  pageSize,
  pageIndex,
  setPageCount,
  setPageIndex,
  setPageSize,
}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
    manualPagination: true,
    pageCount: pageCount,
    useControlledState: (state) => {
      return useMemo(
        () => ({
          ...state,
          pageIndex: pageIndex,
          pageSize: pageSize,
        }),
        [state, pageIndex, pageSize]
      )
    },
  }, usePagination)

  return (
  <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <Pagination 
      pageCount={pageCount}
      pageSize={pageSize}
      pageIndex={pageIndex}
      setPageCount={setPageCount}
      setPageIndex={setPageIndex}
      setPageSize={setPageSize}
    />
  </>
  )
}

export default Table;
