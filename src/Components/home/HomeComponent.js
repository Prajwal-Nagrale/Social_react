function HomeComponent(){
    return(
        <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Wall</h3>
            </div>
            <div class="panel-body">
              <form>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Write on the wall"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
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
  
          <div class="panel panel-default post">
            <div class="panel-body">
              <div class="row">
                <div class="col-sm-2">
                  <a class="post-avatar thumbnail" href="profile.html"
                    ><img src="/assets/img/user.png" alt="User" />
                    <div class="text-center">DevUser1</div>
                  </a>
                  <div class="likes text-center">7 Likes</div>
                </div>
               
                <div class="col-sm-10">
                  <div class="bubble">
                    <div class="pointer">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. In tincidunt eget ante eget feugiat. Praesent
                        adipiscing tortor eu tincidunt tempus. Sed convallis
                        est in ante sodales, sit amet consectetur leo commodo.
                      </p>
                    </div>
                    <div class="pointer-border"></div>
                  </div>
                  
                  <p class="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div class="comment-form">
                    <form class="form-inline">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName1"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" class="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                  
                  <div class="clearfix"></div>
  
                  <div class="comments">
                    <div class="comment">
                      <a class="comment-avatar pull-left" href="#"
                        ><img src="/assets/img/user.png"
                      /></a>
                      <div class="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="comment">
                      <a class="comment-avatar pull-left" href="#"
                        ><img src="/assets/img/user.png"
                      /></a>
                      <div class="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default post">
            <div class="panel-body">
              <div class="row">
                <div class="col-sm-2">
                  <a class="post-avatar thumbnail" href="profile.html"
                    ><img src="/assets/img/user.png" />
                    <div class="text-center">DevUser2</div>
                  </a>
                  <div class="likes text-center">2 Likes</div>
                </div>
               
                <div class="col-sm-10">
                  <div class="bubble">
                    <div class="pointer">
                      <p>
                        Adipiscing elit. In tincidunt eget ante eget feugiat.
                        Praesent adipiscing tortor eu tincidunt tempus. Sed
                        convallis est in ante sodales, sit amet consectetur
                        leo commodo.
                      </p>
                    </div>
                    <div class="pointer-border"></div>
                  </div>
                
                  <p class="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div class="comment-form">
                    <form class="form-inline">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName2"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" class="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                  
                  <div class="clearfix"></div>
  
                  <div class="comments">
                    <div class="comment">
                      <a class="comment-avatar pull-left" href="#"
                        ><img src="/assets/img/user.png"
                      /></a>
                      <div class="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default post">
            <div class="panel-body">
              <div class="row">
                <div class="col-sm-2">
                  <a class="post-avatar thumbnail" href="profile.html"
                    ><img src="/assets/img/user.png" />
                    <div class="text-center">DevUser3</div>
                  </a>
                  <div class="likes text-center">2 Likes</div>
                </div>
              
                <div class="col-sm-10">
                  <div class="bubble">
                    <div class="pointer">
                      <p>
                        Adipiscing elit. In tincidunt eget ante eget feugiat.
                        Praesent adipiscing tortor eu tincidunt tempus. Sed
                        convallis est in ante sodales, sit amet consectetur
                        leo commodo.
                      </p>
                    </div>
                    <div class="pointer-border"></div>
                  </div>
                 
                  <p class="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div class="comment-form">
                    <form class="form-inline">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName3"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" class="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                
                  <div class="clearfix"></div>
  
                  <div class="comments">
                    <div class="comment">
                      <a class="comment-avatar pull-left" href="#"
                        ><img src="/assets/img/user.png"
                      /></a>
                      <div class="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
  
                    <div class="comment">
                      <a class="comment-avatar pull-left" href="#"
                        ><img src="/assets/img/user.png"
                      /></a>
                      <div class="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    </div>
  </section>
    )
}

export default HomeComponent;