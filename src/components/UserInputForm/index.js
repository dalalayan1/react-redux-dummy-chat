
import React, { Component } from "react";

class UserInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showFolderModal: false
        }
    }

  componentDidMount() {
    
  }

  

  componentWillReceiveProps(newProps) {
  }

  render() {

    const {
        userid,
        onSubmitCallback
    } = this.props;

    return (
      <form className={`user-input${userid}`} onSubmit={onSubmitCallback}>
        <input type="text" id={`inputvalue-user${userid}`} placeholder="Enter msg..." />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default UserInputForm;
