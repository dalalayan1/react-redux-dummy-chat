
import React, { Component } from "react";

class ChatBox extends Component {

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

  render() {

    const {
        name,
        userid: useridProps,
        msgs
    } = this.props;
    return (
      <div className={`chat-box user${useridProps}`}>
        {
          msgs && msgs.map(({userid, userName, userMsg}, idx) => (
            <div key={idx} className={`text-div ${useridProps === userid ? "sameuser" : ""}`}>
              <span><b>{userName}</b></span>:<span>{userMsg}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ChatBox;
