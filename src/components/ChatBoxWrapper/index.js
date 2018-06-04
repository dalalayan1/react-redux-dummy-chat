
import React, { Component } from "react";
import ChatBox from "../ChatBox";
import UserInputForm from "../UserInputForm";

class ChatBoxWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
          msgs: []
        }
    }

  componentDidMount() {
    this.props.msgs && this.setState({
      msgs: this.props.msgs
    });
  }

  

  componentWillReceiveProps(newProps) {
    
  }

  handleOnSubmit = (event) => {  
    event.preventDefault();
    const {
        userid,
        name: userName
    } = this.props,
    userMsg = document.querySelectorAll(`#inputvalueUser${userid}`)[0].value;

    userMsg && this.props.addMsg({ userid, userName, userMsg });

    // userMsg && localStorage.setItem("messageFlag", `${Math.random()}`);
    const messagesArray = JSON.parse(localStorage.getItem("messagesArray")),
      msgObj = {
        userid,
        userName,
        userMsg
      };
    if ( messagesArray && messagesArray.length ) {
      messagesArray.push(msgObj);
    userMsg && localStorage.setItem("messagesArray", JSON.stringify(messagesArray));      
    }
    else {
    userMsg && localStorage.setItem("messagesArray", JSON.stringify([msgObj]));      
    }
    this.setState({
      msgs: [...this.state.msgs, msgObj]
    });

    document.querySelectorAll(`#inputvalueUser${userid}`)[0].value = "";
  }

  render() {

    const {
        name,
        userid
    } = this.props,
    { msgs } = this.state;

    return (
      <div className={`chat-box-wrapper user${userid}`}>
        <h2 className="user-name">{ name }</h2>
        { msgs && msgs.length && <ChatBox {...this.props}/> }
        <UserInputForm
          userid={userid}
          inputId = {`inputvalueUser${userid}`}
          inputClass = {"input-value"}
          formClassName = {`msg-form-user${userid}`}
          placeholder = {"Enter msg..."}
          buttonValue = {"Send"}
          buttonClass = {"submit-button"}
          onSubmitCallback={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default ChatBoxWrapper;
