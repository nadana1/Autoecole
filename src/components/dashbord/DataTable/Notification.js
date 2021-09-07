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

        var one_day = 1000 * 60 * 60 * 24
  
        // To set present_dates to two variables
        var present_date = new Date();
          
        // 0-11 is Month in JavaScript
       

        return this.state.posts.map((post, index) => {
         const { id, carcolor, registrationNb, brand,model, technical_visit_date,insurance_date } = post //destructuring
         var other_date = new Date (technical_visit_date);
         var insdate = new Date (insurance_date);
          
         // To Calculate next year's Christmas if passed already.
         
           
         // To Calculate the result in milliseconds and then converting into days
         var Result = ( present_date.getTime() - other_date.getTime()) / (one_day)+1;
         var Resultins = ( present_date.getTime() - insdate.getTime()) / (one_day)+1;
           
         // To remove the decimals from the (Result) resulting days value
         var Final_Result = Result.toFixed(0);
         var Final_Resultins = Resultins.toFixed(0);
         if ((Final_Result>=0 && Final_Result<=3) || (Final_Resultins>=0 && Final_Resultins<=3))
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
          <h1 id='title'>close dates</h1>
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









