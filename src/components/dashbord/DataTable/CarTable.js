import React  from 'react';
import { Component } from 'react';
import axios from 'axios';

import { MDBDataTableV5 } from 'mdbreact';
//import "./mdb.min.css"
import "../../../App.css";

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
         const { id, carcolor, registrationNb, brand,model, technical_visit_date,insurance_date } = post //destructuring
         return (
           
           
            <tr key={id}>
               
               <td>{carcolor}</td>
               <td>{registrationNb}</td>
               <td>{brand}</td>
               <td>{model}</td>
               <td>{technical_visit_date}</td>
               <td>{insurance_date}</td>
               
            </tr>
            
         )
      })
   }

   
   render() {
    return (
      
       <div>
          <br/>
          <h1 id='title'>Cars Table</h1>
          <br/>
          <br/>
          <br/>
          <table id='students'>
             <tbody>
             <tr>
             <th>carcolor</th>
               <th>registrationNb</th>
               <th>brand</th>
               <th>model</th>
               <th>technical_visit_date</th>
               <th>insurance_date</th>
           </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )}
}
export default PostList









