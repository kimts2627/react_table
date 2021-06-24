import Table from '../components/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import qs from 'qs'

const Home = () => {
  const queryClient = useQueryClient();

  const [pageCount, setPageCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        sortable: true,
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: true,
      },
      {
        Header: "User",
        accessor: "userId",
        sortable: true,
      },
      {
        Header: "Completed",
        accessor: (d) => (d.completed ? "true" : "false"),
      },
    ],
    []
  )

  const { data } = useQuery(
    ['todos', {pageIndex, pageSize}], async () => {
      const currentPage = pageIndex + 1;
      
      const queries = qs.stringify({
        page: currentPage,
        per_page: pageSize,
      })

      const result = await axios.get(`api/todos?${queries}`);
      setPageCount(result.data.pagination.total_page)
      return result.data
    }, { keepPreviousData: true, staleTime: 5000 }
  )

  return (
    <div className='w-192 h-full border shadow-lg p-5'>
      <h1 className='font-bold text-5xl'>Taesu Kim TODO</h1>
      <Table
        data={data?.data || []}
        columns={columns}
        pageCount={pageCount}
        pageSize={pageSize}
        pageIndex={pageIndex}
        setPageCount={setPageCount}
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
      />
    </div>
  )
}

export default Home;
