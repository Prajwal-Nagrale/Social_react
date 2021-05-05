import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import GroupsComponent from '../groups/GroupsComponent';
import HomeComponent  from '../home/HomeComponent';
import MemberComponent from '../members/MemberComponent';
import PhotoComponent from '../photos/PhotoComponent';
import ProfileComponent from '../profile/ProfileComponent';
import RegisterComponent from '../register/RegisterComponent';
import SidebarComponent from '../sidebar/SidebarComponent';


class  NavbarComponent extends Component{
    render(){
        return(
            <Router>
                <div >
                <nav class="navbar navbar-default">
                    <div class="container">
                    <div class="navbar-header">
                        <button
                        type="button"
                        class="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                        >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                    </div>
                        <div id="navbar" class="collapse navbar-collapse">
                            <ul class="nav navbar-nav" >
                                <li className="nav-item"><Link class="nav-link " aria-current="page" to="/home">Home</Link></li>
                                <li className="nav-item"><Link class="nav-link" to="/members">Members</Link></li>
                                <li className="nav-item"><Link class="nav-link" to="/groups">Groups</Link></li>
                                <li className="nav-item"><Link class="nav-link" to="/photos">Photos</Link></li>
                                <li className="nav-item"><Link class="nav-link" to="/profile">Profile</Link></li>
                                <li className="nav-item"><Link class="nav-link" to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
    
                
               <div class="container">
               <div class="col-md-8">
                <Switch>
                    <Route path='/' exact component={HomeComponent} />
                    <Route path='/home' exact component={HomeComponent} />
                    <Route path='/members' component={MemberComponent} />
                    <Route path='/photos' component={PhotoComponent} />
                    <Route path='/profile' component={ProfileComponent} />
                    <Route path='/groups' component={GroupsComponent} />
                    <Route path='/register' component={RegisterComponent} />
                </Switch>
                </div>
    
                
                <div class="col-md-4">
                    <SidebarComponent></SidebarComponent>
                </div>
               </div>
    
            </Router>
        );
    }
}

export default  NavbarComponent;