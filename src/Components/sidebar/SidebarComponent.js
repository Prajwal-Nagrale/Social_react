import React , {Component} from 'react';

class SidebarComponent extends Component {
     constructor(props) {
         super(props)
         this.state = {
             
         }
     }

render() {
    return <div>
    <div class="panel panel-default friends">
      <div class="panel-heading">
        <h3 class="panel-title">My Friends</h3>
      </div>
      <div class="panel-body">
        <ul>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
          <li>
            <a class="thumbnail" href="profile.html"
              ><img src="assets/img/user.png"
            /></a>
          </li>
        </ul>
        <div class="clearfix"></div>
        <a class="btn btn-primary" href="#">View All Friends</a>
      </div>
    </div>

    <div class="panel panel-default groups">
      <div class="panel-heading">
        <h3 class="panel-title">Latest Groups</h3>
      </div>
      <div class="panel-body">
        <div class="group-item">
          <img src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div class="clearfix"></div>
        <div class="group-item">
          <img src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div class="clearfix"></div>
        <div class="group-item">
          <img src="assets/img/group.png" />
          <h4><a href="#">Sample Group One</a></h4>
          <p>This is a Dobble social network sample group</p>
        </div>
        <div class="clearfix"></div>
        <a class="btn btn-primary" href="groups">View All Groups</a>
      </div>
    </div>
  </div>
}
}

export default SidebarComponent;