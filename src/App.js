import  React,{ useState } from "react";
import "./App.css";
import SignInSide from "./components/welcomepage/SignInSide"
import DashbordGestion from "./DashbordGestion"
import SmoothScroll from "smooth-scroll";
import Welcome from "./components/welcomepage/Welcome"
import SignUp from "./components/welcomepage/SignUp"
import CheckoutA from "./components/welcomepage/checkout/CheckoutA"
import PricingProfile from './components/Candidat/profile/PricingProfile'
import {Route,BrowserRouter, Switch} from "react-router-dom";
import CarsAdd from "./components/Cars/CarsAdd";
import Insurance from "./components/Cars/Dates/insurance";
import TechnicalVisit from "./components/Cars/Dates/technicalVisit";
import Quiz2 from "./Quiz2";
import CandidatDashboard from "./components/Candidat/CandidatDashboard";
import CalendarC from "./components/Candidat/dashboard/CalendarC";
import Quiz from "./Quiz";
import CarTable from "./components/dashbord/DataTable/CarTable";
import Checkout from "./components/Candidat/profile/checkout/Checkout"
import Seance from "./components/Task/Seance";
import AddUser from "./components/dashbord/addUser";
import PricingC from "./components/Candidat/dashboard/PricingC";
import UserTable from "./components/dashbord/DataTable/UserTable";
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
      <Route exact path="/UserTable" component={UserTable} />
      <Route exact path="/CarTable" component={CarTable} />
      <Route exact path="/Seance" component={Seance} />
      <Route exact path="/addUser" component={AddUser} />
      <Route exact path="/Quiz" component={Quiz} />
      <Route exact path="/PricingC" component={PricingC} />
      <Route exact path="/CalendarC" component={CalendarC} />
      <Route exact path="/Quiz2" component={Quiz2} />
      <Route exact path="/CarsAdd" component={CarsAdd} />
      <Route exact path="/Insurance" component={Insurance} />
      <Route exact path="/TechnicalVisit" component={TechnicalVisit} />
      <Route exact path="/CandidatDashboard" component={CandidatDashboard} />
      <Route exact path="/DashbordGestion" component={ DashbordGestion }/>
      <Route path="/Pricing" component={() => <PricingProfile setPack={setPack}setPrice={setPrice} authorized={true} />}/>
      <Route exact path="/CheckoutA" component={() => <CheckoutA />}/>
     
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