import React, { Component } from "react";   
import './register.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SocialService from '../../Services/Service';
import Swal from 'sweetalert2';

class RegistrationForm extends Component {    
  constructor(props) {    
      super(props);    
      this.state = {    
          Name: '',    
          Email: '',    
          Password: '',
          msg:''  
      };    
  
      this.initialState = this.state;    
  }      

  registerNewUser(){
    let req={
      userName:document.getElementById('name').value,
      email:document.getElementById('email').value,
      password:document.getElementById('password').value
    }
    SocialService.createNewUser(req).then((res)=>{
      this.setState({msg:res.data.message});
      this.successPopup();
    },(err)=>{
      this.errorPopup();
    })

  }

  successPopup(){
    Swal.fire(
      'Success',
      this.state.msg,
      'success'
    )
  }

  errorPopup(){
    Swal.fire(
      'Erorr',
      'Email Id alreay exists PLZ use Unique Email Id',
      'error'
    )
  }


  render() {        

    return (    
      <div class="createAccount">
      <h3 >Sign Up</ h3> 
      <h6 >It's free and always wil be.</h6>   
      <Formik  
          initialValues={{name:"",email:"",password:"",conformpassword:""}}
          onSubmit={(values,{setSubmitting}) =>{
              setTimeout(()=>{
                  console.log("Logging in ", values)
                  setSubmitting(false);
                  this.registerNewUser()
                  
              },500);
          }}
          validationSchema={Yup.object().shape({
              name: Yup.string()
               .required("Name is Required")
               .min(3,"Invalid name")
               .matches(/([^\s][a-zA-Z\s]).{1,}$/,"No spaces allowed"),
              email: Yup.string()
               .required("Email Required")
               .email('Email is invalid')
               .matches(""),
              password: Yup.string()
               .required("Enter password")
               .min(6,"password should be 6 charectors")
               .matches(/(?=.*[0-9])/,"password should contain at least a number"),
               conformpassword: Yup.string()
               .required("Re-enter password")
               .when("password", {is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                )
               })
          })}
          
 
        > 
          {props => {
             const {
                 values,
                 touched,
                 errors,
                 handleChange,
                 handleBlur,
                 handleSubmit
             } = props;
             return (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <table class="center">
                      <tr> 
                      <td><label className="registerlabel" htmlFor="name">Name</label></td>
                      <td><input class="form-control" id="name" type="text" value={values.name} name="name" onChange={handleChange} 
                      onBlur={handleBlur} 
                      placeholder="Enter your Name" />
                       {errors.name && touched.name && (
                           <div style={{ color: "red"}}>{errors.name}</div>
                       )}
                       </td>
                       </tr>
                      <tr> 
                      <td><label className="registerlabel" htmlFor="email">Email</label></td>

                      <td><input  class="form-control" id="email" type="text" value={values.email} name="email" onChange={handleChange} 
                      onBlur={handleBlur} 
                      placeholder="Enter your email" />
                      {errors.email && touched.email && (
                           <div style={{ color: "red"}}>{errors.email}</div>
                       )}
                       </td>
                       </tr>
                       <tr>
                      <td><label className="registerlabel" htmlFor="password">Password</label></td>

                      <td><input class="form-control" id="password" type="password" value={values.password} name="password" onChange={handleChange} 
                      onBlur={handleBlur} 
                       placeholder="Create your password" />
                       {errors.password && touched.password && (
                           <div style={{ color: "red"}} >{errors.password}</div>
                       )}
                       </td>

                       </tr>
                       <tr>
                         <td><label  className="registerlabel" htmlFor="password">Confirm</label></td>
                         <td><input class="form-control" id="password" type="password" value={values.conformpassword} name="conformpassword" onChange={handleChange} 
                      onBlur={handleBlur} 
                       placeholder="Re-enter your password" />
                       {errors.conformpassword && touched.conformpassword && (
                           <div style={{ color: "red"}} >{errors.conformpassword}</div>
                       )}
                       </td>
                       </tr>
                      <tr><td></td>
                        <td><button className="registerbtn" type="submit" disabled={!values.password || !values.name || !values.email || !values.conformpassword} >Create account</button></td></tr>
                  </table> 
                  </form>
             )
          }}
        </Formik>
    </div>     
    )    
}    
}    

export default RegistrationForm;