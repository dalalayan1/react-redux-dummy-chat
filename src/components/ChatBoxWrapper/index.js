
import React, { Component } from "react";
import ChatBox from "../ChatBox";
import UserInputForm from "../UserInputForm";

class ChatBoxWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showFolderModal: false
        }
    }

  componentDidMount() {
    
  }

  

  componentWillReceiveProps(newProps) {
    if(newProps.msgs && newProps.msgs.length) {
      return true;
    }
  }

  handleOnSubmit = (event) => {  
    event.preventDefault();
    const {
        userid,
        name: userName
    } = this.props,
    userMsg = document.querySelectorAll(`#inputvalue-user${userid}`)[0].value;

    userMsg && this.props.addMsg({ userid, userName, userMsg });

    document.querySelectorAll(`#inputvalue-user${userid}`)[0].value = '';
  }

  render() {

    const {
        name,
        userid,
        msgs
    } = this.props;

    return (
      <div className={`chat-box-wrapper user${userid}`}>
        <h2 className="user-name">{ name }</h2>
        <ChatBox {...this.props}/>
        <UserInputForm userid={userid} onSubmitCallback={this.handleOnSubmit} />
      </div>
    );
  }
}

export default ChatBoxWrapper;
