import React  from 'react';
import { Component } from 'react';
import axios from 'axios';

import { MDBDataTableV5 } from 'mdbreact';
//import "./mdb.min.css"
import "../../../App.css";

import { useState } from "react";

class CandidatesTable extends Component {
  constructor(props){
    super(props)
    this.state={
      posts:[]
    }
  }

    componentDidMount()
  {
    //alert("a7ayt")
    axios.get('http://localhost:8000/user')
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
         const { cin, email, role, lastName,firstName, birthdate,phoneNumber,adress } = post //destructuring
         if (role==3) 
         return (
           
           
            <tr key={cin}>
               
               <td>{cin}</td>
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{email}</td>
               <td>{birthdate}</td>
               <td>{phoneNumber}</td>
               <td>{adress}</td>
               
            </tr>
            
         )
      })
   }

   
   render() {
    return (
      
       <div>
          <br/>
          <h1 id='title'>Candidates Table</h1>
          <br/>
          <br/>
          <br/>
          <table id='students'>
             <tbody>
             <tr>
             <th>cin</th>
               <th>firstName</th>
               <th>lastName</th>
               <th>email</th>
               <th>birthdate</th>
               <th>phoneNumber</th>
               <th>adress</th>
           </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )}
}
export default CandidatesTable









