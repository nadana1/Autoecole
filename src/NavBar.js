import React from 'react'
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div>
            <ul>
            <li><Link to="./SignUppage">Sign Up</Link></li>
            <li><Link to="./SignInpage">Sign In</Link></li>
            </ul>  
       </div>
    );
}
export default NavBar;