import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends Component {
  constructor(props)
  {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(e) {
    e.preventDefault();
    let user_id = {
      id:this.props.auth.user.user_id
    }
    this.props.logout(user_id).then(
      () => {
        this.context.router.push('/');
      },
      ({ data }) => this.setState({ errors : data, isLoading : false })
    );
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    const user = this.props.auth.user;
    console.log('path is ' , this.props.pathname);
    return (
      
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link  className="navbar-brand" to="/">2 Minutes...!!!</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>
                          <Link to="/groceries">Groceries</Link>
                      </li>
                      <li>
                          <Link to="/fruits">Fruits</Link>
                      </li>
                      <li>
                          <Link to="/vegetables">Vegetables</Link>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>

                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>

                      <li>
                          <a href="#"></a>
                      </li><li>
                          <a href="#"></a>
                      </li><li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <a href="#"></a>
                      </li>

                      <li>
                          <a href="#"></a>
                      </li>
                      <li>
                          <Link to="/cart"><img src="http://www.foodytreat.com/admin/images/cart.png" style={{height:25,width:25}}alt=""/></Link>
                      </li>
                      <li>
                          <Link to="/login">Log In/Sign Up</Link>
                      </li>
                  </ul>
              </div>

          </div>

      </nav>
      
    );
  }
}

NavigationBar.propTypes = {
  auth:React.PropTypes.object.isRequired,
  logout:React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router:React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth:state.auth,
  }
}
export default connect(mapStateToProps, { logout })(NavigationBar);
