import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import "./mdb.min.css"
export default function UserTable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'firstName',
        field: 'firstName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'firstName',
        },
      },
      {
        label: 'lastName',
        field: 'lasttName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'firstName',
        },
      },
      {
        label: 'cin',
        field: 'cin',
        width: 270,
      },
      {
        label: 'username',
        field: 'username',
        width: 200,
      },
      {
        label: 'phone',
        field: 'phone',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'BirthDate',
        field: 'BirthDate',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Payement',
        field: 'Payement',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
     
      {
        firstName: 'Jonas Alexander',
        lasttName: 'Jonas Alexander',
        cin: 'Developer',
        username: 'San Francisco',
        phone: '30',
        BirthDate: '2010/07/14',
        Payement: '$86',
      },
      {
        firstName: 'Shad Decker',
        lasttName: 'Jonas Alexander',
        cin: 'Regional Director',
        username: 'Edinburgh',
        phone: '51',
        BirthDate: '2008/11/13',
        Payement: '$183',
      },
      {
        firstName: 'Michael Bruce',
        lasttName: 'Jonas Alexander',
        cin: 'Javascript Developer',
        username: 'Singapore',
        phone: '29',
        BirthDate: '2011/06/27',
        Payement: '$183',
      },
      {
        firstName: 'Donna Snider',
        lasttName: 'Jonas Alexander',
        cin: 'Customer Support',
        username: 'New York',
        phone: '27',
        BirthDate: '2011/01/25',
        Payement: '$112',
      },
    ],
  });

  return <MDBDataTableV5    hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}data={datatable} />;
}