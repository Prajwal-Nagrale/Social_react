import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from 'react-router-dom';
import GroupsComponent from '../groups/GroupsComponent';
import HomeComponent  from '../home/HomeComponent';
import MemberComponent from '../members/MemberComponent';
import PhotoComponent from '../photos/PhotoComponent';
import ProfileComponent from '../profile/ProfileComponent';
import RegisterComponent from '../register/RegisterComponent';
import SidebarComponent from '../sidebar/SidebarComponent';


class  NavbarComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            verify:false
        }
    }

    componentDidMount(){
        const token=localStorage.getItem('token');
        if(token){
            this.setState({verify:true})
        }
    }

    render(){
        return(
            <Router>
                <div >
                <nav className="navbar navbar-default">
                    <div className="container">
                    <div className="navbar-header">
                        <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                        >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                    </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav" >
                                <li className="nav-item"><Link className="nav-link " to="/home">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/groups">Groups</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/photos">Photos</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                               { 
                               this.state.verify===false?
                               <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>:null
                               }
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
    
                
               <div className="container">
               <div className="col-md-8">
                <Switch>
                    <Route exact path='/'  component={HomeComponent} />
                    <Route path='/home'>
                        {
                            this.state.verify===true?
                            <HomeComponent />:<Redirect to="/register" />
                        }
                    </Route> 
                    <Route path='/members'>
                        {
                            this.state.verify===true?
                            <MemberComponent />:<Redirect to="/register" />
                        }
                    </Route>
                    <Route  path='/photos'>
                        {
                            this.state.verify===true?
                            <PhotoComponent />:<Redirect to="/register" />
                        }
                    </Route>
                    <Route path='/profile' >
                        {
                            this.state.verify===true?
                            <ProfileComponent />:<Redirect to="/register" />
                        }
                    </Route>
                    <Route path='/groups' >
                        {
                            this.state.verify===true?
                            <GroupsComponent />:<Redirect to="/register" />
                        }
                    </Route>
                    <Route path='/register'>
                        {
                            this.state.verify===false?
                            <RegisterComponent />:<Redirect to="/home" />
                        }
                    </Route>
                </Switch>
                </div>
    
                
                <div className="col-md-4">
                    <SidebarComponent></SidebarComponent>
                </div>
               </div>
    
            </Router>
        );
    }
}

export default  NavbarComponent;