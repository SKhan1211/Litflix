import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';

const mapStateToProps = state => ({
    currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);