import { Component } from "react";
import SocialService from '../../Services/Service';
import './login.css';
import * as Yup from "yup";
import { Formik } from 'formik';

class LoginComponent extends Component{
      constructor(props){
        super(props);
        this.state={
          isLoggedIn:false,
          email:"",
        }
      }

    componentDidMount(){
      if(window.localStorage.getItem('token')){
        this.setState({isLoggedIn:true})
      }
    }

    login(){
      let req={
      email:document.getElementById('exampleInputEmail3').value,
      password:document.getElementById('exampleInputPassword3').value
      }
      SocialService.login(req).then((res)=>{
        this.setState({email:req.email})
        this.setState({isLoggedIn:true})
        window.localStorage.setItem('token',JSON.stringify(res.data.token));
        window.localStorage.setItem('user',JSON.stringify(req.email));
        window.location.reload();
      }).catch((error)=>{
        console.log(error.message);
      })
    }

    signout(e){
      e.preventDefault();
      this.setState({isLoggedIn:false})
      window.localStorage.clear();
      window.location.reload();
    }

    render(){
      if(this.state.isLoggedIn){
        return(
          <div className="element">
              <a onClick={(e)=>this.signout(e)}>SignOut</a>
          </div>
        )
      }else{
        return (
          <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
              this.login();
            }, 500);
          }}

          
         
          validationSchema={Yup.object().shape({
            email: Yup.string()
            .required("Email Required")
            .matches((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/),"enter a valid email address"),
            password: Yup.string()
            .required("Enter password")
            .min(6,"password should be 6 charectors")
            .matches(/(?=.*[0-9])/,"password should contain at least a number"),
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
              <form className="form-inline" autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                  <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  id="exampleInputEmail3"
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red"}}>{errors.email}</div>
                )}
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                <input
                  name="password"
                  type="password"
                  style={{ color: "black"}}
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  id="exampleInputPassword3"
                />
                {errors.password && touched.password && (
                  <div style={{ color: "red"}} >{errors.password}</div>
                )}
          </div>
          <button type="submit" className="btn btn-default" disabled={!values.password ||!values.email}>Sign in</button><br />
          <div className="checkbox">
            <label> <input type="checkbox" /> Remember me </label>
          </div>
              </form>
            );
          }}
        </Formik>
  );
      }
    }
}


export default LoginComponent;