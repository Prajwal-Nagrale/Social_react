function MemberComponent(){
    return(
        <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="members">
                <h1 class="page-header">Members</h1>
                <div class="row member-row">
                  <div class="col-md-3">
                    <img src="/assets/img/user.png" alt="user" class="img-thumbnail" />
                    <div class="text-center">SomeUser01</div>
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
                    </p>
                  </div>
                </div>
  
                <div class="row member-row">
                  <div class="col-md-3">
                    <img src="/assets/img/user.png" alt="user" class="img-thumbnail" />
                    <div class="text-center">SomeUser01</div>
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
                    </p>
                  </div>
                </div>
  
                <div class="row member-row">
                  <div class="col-md-3">
                    <img src="/assets/img/user.png" alt="user" class="img-thumbnail" />
                    <div class="text-center">SomeUser01</div>
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="col-md-4">
              <div class="panel panel-default friends">
                <div class="panel-heading">
                  <h3 class="panel-title">My Friends</h3>
                </div>
                <div class="panel-body">
                  <ul>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
                      /></a>
                    </li>
                    <li>
                      <a class="thumbnail" href="profile.html"
                        ><img src="/assets/img/user.png"
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
                    <img src="/assets/img/group.png" />
                    <h4><a href="#">Sample Group One</a></h4>
                    <p>This is a Dobble social network sample group</p>
                  </div>
                  <div class="clearfix"></div>
                  <div class="group-item">
                    <img src="/assets/img/group.png" />
                    <h4><a href="#">Sample Group One</a></h4>
                    <p>This is a Dobble social network sample group</p>
                  </div>
                  <div class="clearfix"></div>
                  <div class="group-item">
                    <img src="/assets/img/group.png" />
                    <h4><a href="#">Sample Group One</a></h4>
                    <p>This is a Dobble social network sample group</p>
                  </div>
                  <div class="clearfix"></div>
                  <a class="btn btn-primary" href="#">View All Groups</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default MemberComponent;