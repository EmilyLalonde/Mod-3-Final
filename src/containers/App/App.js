import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessage } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.props.clearMessage();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox  />}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages
});

export const mapDispatchToProps = dispatch =>  
bindActionCreators({ removeUser, hasErrored, addMessage, clearMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
