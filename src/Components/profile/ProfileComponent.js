import { Component } from "react";
import SocialService from '../../Services/Service';
import { Modal, Button } from "react-bootstrap";


class ProfileComponent extends Component{
    constructor(props){
      
      super(props);
      this.state={
        profile:[],
        lgShow:false,
        isLoggedIn:false,
        email:"",userName:"",img:"assets/img/user.png",city:"",pState:"",profession:"",gender:""

      }
    }

    setLgShow(val){
      this.setState({lgShow:val})
    }

    updateProfile(){
      SocialService.updateProfile(
        this.state.userName,
        this.state.email,
        this.state.city,
        this.state.pState,
        this.state.gender,
        this.state.profession,
        this.state.img
      ).then((res)=>{
        console.log(res.data)
      })
      this.setLgShow(false)
    }
    

    componentDidMount(){
      let email=JSON.parse(window.localStorage.getItem('user'));
      if(email){
        this.setState({isLoggedIn:true})
        SocialService.getProfile(email).then((res)=>{
          this.setState({userName:res.data.message[0].userName})
          this.setState({city:res.data.message[0].city})
          this.setState({pState:res.data.message[0].state})
          this.setState({gender:res.data.message[0].gender})
          this.setState({profession:res.data.message[0].profession})
          this.setState({img:res.data.message[0].img})
          this.setState({email})
          this.setLgShow(false)
        })
      }
    }

    activeGender(e){
        
    }

    onFileSelected(e){
      this.setState({img:'assets/img/'+e.target.files[0].name});
    }

    onGenderSelected(e){
      this.setState({gender:e.target.value});
    }

    render(){
      let lgShow=this.state.lgShow;
      return(
        <div class="row">
                  <Button onClick={() => this.setLgShow(true)}><i class="fa fa-pencil"></i> Edit Profile</Button>
                  <Modal
                    size="lg"
                    show={lgShow}
                    centered
                    animation={false}
                    onHide={() => this.setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Profile Details
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder={this.state.userName} 
                     value={this.state.userName} onChange={(e)=>{
                      this.setState({
                        userName:e.target.value
                      })
                  }}/><br/>
                    <label>City</label>
                    <input type="text" className="form-control" placeholder={this.state.city} value={this.state.city} onChange={(e)=>{
                      this.setState({
                        city:e.target.value
                      })
                  }} /><br/>
                    <label>State</label>
                    <input type="text" className="form-control" placeholder={this.state.pState} value={this.state.pState} onChange={(e)=>{
                      this.setState({
                        pState:e.target.value
                      })
                  }}/><br/>
                    <label>Profession</label>
                    <input type="text" className="form-control" placeholder={this.state.profession} value={this.state.profession} onChange={(e)=>{
                      this.setState({
                        profession:e.target.value
                      })
                  }}/><br/>
                     
                     <table>
                       <label>Gender</label>
                       <tr>
                         <td><input  type="radio" style={{marginLeft:"20px"}} onChange={(e)=>this.onGenderSelected(e)} value="Male"  name="gender"  /> Male</td>
                         <td ><input  type="radio" style={{marginLeft:"10px"}} onChange={(e)=>this.onGenderSelected(e)} value="Female"  name="gender"  /> Female</td>
                         <td><input  type="radio" style={{marginLeft:"10px"}} onChange={(e)=>this.onGenderSelected(e)} value="Others"  name="gender"  /> Others</td>
                         </tr>
                     </table>
                    
                    <label>Add Image</label>
                    <input type="file" className="from-control" onChange={(e)=>this.onFileSelected(e)} />
                  
                  
                    </Modal.Body>
                    <Modal.Footer>
        <Button onClick={() => this.componentDidMount()}>Close</Button>
        <Button onClick={()=>this.updateProfile()}>Save</Button>
      </Modal.Footer>
                  </Modal>

            <div class="profile">
              <h1 class="page-header">{this.state.userName}</h1>
              <div class="row">
                <div class="col-md-4">
                  <img src={this.state.img} class="img-thumbnail" />
                </div>
                <div class="col-md-8">
                  <ul>
                    <li><strong>Name: </strong>{this.state.userName} </li>
                    <li><strong>Email Address: </strong>{this.state.email} </li>
                    <li><strong>City: </strong>{this.state.city} </li>
                    <li><strong>State: </strong>{this.state.pState} </li>
                    <li><strong>Gender: </strong>{this.state.gender} </li>
                    <li><strong>Profession: </strong>{this.state.profession} </li>
                  </ul>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">Profile Wall</h3>
                    </div>
                    <div class="panel-body">
                      <form>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="Write on the wall"
                          ></textarea>
                        </div>

                        <button type="submit" class="btn btn-default">
                          Submit
                        </button>
                        <div class="pull-right">
                          <div class="btn-group">
                            <button type="button" class="btn btn-default">
                              <i class="fa fa-pencil"></i> Text
                            </button>
                            <button type="button" class="btn btn-default">
                              <i class="fa fa-file-image-o"></i> Image
                            </button>
                            <button type="button" class="btn btn-default">
                              <i class="fa fa-file-video-o"></i> Video
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
    }
}

export default ProfileComponent;