import React from 'react';
import './StudentDetails.css';
import Select from 'react-select';

class StudentDetails extends React.Component{
    data = [
        {
          value: 1,
          label: "Domestic"
        },
        {
          value: 2,
          label: "International"
        }
    ];
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',  
            category:'',  
            dob: '',        
            fatherName:'',
            motherName:'',
            lastClassScore: '',   
            formErrors: {}    
        };
        this.initialState = this.state;  
    }  
    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
          studName: idToken.idToken.claims.name,
        //   currentUserName: idToken.idToken.claims.name
        });
      }
    handleFormValidation() {    
        const { studName, emailId, dob, gender, phoneNumber, city } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        } 
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    } 
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }  
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    } 
    
 
  // handle onChange event of the dropdown
  
    render(){
       
         
        const { studName  } = this.state;
        const { studNameErr, dobErr } = this.state.formErrors;    
        return( <div className="formDiv">    
        <h1>Welcome {studName}</h1>
        <h3 style={{ textAlign: "center"  }} >Onboarding Form </ h3>    
        <div>    
            <form onSubmit={this.handleSubmit}>    
                <div>    
                    <label htmlFor="studName">Name</label>    
                    <input type="text" name="studName"    
                        value={this.state.studName}    
                        onChange={this.handleChange}   
                        
                        placeholder="Your name.."    
                        className={studNameErr ? ' showError' : ''} />    
                    {studNameErr &&    
                        <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                    }    

                </div>    
                <div>    
                    <label htmlFor="Category">Category</label>    
                    <Select
        placeholder="Select Option"
        options={this.data}/> 
                     {/* <select placeholder='Select Category'>
                         <option value="Domestic">Domestic</option>
                         <option value="International">International</option>
                         
                     </select> */}
                        <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                      

                </div>
                <div>
                <label htmlFor="Documents">Documents</label>Domicile: 
                <input type='file' name='filename'></input>  Birth Certificate:
                <input type='file' name='filename'></input> Marksheets:
                <input type='file' name='filename'></input> Police Clearance:
                <input type='file' name='filename'></input>PassPort:
                <input type='file' name='filename'></input>Declaration:
                <input type='file' name='filename'></input>
                </div>
                 
                <div>    
                    <label htmlFor="text">Birth Date</label>    
                    <input type="date" name="dob"    
                        value={this.state.dob}    
                        onChange={this.handleChange}    
                        placeholder="DD/MM/YYYY.."    
                        className={dobErr ? ' showError' : ''} />    
                    {dobErr &&    
                        <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                    }    
                </div>  
                <div>    
                    <label htmlFor="FName">Father's Name</label>    
                    <input type="text" name="FName"    
                        value={this.state.fatherName}    
                        onChange={this.handleChange}   
                        
                        placeholder="Enter name.."    
                        className={studNameErr ? ' showError' : ''} />    
                   
                        <div style={{ color: "red", paddingBottom: 10 }}></div>    
                        

                </div>
                <div>    
                    <label htmlFor="MName">Mother's Name</label>    
                    <input type="text" name="MName"    
                        value={this.state.motherName}    
                        onChange={this.handleChange}   
                        
                        placeholder="Enter name.."    
                        className={studNameErr ? ' showError' : ''} />    
                   
                        <div style={{ color: "red", paddingBottom: 10 }}></div>    
                        

                </div>
                <div>
                <label htmlFor="score">Last Class Score</label> 
                <input type="number" name="MName"    
                        value={this.state.lastClassScore}    
                        onChange={this.handleChange}   
                        
                        placeholder="Enter name.."    
                        className={studNameErr ? ' showError' : ''} />    
                   
                        <div style={{ color: "red", paddingBottom: 10 }}></div>    
                        

                </div>
                   
                  
                   
                <input type="submit" value="Onboard" />    
            </form>    
        </div>    
    </div >    
)    
}    
}    
export default StudentDetails;