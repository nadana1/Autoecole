import React  from 'react';
import { Component } from 'react';
import axios from 'axios';

import { MDBDataTableV5 } from 'mdbreact';
import "./mdb.min.css"

import { useState } from "react";

class PostList extends Component {
  constructor(props){
    super(props)
    this.state={
      posts:[]
    }
  }

    componentDidMount()
  {
    //alert("a7ayt")
    axios.get('http://localhost:8000/car')
    .then(response => {
      console.log(response)
      this.setState({posts: response.data})
    })
    .catch(error => {
      console.log(error)
    })

  }



    renderTableData() {
      return this.state.posts.map((post, index) => {
         const { id, carcolor, registrationNb, brand,model } = post //destructuring
         return (
            <tr key={id}>
               
               <td>{carcolor}</td>
               <td>{registrationNb}</td>
               <td>{brand}</td>
               <td>{model}</td>
            </tr>
         )
      })
   }

   
   render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )}
















  

  

  





    /*
    const { posts }= this.state
    return(
      <div>List of posts
        {
          posts.length ?
          posts.map( post =><div key= {post.id}>{post.brand} {post.registrationNb} {post.model} {post.technical_visit_date} {post.insurance_date} </div>):null
        }
      </div>
    )*/
  }
export default PostList









/*import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import "./mdb.min.css"
import axios from "axios";
import { useState } from "react";
export default function CarTable() {
  let state = {
    cars: []
  }

  function componentDidMount() {
    alert ("ok");
    axios.get(`http://localhost:8000/car`)
      .then(res => {
        const cars = res.data;
        
        //this.setState({ cars });
        return cars;
      })
  }
 state= componentDidMount();
  console.log(state);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Brand',
        field: 'Brand',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Brand',
        },
      },
      {
        label: 'Plaque',
        field: 'plaque',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Brand',
        },
      },
      {
        label: 'Model',
        field: 'model',
        width: 270,
      },
      {
        label: 'Color',
        field: 'color',
        width: 200,
      },
      
      {
        label: 'Technical Visit Date',
        field: 'TechnicalVisitDate',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Insurance Date',
        field: 'insurancedate',
        sort: 'disabled',
        type: 'date',
        width: 100,
      },
    ],
    rows: [
     
      {
        Brand: 'Jonas Alexander',
        plaque: 'Jonas Alexander',
      model: 'Developer',
        color: 'San Francisco',
       
        TechnicalVisitDate: '2010/07/14',
       insurancedate: '$86',
      },
      {
        Brand: 'Shad Decker',
        plaque: 'Jonas Alexander',
      model: 'Regional Director',
        color: 'Edinburgh',
        
        TechnicalVisitDate: '2008/11/13',
       insurancedate: '$183',
      },
      {
        Brand: 'Michael Bruce',
        plaque: 'Jonas Alexander',
      model: 'Javascript Developer',
        color: 'Singapore',
       
        TechnicalVisitDate: '2011/06/27',
       insurancedate: '$183',
      },
      {
        Brand: 'Donna Snider',
        plaque: 'Jonas Alexander',
      model: 'Customer Support',
        color: 'New York',
        
        TechnicalVisitDate: '2011/01/25',
       insurancedate: '$112',
      },
    ],
  });

  return <MDBDataTableV5    hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}data={datatable} />;
}*/