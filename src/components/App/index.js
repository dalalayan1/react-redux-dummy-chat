
import React, { Component } from "react";
import ChatBoxWrapperContainer from "../../containers/ChatBoxWrapperContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showFolderModal: false
        }
    }

  componentDidMount() {
  }

  

  componentWillReceiveProps(newProps) {
    const {
      messages: oldMessages
    } = this.props.appReducer,
    {
      messages: newMessages
    } = newProps.appReducer;

    if( oldMessages.length < newMessages.length ) {
      return true;
    }
  }

  render() {

    const { messages } = this.props.appReducer;

    return (
      <div className="chat-app">
        <ChatBoxWrapperContainer key={1} userid={1} name="Mike" msgs={ messages }/>
        <ChatBoxWrapperContainer key={2} userid={2} name="John" msgs={ messages }/>
      </div>
    );
  }
}

export default App;
