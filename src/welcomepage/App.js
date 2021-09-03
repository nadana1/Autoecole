import  React,{ useState } from "react";
import "../App.css";
import SignInSide from "./components/SignInSide"
import SmoothScroll from "smooth-scroll";
import Welcome from "./components/welcomepage/Welcome"
import SignUp from "./components/welcomepage/SignUp"
import Checkout from "./componen/welcomepage/checkout/Checkout"
import {Route,BrowserRouter, Switch} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const[price,setPrice]=useState('')

  return (

    
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/SignUp" component={() => <SignUp price={price} authorized={true} />}/>
      <Route exact path="/" component={() => <Welcome setPrice={setPrice} authorized={true} />}/>
      <Route exact path="/SignIn" component={() => <SignInSide authorized={true} />}/>
      <Route exact path="/Checkout" component={() => <Checkout setPrice={setPrice}  authorized={true} />}/>
    </Switch>
   

      </BrowserRouter>
      
    
   
  </div>
  
    
  );
};

export default App;
