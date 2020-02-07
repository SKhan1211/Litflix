import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';
import { fetchSingleMovie } from '../../actions/content_actions';

const mapStateToProps = state => ({
  currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSingleMovie: mediaId => dispatch(fetchSingleMovie(mediaId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);