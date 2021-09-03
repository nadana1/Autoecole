import { Dashboard } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Dashbord from './components/dashbord/Dashbord';
import { Redirect } from "react-router-dom";

function DashbordGestion({ authorized }) {
    
      
        return (
            <div>
                
                <Dashbord />
            </div>
        );
}
export default DashbordGestion ;
