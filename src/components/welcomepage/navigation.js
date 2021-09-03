import React from 'react'
import { useHistory } from "react-router-dom";
export const Navigation = (props) => {
  let history= useHistory();
  return (
    
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    
    <div className='container'>
    
         
      <div className='row'>
    <div className="col-xs-3 col-md-3 col-xl-3">  
    <a href="#" className='page-scroll'>
            <img id="logo-img"    src="/img/logoE.png"alt=""></img>
     </a></div>
     <div className="col-xs-9 col-md-9 col-xl-9">
        <button
          type='button'
          className='navbar-toggle collapsed'
          data-toggle='collapse'
          data-target='#bs-example-navbar-collapse-1'
        >
          {' '}
          <span className='sr-only'>Toggle navigation</span>{' '}
          <span className='icon-bar'></span>{' '}
          <span className='icon-bar'></span>{' '}
          <span className='icon-bar'></span>{' '}
        </button>
      
       
        
    </div>
 
      <div
        className='collapse navbar-collapse'
        id='bs-example-navbar-collapse-1'
      >
        <ul className='nav navbar-nav navbar-right'>
         
     
           
          
          <li>
            <a href='#features' className='page-scroll'>
              Features
            </a>
          </li>
          <li>
            <a href='#about' className='page-scroll'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='page-scroll'>
              Services
            </a>
          </li>
          <li>
            <a href='#portfolio' className='page-scroll'>
              OUR APPLICATION
            </a>
          </li>
          <li>
            <a href='#pricing' className='page-scroll'>
              PRICING
            </a>
          </li>
          <li>
            <a href='#testimonials' className='page-scroll'>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#contact' className='page-scroll'>
              Contact
            </a>
          </li>
          <li>
            <a href='/SignUp' className='page-scroll'>
            <button  className ="btn-custom-sc"  onClick={() => {history.push("/SignUp")}}>Sign Up</button>
            </a>
          </li>
          <li>
            <a href='/SignIn' className='page-scroll'>
            <button  className ="btn-custom-sc" onClick={() => {history.push("/SignIn")}}>Sign In</button>
            </a>
          </li>
      
        </ul>
      </div>
      </div> 
      
    </div>
  </nav>
    
    
  )
}
 
