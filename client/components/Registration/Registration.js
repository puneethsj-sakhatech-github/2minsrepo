import React,{Component} from 'react';
import RegistrationForm from './RegistrationForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {userRegistrationRequest} from '../../actions/authActions';
//import {LargeLogo} from '../common/Logos';


class Registration extends Component {


render() {
      const {userRegistrationRequest} = this.props;
        return (
            <div className="row full-height">
              <div className="col-md-4 col-md-offset-4 full-height">
                {/*<LargeLogo id="large_logo" className="large-logo"/>*/}
                <RegistrationForm userRegistrationRequest={userRegistrationRequest}/>
              </div>
            </div>
        );
    }

}

Registration.propTypes = {
  userRegistrationRequest:React.PropTypes.func.isRequired,
}
export default connect(null, { userRegistrationRequest })(Registration)