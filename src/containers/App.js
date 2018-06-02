
import { connect } from 'react-redux';

import App from '../components/App';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions';

function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: bindActionCreators(addUser, dispatch)      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
