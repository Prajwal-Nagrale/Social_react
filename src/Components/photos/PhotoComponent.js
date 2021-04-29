function PhotoComponent(){
    return(
        <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h1 class="page-header">Photos</h1>
              <ul class="photos gallery-parent">
                <li>
                  <a href="/assets/img/sample1.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample1.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
                <li>
                  <a href="/assets/img/sample2.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample2.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
                <li>
                  <a href="/assets/img/sample3.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample3.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
                <li>
                  <a href="/assets/img/sample4.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample4.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
                <li>
                  <a href="/assets/img/sample5.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample5.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
                <li>
                  <a href="/assets/img/sample6.jpg" data-toggle="lightbox"
                    ><img
                      src="/assets/img/sample6.jpg"
                      alt="sample"
                      class="img-thumbnail"
                  /></a>
                </li>
              </ul>
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
    )
}

export default PhotoComponent;