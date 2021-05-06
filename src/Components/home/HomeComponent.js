function HomeComponent(){
    return(
      <div>    
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Wall</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Write on the wall"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
                <div className="pull-right">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default">
                      <i className="fa fa-pencil"></i> Text
                    </button>
                    <button type="button" className="btn btn-default">
                      <i className="fa fa-file-image-o"></i> Image
                    </button>
                    <button type="button" className="btn btn-default">
                      <i className="fa fa-file-video-o"></i> Video
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
          <div className="panel panel-default post">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-2">
                  <a className="post-avatar thumbnail" href="profile.html"
                    ><img alt="pic" src="/assets/img/user.png"  />
                    <div className="text-center">DevUser1</div>
                  </a>
                  <div className="likes text-center">7 Likes</div>
                </div>
               
                <div className="col-sm-10">
                  <div className="bubble">
                    <div className="pointer">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. In tincidunt eget ante eget feugiat. Praesent
                        adipiscing tortor eu tincidunt tempus. Sed convallis
                        est in ante sodales, sit amet consectetur leo commodo.
                      </p>
                    </div>
                    <div className="pointer-border"></div>
                  </div>
                  
                  <p className="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div className="comment-form">
                    <form className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                  
                  <div className="clearfix"></div>
  
                  <div className="comments">
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#"
                        ><img alt="pic" src="/assets/img/user.png"
                      /></a>
                      <div className="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#"
                        ><img alt="pic" src="/assets/img/user.png"
                      /></a>
                      <div className="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default post">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-2">
                  <a className="post-avatar thumbnail" href="profile.html"
                    ><img alt="pic" src="/assets/img/user.png" />
                    <div className="text-center">DevUser2</div>
                  </a>
                  <div className="likes text-center">2 Likes</div>
                </div>
               
                <div className="col-sm-10">
                  <div className="bubble">
                    <div className="pointer">
                      <p>
                        Adipiscing elit. In tincidunt eget ante eget feugiat.
                        Praesent adipiscing tortor eu tincidunt tempus. Sed
                        convallis est in ante sodales, sit amet consectetur
                        leo commodo.
                      </p>
                    </div>
                    <div className="pointer-border"></div>
                  </div>
                
                  <p className="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div className="comment-form">
                    <form className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName2"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                  
                  <div className="clearfix"></div>
  
                  <div className="comments">
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#"
                        ><img alt="pic" src="/assets/img/user.png"
                      /></a>
                      <div className="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default post">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-2">
                  <a className="post-avatar thumbnail" href="profile.html"
                    ><img alt="pic" src="/assets/img/user.png" />
                    <div className="text-center">DevUser3</div>
                  </a>
                  <div className="likes text-center">2 Likes</div>
                </div>
              
                <div className="col-sm-10">
                  <div className="bubble">
                    <div className="pointer">
                      <p>
                        Adipiscing elit. In tincidunt eget ante eget feugiat.
                        Praesent adipiscing tortor eu tincidunt tempus. Sed
                        convallis est in ante sodales, sit amet consectetur
                        leo commodo.
                      </p>
                    </div>
                    <div className="pointer-border"></div>
                  </div>
                 
                  <p className="post-actions">
                    <a href="#">Comment</a> - <a href="#">Like</a> -
                    <a href="#">Follow</a> - <a href="#">Share</a>
                  </p>
                  <div className="comment-form">
                    <form className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName3"
                          placeholder="Enter Comment"
                        />
                      </div>
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </form>
                  </div>
                
                  <div className="clearfix"></div>
  
                  <div className="comments">
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#"
                        ><img alt="pic" src="/assets/img/user.png"
                      /></a>
                      <div className="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
  
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#"
                        ><img alt="pic" src="/assets/img/user.png"
                      /></a>
                      <div className="comment-text">
                        <p>
                          Sed convallis est in ante sodales, sit amet
                          consectetur leo commodo.
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
}

export default HomeComponent;