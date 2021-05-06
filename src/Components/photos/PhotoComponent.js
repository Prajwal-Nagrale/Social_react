import { Component } from "react";
import SocialService from '../../Services/Service';
import { Modal, Button } from "react-bootstrap";
import './photo.css';

class PhotoComponent extends Component{
  constructor(props){
      
    super(props);
    this.state={
      img:"",
      email:"",
      photos:[],
      lgShow:false,
      disabled:true,
      modalimg:"",
    }
  }

  setLgShow(val){
    this.setState({lgShow:val})
  }

  componentDidUpdate(){
    let email=JSON.parse(window.localStorage.getItem('user'));
      if(email){
        SocialService.getProfile(email).then((res)=>{
          this.setState({photos:res.data.message[0].photos})
        })
      }
  }

  componentDidMount(){
    let email=JSON.parse(window.localStorage.getItem('user'));
      if(email){
        this.setState({email});
        SocialService.getProfile(email).then((res)=>{
          this.setState({photos:res.data.message[0].photos})
        }).catch((err)=>{
      
        })
      }
  }
  
  onFileSelected(e){
    this.setState({img:'assets/img/'+e.target.files[0].name});
    this.setState({disabled:false})
  }

  check(e){
    this.setState({modalimg:e.target.alt})
    this.setLgShow(true);
  }

  deletePhoto(){
    SocialService.deletePhoto(this.state.email,this.state.modalimg).then((res)=>{
      this.setLgShow(false)
    })
  }

  updatePhoto(){
    SocialService.addPhoto(this.state.email,this.state.img).then((res)=>{
      this.setState({img:""});
      this.setState({disabled:true});
      this.render();
    }).catch((err)=>{

    })
  } 

    render(){
      let lgShow=this.state.lgShow;
      return(
      
        <div class="row">
          <label>Upload Photos</label>
            <table>
              <tr>
                <td></td>
                <td><input type="file" className="from-control" onChange={(e)=>this.onFileSelected(e)} /></td>
                <td>
  
                   <a disabled={this.state.disabled} onClick={()=>this.updatePhoto()} class="btn btn-primary btn-block">Upload</a>
              
                </td>
              </tr>
            </table>

                
            <h1 class="page-header">Photos</h1>
            {
              this.state.photos.map((photo)=>(
                 
                
                <ul class="photos gallery-parent">
              <li>
                <a onClick={(e) => this.check(e)}>
                  <img
                    src={photo}
                    alt={photo}
                    class="img-thumbnail-photo"
                />
                </a>
                <Modal size="lg"
             show={lgShow}
             centered
             animation={false}
             onHide={()=> this.setLgShow(false)}
             aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
           <Modal.Title id="example-modal-sizes-title-lg">
             Photo
           </Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <img 
           src={this.state.modalimg}
            class="modpic"
           />
           </Modal.Body>
           <Modal.Footer>
   <Button onClick={() => this.setLgShow(false)}>Close</Button>
   <Button onClick={() => this.deletePhoto()}>Delete</Button>
 </Modal.Footer>
           </Modal>
              </li>
            </ul>
             
             
              ))
            }
          </div>
        
  )
    }
}

export default PhotoComponent;