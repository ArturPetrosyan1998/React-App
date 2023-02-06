import { Component } from 'react';
import AuthProvider from './context/AuthContext/AuthContext';
import AppLayout from './pages/AppLayout/AppLayout';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    );
  }
}

export default App;
