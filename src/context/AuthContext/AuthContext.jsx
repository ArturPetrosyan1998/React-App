import { Component } from 'react';
import { Provider } from './index';

class AuthProvider extends Component {
  state = {
    token: localStorage.getItem('token'),
  };

  handleLogin = (token) => {
    localStorage.setItem('token', true);
    this.setState({ token });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ token: null });
  };

  render() {
    const { children } = this.props;
    const { token } = this.state;
    console.log(this.state);
    return <Provider value={{ token, handleLogin: this.handleLogin, handleLogout: this.handleLogout }}>{children}</Provider>;
  }
}

export default AuthProvider;
