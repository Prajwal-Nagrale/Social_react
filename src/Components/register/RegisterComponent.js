import React, { Component } from "react";   
import './register.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
  render() {        

    return (    
      <div class="createAccount">
      <h3 >Sign Up</ h3> 
      <h6 >It's free and always wil be.</h6>   
        <Formik  
          initialValues={{name:"",email:"",password:""}}
          onSubmit={(values,{setSubmitting}) =>{
              setTimeout(()=>{
                  console.log("Logging in ", values)
                  setSubmitting(false);
              },500);
          }}
          validationSchema={Yup.object().shape({
              name: Yup.string()
               .required("Name is Required"),
              email: Yup.string()
               .required("Email Required")
               .matches((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/),"Enter a valid email address"),
              password: Yup.string()
               .required("Enter password")
               .min(6,"password should be 6 charectors")
               .matches(/(?=.*[0-9])/,"password should contain at least a number")
          })}
          

        > 
          {props => {
             const {
                 values,
                 touched,
                 errors,
                 isSubmitting,
                 handleChange,
                 handleBlur,
                 handleSubmit
             } = props;
             return (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <table class="center">
                      <tr> 
                      <td><label className="registerlabel" htmlFor="name">Name</label></td>
                      <td><input class="form-control" type="text" value={values.name} name="name" onChange={handleChange} 
                      onBlur={handleBlur} 
                      placeholder="Enter your Name" />
                       {errors.name && touched.name && (
                           <div style={{ color: "red"}}>{errors.name}</div>
                       )}
                       </td>
                       </tr>
                      <tr> 
                      <td><label className="registerlabel" htmlFor="email">Email</label></td>

                      <td><input  class="form-control" type="text" value={values.email} name="email" onChange={handleChange} 
                      onBlur={handleBlur} 
                      placeholder="Enter your email" />
                      {errors.email && touched.email && (
                           <div style={{ color: "red"}}>{errors.email}</div>
                       )}
                       </td>
                       </tr>
                       <tr>
                      <td><label className="registerlabel" htmlFor="password">Password</label></td>

                      <td><input class="form-control" type="password" value={values.password} name="password" onChange={handleChange} 
                      onBlur={handleBlur} 
                       placeholder="Create your password" />
                       {errors.password && touched.password && (
                           <div style={{ color: "red"}} >{errors.password}</div>
                       )}
                       </td>
                       </tr>
                      <tr><td></td>
                        <td><button className="registerbtn" type="submit" disabled={isSubmitting} >Create account</button></td></tr>
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