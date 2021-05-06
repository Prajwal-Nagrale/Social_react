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
      email: "",
      activePage: 1,
      perpage: 4,
      data: [],
      viewemail:"",viewuserName:"",viewimg:"assets/img/user.png",viewcity:"",viewpstate:"",viewprofession:"",viewgender:""
    };
  }


  addFriend(friendEmail){
    SocialService.addFriend(this.state.email,friendEmail).then((res)=>{

    })
  }

  viewMember(email){
    
    SocialService.getProfile(email).then((res)=>{
      this.setState({viewuserName:res.data.message[0].userName})
      this.setState({viewemail:res.data.message[0].email})
      this.setState({viewcity:res.data.message[0].city})
      this.setState({viewpstate:res.data.message[0].state})
      this.setState({viewgender:res.data.message[0].gender})
      this.setState({viewprofession:res.data.message[0].profession})
      this.setState({viewimg:res.data.message[0].img})
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
    
    if (this.state.email)
      return (
        <div class="members">
          <h1 class="page-header">Members</h1>
          <div>
            {this.state.data.map((profile) => (
      
              <div class="row member-row">
                <div class="col-md-3">
                  <img src={profile.img} alt={profile.img} class="img-thumbnail" />
                  <div class="text-center">{profile.userName}</div>
                </div>
                <div class="col-md-3">
                  <p>
                    <a onClick={() => this.addFriend(profile.email)} class="btn btn-success btn-block">
                      <i class="fa fa-user"></i> Add Friend
                    </a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p>
                    <a href="#" class="btn btn-default btn-block">
                      <i class="fa fa-envelope"></i> Send Message
                    </a>
                  </p>
                </div>
                <div class="col-md-3">
                  <p>
                <a onClick={() => this.viewMember(profile.email) } class="btn btn-primary btn-block"><i class="fa fa-pencil"></i> View Profile</a>
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
                        <p><img src={this.state.viewimg} class="img-thumbnail" /></p>
                        <p><strong>Name : </strong>{this.state.viewuserName}</p>
                        <p><strong>Email : </strong>{this.state.viewemail}</p>
                        <p><strong>City : </strong>{this.state.viewcity}</p>
                        <p><strong>State : </strong>{this.state.viewpstate}</p>
                        <p><strong>Profession : </strong>{this.state.viewprofession}</p>
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
        <h1 class="page-header">Not Logged in</h1>
      </div>
    );
  }
}

export default MemberComponent;