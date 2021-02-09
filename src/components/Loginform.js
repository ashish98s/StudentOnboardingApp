import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
export default withAuth(
class Loginform extends React.Component {
  
    state = { authenticated: null 
     
    
    };
    //  handleChange=(e) =>{
    //   const {name,value}=e.target
    //   this.setState({[name]:value})
    //  }
    checkAuthentication = async () => {
      // const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };
    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }
   handleSubmit=(e) =>{
         e.preventDefault();
        //  Login(details);
     }
     login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };
    render(){
      // const[details,setDetails]=useState({name:"",password:""});
      this.state={details:{name:"",password:""}}

      // if (this.state.authenticated === null) return null;
      // const mainContent=this.state.authenticated ?(
       
        return(
          <form onSubmit={this.handleSubmit}>
          <div id="loginform">
           
            <h2 id="headerTitle">Login School Admin</h2>
            
            <div>
          
          <div class="row">
        <label>Username</label>
        <input  type="text" placeholder="Enter Username" onChange={e => this.setState({...this.state.details,name:e.target.value})} value={this.state.details.name} required/>
      </div>  
  
          <div class="row">
        <label>Password</label>
        <input  type="password" placeholder="Enter Password" onChange={e =>  this.setState({...this.state.details,password:e.target.value})} value={this.state.details.password} required/>
      </div>  
      
      <div id="button" class="row">
        <button onSubmit={()=> this.handleSubmit()}>Login</button>
      </div>
      </div>
      
        
        
            <OtherMethods />
            </div>
            
            </form>
            
        );
      
        }
      }
);
  
    
    
    const OtherMethods = props => (
      <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
          <Facebook />
          <Twitter />
          <Google />
        </div>
      </div>
    );
    
    const Facebook = props => (
      <a href="#" id="facebookIcon"></a>
    );
    
    const Twitter = props => (
      <a href="#" id="twitterIcon"></a>
    );
    
    const Google = props => (
      <a href="#" id="googleIcon"></a>
    );

// export default Loginform;    