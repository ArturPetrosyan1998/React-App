import { Component } from 'react';
import { withRouter } from '../../hocs/withRouter';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { getMapUsersById } from './utils';
import { userColumns } from './constants';

class User extends Component {
  state = {
    userById: [],
  };

  componentDidMount() {
    this.getUserById();
  }

  getUserById = async () => {
    const { searchParams } = this.props;
    const userById = await API.userById.getUserById(searchParams);
    this.setState({ userById });
  };

  render() {
    const { userById } = this.state;

    return (
      <div>
        <Table columns={userColumns} data={getMapUsersById(userById)} />
      </div>
    );
  }
}

export default withRouter(User);
