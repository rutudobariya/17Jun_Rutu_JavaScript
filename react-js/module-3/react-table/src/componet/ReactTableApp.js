import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
export default function ReactTableApp()
{
    // create react-tables data
    const data=[
        {
        id:1,
        name:'brijesh',
        age:32,
        salary:100
      },
      {
        id:2,
        name:'Jatin',
        age:22,
        salary:1000
      },
      {
        id:4,
        name:'rutu',
        age:24,
        salary:15000
      },

      {
        id:5,
        name:'Pooja',
        age:25,
        salary:18000
      },
      {
        id:6,
        name:'bhargav',
        age:24,
        salary:19500
      },

      {
        id:7,
        name:'brijesh',
        age:32,
        salary:100
      },
      {
        id:8,
        name:'Jatin',
        age:22,
        salary:1000
      },
      {
        id:9,
        name:'rutu',
        age:24,
        salary:15000
      },

      {
        id:10,
        name:'Pooja',
        age:25,
        salary:18000
      },
      {
        id:11,
        name:'bhargav',
        age:24,
        salary:19500
      },

]

    // add a columns of tables 
    const columns=[
        {
         Header:'Id',
         accessor:'id'
       },
       {
        Header:'Name',
        accessor:'name'
      },
      {
        Header:'Age',
        accessor:'age'
      },

      {
        Header:'salary',
        accessor:'salary'
      },

]


  return (
    <div>
     <div className='tables-app'>
     <h2 align='center'>Employee Informations</h2>
     <hr /> 
     {/* call a react tables data */}
     <ReactTable data={data} columns={columns} defaultPageSize={2} pageSizeOptions={[2,4,6,8]}></ReactTable> 
     </div>
    </div>
  )
}
