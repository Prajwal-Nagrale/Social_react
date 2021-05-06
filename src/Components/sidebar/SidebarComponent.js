import React , {Component} from 'react';

class SidebarComponent extends Component {
     constructor(props) {
         super(props)
         this.state = {
             
         }
     }

render() {
    return <div>
    <div className="panel panel-default friends">
      <div className="panel-heading">
        <h3 className="panel-title">My Friends</h3>
      </div>
      <div className="panel-body">
        <ul>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a className="thumbnail" href="profile.html"
              ><img alt="assets/img/user.png" src="assets/img/user.png"
            /></a>
          </li>
        </ul>
        <div className="clearfix"></div>
        <a className="btn btn-primary" href="#">View All Friends</a>
      </div>
    </div>

    <div className="panel panel-default groups">
      <div className="panel-heading">
        <h3 className="panel-title">Latest Groups</h3>
      </div>
      <div className="panel-body">
        <div className="group-item">
          <img alt="assets/img/user.png" src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div className="clearfix"></div>
        <div className="group-item">
          <img alt="assets/img/user.png" src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div className="clearfix"></div>
        <div className="group-item">
          <img alt="assets/img/user.png" src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div className="clearfix"></div>
        <a className="btn btn-primary" href="groups">View All Groups</a>
      </div>
    </div>
  </div>
}
}

export default SidebarComponent;