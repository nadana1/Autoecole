import React from 'react'
import Table, { SelectColumnFilter, StatusPill } from './Table'  
import data from './Data.json'

const getData = () => {
  
  return [...data, ...data, ...data]
}

function CarsTable() {

  const columns = React.useMemo(() => [
    {
      Header: "Plaque",
      accessor: 'Plaque',
      
    },
    {
      Header: "Model",
      accessor: 'Model',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill,
    },
    {
      Header: "Technical visit date",
      accessor: 'Technical visit date',
      type :"date",
    },
    {
      Header: "Insurance date",
      accessor: 'Insurance date',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
   
    {
      header: '',
      id: 'click-me-button',
      render: ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>)
    }

  
], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Cars</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default CarsTable;
