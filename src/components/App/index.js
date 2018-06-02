
import React, { Component } from "react";
import ChatBoxWrapperContainer from "../../containers/ChatBoxWrapperContainer";
import UserInputForm from "../UserInputForm";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
          currentUser: ''
        }
    }

  componentDidMount() {
    window.addEventListener("load", () => {
      const usersObj = JSON.parse(localStorage.getItem("users"));
      usersObj && this.setState({
                users: usersObj
              });
      const messagesArray = JSON.parse(localStorage.getItem("messagesArray"));
      messagesArray && messagesArray.length && this.setState({ messages: messagesArray });
    });
    window.addEventListener("storage", () => {
      const messagesArray = JSON.parse(localStorage.getItem("messagesArray"));
      messagesArray && messagesArray.length && this.setState({ messages: messagesArray });
    }, false);
  }

  

  componentWillReceiveProps(newProps) {
    // const {
    //   messages: oldMessages
    // } = this.props.appReducer,
    // {
    //   messages: newMessages
    // } = newProps.appReducer;

    // if( oldMessages.length < newMessages.length ) {
    //   this.setState({ messages: newMessages });
    // }
  }

  handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    const { users } = this.state,
      currentUser = document.querySelectorAll("#userName")[0].value;
    if( !currentUser ) {
      alert("Please enter name!!");
    }
    else if ( users && users.length && users.indexOf(currentUser) !== -1 ) {
      alert("Sorry user already exists!!");
    }
    else {
      users.push(currentUser);
      localStorage.setItem("users", JSON.stringify(users));
      this.setState({currentUser});
      this.props.addUser(users);
    }
    document.querySelectorAll("#userName")[0].value = "";
    
  }

  render() {

    const { messages, currentUser } = this.state;

    return (
      <div className="chat-app">
        { 
          !currentUser &&  <UserInputForm
                              userid={1}
                              inputId = {"userName"}
                              inputClass = {"user-name"}
                              formClassName = {`entry-form`}
                              placeholder = {"Enter name..."}
                              buttonValue = {"Enter"}
                              buttonClass = {"submit-button"}
                              onSubmitCallback={this.handleOnSubmit}
                          />
        }
        { 
          currentUser && <ChatBoxWrapperContainer userid={1} name={currentUser} msgs={ messages }/>
        }
      </div>
    );
  }
}

export default App;
