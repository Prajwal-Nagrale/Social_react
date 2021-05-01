import React , {Component} from 'react';
import SocialService from '../../Services/Service';

class MemberComponent extends Component{
    constructor(props){
      super(props);

      this.state={
         profiles:[],
         email:""
      }
    }


    componentDidMount(){
      SocialService.getAllProfiles().then((res)=>{
          this.setState({profiles:res.data.message})
          
      });
      
      let email=JSON.parse(window.localStorage.getItem('user'));
      if(email){
        this.setState({email})
      }
      
    }

    render(){
      if(this.state.email)
      return(
        
                <div class="members">
                  <h1 class="page-header">Members</h1>
                      {
                        this.state.profiles.map(
                          profile => 
                        
                                <div class="row member-row">
                                  <div class="col-md-3">
                                    <img src={profile.img} alt="user" class="img-thumbnail" />
                                    <div class="text-center">{profile.userName}</div>
                                  </div>
                                  <div class="col-md-3">
                                    <p>
                                      <a href="#" class="btn btn-success btn-block"
                                        ><i class="fa fa-user"></i> Add Friend
                                      </a>
                                    </p>
                                  </div>
                                  <div class="col-md-3">
                                    <p>
                                      <a href="#" class="btn btn-default btn-block"
                                        ><i class="fa fa-envelope"></i> Send Message
                                      </a>
                                    </p>
                                  </div>
                                  <div class="col-md-3">
                                    <p>
                                      <a href="#" class="btn btn-primary btn-block"
                                        ><i class="fa fa-edit"></i> View Profile
                                      </a>
                                    </p>s
                                  </div>
                                </div>           
                        )
                      }
                  
                </div>
    );
    return(
         <div>
           <h1 class="page-header">Not Logged in</h1>
         </div>         
      )
    }
}

export default MemberComponent;