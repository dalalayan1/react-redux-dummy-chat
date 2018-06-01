
import { connect } from 'react-redux';

import App from '../components/App';
import { bindActionCreators } from 'redux';
import { } from '../actions';

function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
