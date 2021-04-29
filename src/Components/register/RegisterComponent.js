import './register.css'

function RegisterComponent(){


  
    return(
        <section>
  
                <div class="createAccount">
                    <form name="form" class="userForm">
                        <h2>Sign Up</h2> 
                        <h6>It's free and always wil be.</h6>
                        <table class="center">
                          <tr>
                            <td><label for="name">Name:</label></td>
                            <td><input type="text" name="name" class="form-control" /></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><label for="email">Email:</label></td>
                            <td><input type="text"  name="email" class="form-control" formControlName="email"  /></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                            <tr>
                              <td><label for="password">Password:</label></td>
                              <td><input type="password"  name="password"  class="form-control" formControlName="password" /></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                          </tr>
                            <tr></tr>
                        </table>
                        <p><button type="submit"  >Create Account</button></p>
                    </form>
                </div>

    
    </section>
    );
}

export default RegisterComponent;
