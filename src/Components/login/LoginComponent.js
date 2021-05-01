import { Component } from "react";
import SocialService from '../../Services/Service';
import './login.css';

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

    login(e){
      e.preventDefault();
      let req={
      email:document.getElementById('exampleInputEmail3').value,
      password:document.getElementById('exampleInputPassword3').value
      }
      SocialService.login(req).then((res)=>{
        console.log(res.data);
        this.setState({email:req.email})
        this.setState({isLoggedIn:true})
        window.localStorage.setItem('token',JSON.stringify(res.data.token));
        window.localStorage.setItem('user',JSON.stringify(req.email));
        
      }).catch((error)=>{
        console.log(error.message);
      })
    }

    signout(e){
      e.preventDefault();
      this.setState({isLoggedIn:false})
      window.localStorage.clear();
    }

    render(){
      if(this.state.isLoggedIn){
        return(
          <div class="element">
              <a onClick={(e)=>this.signout(e)}>SignOut</a>
          </div>
        )
      }else{
        return (
          <form class="form-inline"onSubmit={(e)=>this.login(e)} >
        <div class="form-group">
          <label class="sr-only" for="exampleInputEmail3"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail3"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label class="sr-only" for="exampleInputPassword3">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword3"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" class="btn btn-default" >Sign in</button><br></br>
        <div class="checkbox">
          <label> <input type="checkbox" /> Remember me </label>
        </div>
      </form>
  );
      }
    }
}


export default LoginComponent;