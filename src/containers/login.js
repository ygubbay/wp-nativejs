import Button from '../components/button';

class LoginPage  {

    constructor() {
        this.loginButton = new Button('login_button', 'Login');
        this.Username = '';
        this.Password = '';
    }
    
    render() {
        return `
        <div>
            <h1>TS Login</h1>
            <div>
                <label>Username</label>
                <input type="text" class="control" id="username" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" class="control" id="password" />
            </div>
            <div>
                ${this.loginButton.render()}
            </div>
            
        </div>`;
    }

    eventListeners() {
        this.loginButton.click(this.onLogin.bind(this, this.Username, this.Password));
    }

    onLogin(username, password) {

    }

    click (clickFunction) {
        document.getElementById(this.id).addEventListener('click', 
        () => {
            clickFunction();
        })
    }
}

export default LoginPage;