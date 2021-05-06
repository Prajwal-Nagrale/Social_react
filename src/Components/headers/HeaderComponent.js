import LoginComponent from '../login/LoginComponent';
import './header.css';

function HeaderComponent(){
        return(
            <header>
            <div className="container">
              <img
                src="/logo512.png"
                alt="DCX"
                className="logo"
              />
              <span> Social Networking for Everyone</span>
              <LoginComponent></LoginComponent>
              
            </div>
            
          </header>
        );
}

export default HeaderComponent;