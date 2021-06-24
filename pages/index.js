import Table from '../components/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const Home = () => {
  const queryClient = useQueryClient();
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

  const { data, isLoading, error } = useQuery(
    'todos', async () => {
      const result = await axios.get('api/todos');
      console.log(result)
      return result.data
    }, { keepPreviousData: true, staleTime: 5000 }
  )

  return (
    <div className='w-192 h-full border shadow-lg p-5'>
      <h1 className='font-bold text-5xl'>Taesu Kim TODO</h1>
      <Table data={data?.data || []} columns={columns} />
    </div>
  )
}

export default Home;
