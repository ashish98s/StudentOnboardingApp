import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import  StudentDetails  from "./components/StudentDetails";
import Dashboard  from "./components/dashboard";
import Loginform from './components/Loginform';

function App() {
  // onAuthRequired({ history }) {
  //   history.push('/login');
  // }
  const adminUser={
    name: "ashish",
    password:"ashishs"
  }
  const [user,setUser]=useState({name:""});
  const [error,setError]=useState("");
  const Login=details=>{
    console.log(details);
    if(details.name==adminUser.name && details.password==adminUser.password){
      console.log("loggedin");
      setUser({
        name:details.name,
       
        
      });
    }
    else{
      console.log("details do not match");
    }
  }
  const Logout=()=>{
    console.log("Logout");
    setUser({
      name:""
    });
  }
  return (
   
   
    <div className="App">
     

       <BrowserRouter>
       <div>
     
       
      <div className="content">
      <Switch>
             <Route path='/' exact={true} component={Loginform}/>
              <Route path='/listStudents' exact={true} component={StudentDetails}/>


              {/* {(user.name!="")?(
              <Route path="/dashboard" component={Dashboard} />
              ):(
                // <Loginform Login={Login} error={error}/>
                <Route exact path="/login" component={Loginform} />
              )
} */}
            </Switch>
      </div>
     
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
