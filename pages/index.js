import Table from '../components/Table'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const reqTodoList = async () => {

  return await axios.get('api/todos')
}

const Home = () => {

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

  const [data, setData] = useState([]);

  const data1 = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  )

  useEffect(async () => {
    const res = await reqTodoList()
    const data = await res.data
    setData(data.data);
    
  }, [])

  return (
    <div className='w-192 h-full border shadow-lg p-5'>
      <h1 className='font-bold text-5xl'>Taesu Kim TODO</h1>
      <Table data={data} columns={columns} />
    </div>
  )
}

export default Home;
