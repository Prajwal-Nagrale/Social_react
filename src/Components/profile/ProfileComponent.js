import { Component } from "react";
import SocialService from '../../Services/Service';
import { Modal, Button } from "react-bootstrap";


class ProfileComponent extends Component{
    constructor(props){
      
      super(props);
      this.state={
        profile:[],
        lgShow:false,
        email:""
      }
    }

    setLgShow(val){
      this.setState({lgShow:val})
    }
    

    componentDidMount(){
      let email=JSON.parse(window.localStorage.getItem('user'));
      if(email){
        SocialService.getProfile(email).then((res)=>{
          this.setState({profile:res.data.message[0]})
          this.setState({email})
        })
      }
    }

    render(){
      let lgShow=this.state.lgShow;
      return(
        <div class="row">
            <div>
                  <Button onClick={() => this.setLgShow(true)}>Edit</Button>
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
                    <input type="text" className="form-control"  /><br/>
                    <label>City</label>
                    <input type="text" className="form-control" /><br/>
                    <label>State</label>
                    <input type="text" className="form-control"/><br/>
                    <label>Profession</label>
                    <input type="text" className="form-control"/><br/>
                     
                     <table>
                       <label>Gender</label>
                       <tr><td><input  type="radio" style={{marginLeft:"20px"}}  name="flexRadioDefault" id="flexRadioDefault1" /> Male</td>
        
                     
                         <td ><input  type="radio" style={{marginLeft:"10px"}}  name="flexRadioDefault" id="flexRadioDefault1" /> Female</td>
                       
                        
                         <td><input  type="radio" style={{marginLeft:"10px"}}  name="flexRadioDefault" id="flexRadioDefault1" /> Others</td>
                       
                         </tr>
                     </table>
                    
                    <label>Add Image</label>
                    <input type="file" className="from-control" />
                  
                  
                    </Modal.Body>
                    <Modal.Footer>
        <Button onClick={() => this.setLgShow(false)}>Close</Button>
      </Modal.Footer>
                  </Modal>
                </div>
             
          
         
            <div class="profile">
              <h1 class="page-header"></h1>
              <div class="row">
                <div class="col-md-4">
                  <img src={this.state.profile.img} class="img-thumbnail" />
                </div>
                <div class="col-md-8">
                  <ul>
                    <li><strong>Name:</strong>{this.state.profile.userName} </li>
                    <li><strong>Email Address: </strong>{this.state.profile.email} </li>
                    <li><strong>City: </strong>{this.state.profile.city} </li>
                    <li><strong>State: </strong>{this.state.profile.state} </li>
                    <li><strong>Gender:</strong>{this.state.profile.gender} </li>
                    <li><strong>Profession: </strong>{this.state.profile.profession} </li>
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