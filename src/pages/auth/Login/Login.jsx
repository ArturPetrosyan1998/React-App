import { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './Login.module.scss';
import { withRouter } from '../../../hocs/withRouter';
import { Consumer } from '../../../context/AuthContext';

const cx = classNames.bind(styles);
class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event, handleLogin) => {
    event.preventDefault();
    const { login, password } = this.state;
    const { navigate } = this.props;
    const usersFromLocal = localStorage.getItem('user');
    const newUsers = JSON.parse(usersFromLocal);
    const foundUser = newUsers.find((item) => item.userName === login && item.userPassword === password);
    if (foundUser) {
      handleLogin(true);
      return navigate('/');
    }
    return navigate('/login');
  };

  render() {
    const { login, password } = this.state;
    return (
      <Consumer>
        {({ token, handleLogin }) => (
          <div className="container">
            <form
              className={styles.form}
              onSubmit={(event) => {
                this.onSubmit(event, handleLogin);
              }}
            >
              <Input
                value={login}
                onChange={this.onChange}
                type="text"
                placeholder="User Name"
                name="login"
              />
              <Input
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                name="password"
              />
              <Button disabled={!login || !password} type="submit">Submit</Button>
              <Button type="button"><Link to="/registration" className={styles.RegistrLink}>Create new account</Link></Button>
            </form>
          </div>
        )}
      </Consumer>

    );
  }
}

export default withRouter(Login);
