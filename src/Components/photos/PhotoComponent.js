import { Component } from "react";
import SocialService from '../../Services/Service';
import './photo.css';

class PhotoComponent extends Component{
  constructor(props){
      
    super(props);
    this.state={
      img:"",
      email:"",
      photos:[],
      disabled:true
    }
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

  updatePhoto(){
    SocialService.addPhoto(this.state.email,this.state.img).then((res)=>{
      this.setState({img:""});
      this.setState({disabled:true});
      this.render();
    }).catch((err)=>{

    })
  } 

    render(){
      
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
                <a href={photo} data-toggle="lightbox">
                  <img
                    src={photo}
                    alt={photo}
                    class="img-thumbnail-photo"
                /></a>
              </li>
            </ul>
              ))
            }
          </div>
        
  )
    }
}

export default PhotoComponent;