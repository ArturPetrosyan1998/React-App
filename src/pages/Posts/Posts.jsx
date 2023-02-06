import { Component } from 'react';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { postColumns } from './constants';
import { getMapPosts } from './utils';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const posts = await API.post.getPosts();
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Table columns={postColumns} data={getMapPosts(posts)} />
      </div>

    );
  }
}

export default Posts;
