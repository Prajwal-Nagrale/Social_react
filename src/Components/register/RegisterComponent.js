import React, { Component } from "react";   
import './register.css'
class RegistrationForm extends Component {    
  constructor(props) {    
      super(props);    
      this.state = {    
          Name: '',    
          Email: '',    
          Password: '',     
          formErrors: {}    
      };    
  
      this.initialState = this.state;    
  }    
  
  handleFormValidation() {    
      const { Name, Email, Password} = this.state;    
      let formErrors = {};    
      let formIsValid = true;    
  

      if (!Name) {    
          formIsValid = false;    
          formErrors["NameErr"] = "Name is required.";    
      }
      else if (!(/^[^\s][a-zA-Z\s].{1,}$/.test(Name))){
        formIsValid = false;
        formErrors["NameErr"] = "No spaces are allowed"
      }
      if (!Email) {    
          formIsValid = false;    
          formErrors["EmailErr"] = "Email id is required.";    
      }    
      else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(Email))) {    
  
          formIsValid = false;    
          formErrors["EmailErr"] = "Invalid email id.";    
      } 
      if (!Password) {    
        formIsValid = false;    
        formErrors["PasswordErr"] = "Password is required.";    
      }  
      else if(!(/^[a-zA-Z0-9]{6,}/.test(Password))){
          formIsValid = false;
          formErrors["PasswordErr"]= "password must be 6  characters ";
      }
      this.setState({ formErrors: formErrors });    
      return formIsValid;    
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
  render() {    
    
    const { NameErr, EmailErr,PasswordErr } = this.state.formErrors;    

    return (    
        <div  class="createAccount">    
            <h3 >Sign Up</ h3> 
            <h6 >It's free and always wil be.</h6>   
                <form onSubmit={this.handleSubmit}>
                  <tabel class="center"> 
                    <tr>    
                        <td><label htmlFor="Name">Name</label></td>    
                        <td><input type="text" name="Name"    
                            value={this.state.Name}    
                            onChange={this.handleChange}    
                            placeholder="Your name.."    
                            className={NameErr ? ' showError' : ''} /></td>
                    </tr>
                    <tr>    
                        <td>{NameErr &&    
                            <div style={{ color: "red", paddingBottom: 10}}>{NameErr}</div>    
                        } </td>   
                    </tr>    
                    <tr>    
                      <td><label htmlFor="Email">Email Id</label></td>    
                      <td><input type="text" name="Email"    
                            value={this.state.Email}    
                            onChange={this.handleChange}    
                            placeholder="Your email id.."    
                            className={EmailErr ? ' showError' : ''} /></td>
                    </tr>   
                    <tr><td>{EmailErr &&    
                            <div style={{ color: "red", paddingBottom: 10}}>{EmailErr}</div>    
                        }
                    </td></tr>
                    <tr>    
                       <td><label htmlFor="Password">Password</label></td>    
                       <td><input type="password" name="Password"    
                            value={this.state.Password}    
                            onChange={this.handleChange}    
                            placeholder="Your Password.."    
                            className={PasswordErr ? ' showError' : ''} />
                          </td>
                    </tr>    
                    <tr>
                      <td>
                        {PasswordErr && <div style={{ color: "red", paddingBottom: 10 }}>{PasswordErr}</div>}
                      </td>
                    </tr>
                  </tabel>   
                  <p><button type="submit"  >Create Account</button></p>
                </form>    
          </div>      
    )    
}    
}    

export default RegistrationForm;