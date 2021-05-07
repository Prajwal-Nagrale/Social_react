import React, { Component } from "react";
import SocialService from "../../Services/Service";
import ReactPaginate from "react-paginate";
import { Modal, Button } from "react-bootstrap";

class MemberComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      lgShow:false,
      mailShow:false,
      sending:"",
      email: "",
      activePage: 1,
      perpage: 4,
      data: [],
      viewEmail:"",viewuserName:"",viewImage:"assets/img/user.png",viewCity:"",viewState:"",viewProfession:"",viewgender:""
    };
  }

  sendEmail(e) {
    e.preventDefault();
    this.setMailShow(false);

  }

  showEmail(email){
    this.setState({sending:email})
    this.setMailShow(true);
  }


  addFriend(friendEmail){
    SocialService.addFriend(this.state.email,friendEmail).then((res)=>{

    })
  }

  viewMember(email){
    
    SocialService.getProfile(email).then((res)=>{
      this.setState({viewuserName:res.data.message[0].userName})
      this.setState({viewEmail:res.data.message[0].email})
      this.setState({viewCity:res.data.message[0].city})
      this.setState({viewState:res.data.message[0].state})
      this.setState({viewgender:res.data.message[0].gender})
      this.setState({viewProfession:res.data.message[0].profession})
      this.setState({viewImage:res.data.message[0].profileImage})
    })
    this.setLgShow(true)
  }

  handlePageChange(pageNumber) {
    console.log(pageNumber)
    let last = (pageNumber.selected+1 )* this.state.perpage;
    const first = last - this.state.perpage;
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber.selected +1});
    this.setState({ data: this.state.profiles.slice(first, last) });
    console.log(this.state.pages);
  }

  setLgShow(val){
    this.setState({lgShow:val})
  }

  setMailShow(val){
    this.setState({mailShow:val})
  }

  componentDidMount() {
    let last = this.state.activePage * this.state.perpage;
    const first = last - this.state.perpage;
    SocialService.getAllProfiles().then((res) => {
      this.setState({ profiles: res.data.message });
      this.setLgShow(false);
      this.setState({profiles:this.state.profiles.filter((p)=>p.email!==this.state.email)})
      this.setState({ data: this.state.profiles.slice(first, last) });
    });
    // this.state.pages = this.state.profiles.slice(first,last)
    //      console.log(this.state.pages)

    let email = JSON.parse(window.localStorage.getItem("user"));
    if (email) {
      this.setState({ email });
      this.setLgShow(false);
    }
  }

  render() {
    let lgShow=this.state.lgShow;
    let mailShow=this.state.mailShow;
    if (this.state.email)
      return (
        <div className="members">
          <h1 className="page-header">Members</h1>
          <div>
            {this.state.data.map((profile) => (
      
              <div className="row member-row">
                <div className="col-md-3">
                  <img src={profile.profileImage} alt={profile.profileImage} height="200" width="150" className="img-thumbnail" />
                  <div className="text-center">{profile.userName}</div>
                </div>
                <div className="col-md-3">
                  <p>
                    <a onClick={() => this.addFriend(profile.email)} className="btn btn-success btn-block">
                      <i className="fa fa-user"></i> Add Friend
                    </a>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <a onClick={()=> this.showEmail(profile.email)} className="btn btn-default btn-block">
                      <i className="fa fa-envelope"></i> Send Message
                    </a>
                    <Modal size="lg"
                  show={mailShow}
                  centered
                  animation={false}
                  onHide={()=> this.setMailShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Message
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={(e)=>this.sendEmail(e)}>
                      <div>
                          <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="From" value={this.state.email} name="from" />
                          </div>
                          <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="To" value={this.state.sending} name="toemail" />
                          </div>
                          <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" rows="8" placeholder="Compose Email" name="message" />
                          </div>
                          <div className="col-8 form-group mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                          </div>
                      </div>
                  </form>
                </Modal.Body>
          
                </Modal>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                <a onClick={() => this.viewMember(profile.email) } className="btn btn-primary btn-block"><i className="fa fa-pencil"></i> View Profile</a>
                <Modal size="lg"
                  show={lgShow}
                  centered
                  animation={false}
                  onHide={()=> this.setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Profile
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <div>
                        <p><img src={this.state.viewImage} className="img-thumbnail-photo-modal" /></p>
                        <p><strong>Name : </strong>{this.state.viewuserName}</p>
                        <p><strong>Email : </strong>{this.state.viewEmail}</p>
                        <p><strong>City : </strong>{this.state.viewCity}</p>
                        <p><strong>State : </strong>{this.state.viewState}</p>
                        <p><strong>Profession : </strong>{this.state.viewProfession}</p>
                        <p><strong>Gender : </strong>{this.state.viewgender}</p>
                      </div>
                </Modal.Body>
                <Modal.Footer>
        <Button onClick={() => this.setLgShow(false)}>Close</Button>
      </Modal.Footer>
                </Modal>
                </p>
                </div>
              </div>
              ))}
          </div>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={4}  //totaldatalength / perpage
            onPageChange={this.handlePageChange.bind(this)}
            containerClassName={"pagination pagination-sm justify-content-end"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"page-item disabled"}
            activeClassName={"page-item active"}
          />
        </div>
      );
    return (
      <div>
        <h1 className="page-header">Not Logged in</h1>
      </div>
    );
  }
}

export default MemberComponent;