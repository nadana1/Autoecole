import  React,{ useState } from "react";
import "./App.css";
import SignInSide from "./components/welcomepage/SignInSide"
import DashbordGestion from "./DashbordGestion"
import SmoothScroll from "smooth-scroll";
import Welcome from "./components/welcomepage/Welcome"
import SignUp from "./components/welcomepage/SignUp"
import Checkout from "./components/welcomepage/checkout/Checkout"
import PricingProfile from './components/Candidat/profile/PricingProfile'
import {Route,BrowserRouter, Switch} from "react-router-dom";
import CarsAdd from "./components/Cars/CarsAdd";
import Insurance from "./components/Cars/Dates/insurance";
import TechnicalVisit from "./components/Cars/Dates/technicalVisit";
import Profile from "./components/Candidat/profile/Profile";
import CandidatDashboard from "./components/Candidat/CandidatDashboard";
import CalendarC from "./components/Candidat/dashboard/CalendarC";
import Quiz from "./Quiz";
import SignUppage from "./SignUppage";
import PricingC from "./components/Candidat/dashboard/PricingC";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
   
   const[price,setPrice]=useState('')
   const[pack,setPack]=useState('')

  return (
    
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/SignUppage" component={SignUppage} />
      <Route exact path="/Quiz" component={Quiz} />
      <Route exact path="/PricingC" component={PricingC} />
      <Route exact path="/CalendarC" component={CalendarC} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/CarsAdd" component={CarsAdd} />
      <Route exact path="/Insurance" component={Insurance} />
      <Route exact path="/TechnicalVisit" component={TechnicalVisit} />
      <Route exact path="/CandidatDashboard" component={CandidatDashboard} />
      <Route exact path="/DashbordGestion" component={ DashbordGestion }/>
      <Route path="/Pricing" component={() => <PricingProfile setPack={setPack}setPrice={setPrice} authorized={true} />}/>
      <Route exact path="/Checkout" component={() => <Checkout price={price} authorized={true} />}/>
     
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