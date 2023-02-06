import { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import styles from './Counter.module.scss';

class Counter extends Component {
  state = {
    isOpenModal: false,
  };

  handleModalOpen = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  handleModalClose = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  render() {
    const { isOpenModal } = this.state;
    return (
      <div>
        <div className={styles.asideStyle}>
          <div className={styles.counterButton}>
            <Button onClick={this.handleModalOpen} className={styles.modalButton}>
              Modal
            </Button>
          </div>
        </div>
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
      </div>
    );
  }
}

export default Counter;
