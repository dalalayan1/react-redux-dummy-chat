
import { connect } from 'react-redux';

import ChatBoxWrapper from '../components/ChatBoxWrapper';
import { bindActionCreators } from 'redux';
import { addMsg } from '../actions';

function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
        addMsg: bindActionCreators(addMsg, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxWrapper);
