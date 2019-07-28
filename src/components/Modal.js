import React from 'react';
import { Modal } from 'antd';
import axios from 'axios';

export default class MyModal extends React.Component {
    componentDidMount(){
        debugger
        axios.get(`http://localhost:8080/api/blocks/${this.props.hash}`).then(res=>{
           debugger
        })
        .catch(err=>{
          console.log(err);
        })
    }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
   this.props.setModal(false);
  };

  handleCancel = e => {
    this.props.setModal(false);
  };

  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <Modal
          title="Basic Modal"
          visible={this.props.show}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}