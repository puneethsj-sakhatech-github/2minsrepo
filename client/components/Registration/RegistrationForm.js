import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';

import validateInput from '../../validations/loginValidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        //We will be using the state to control the input. This will ensure that the state will always hold the lastest
        this.state = {
            errors: {},
            user_name: '',
            email: '',
            password: '',
            user_phn: '',

            isLoading: false,
            firstTimeFormSubmit: false
        }


        this.onChange = this.onChange.bind(this);//bind(this) is needed here, otherwise, this will point to the event
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value }, function () {
            if (this.state.firstTimeFormSubmit) {
                this.isValid();
            }
        });
    }

    isValid() {
        //deconstruct the props
        const { errors, isValid } = validateInput(this.state);
        //if(!isValid) {
        this.setState({ errors });
        //}
        return isValid;
    }


    onSubmit(event) {
        event.preventDefault();
        this.setState({ firstTimeFormSubmit: true })
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.context.router.push('/home');

            //uncomment the below code when the API integration starts

            this.props.userLoginRequest(this.state).then(
                (res) => {
                    console.log('response to login is ', res.data);
                    if (res.data.error == true) {
                        this.setState({ errors: { "form": res.data.message }, isLoading: false })
                    }
                    else {
                        let responseData = res.data.response;
                        console.log("Step-1");
                        console.log(localStorage.getItem('jwtToken'));
                        if (responseData.token) {
                            console.log("Step-2");
                            const jwtToken = responseData.token;
                            const decodedToken = jwt.decode(jwtToken);
                            const user = decodedToken.user_details;
                            if (!localStorage.getItem('cartItems')) {
                                this.context.router.push('/home');
                            }
                        }
                        console.log("Step-3");

                    }
                },
            );
        }
    }




    render() {
        const { errors, user_name, email, password, user_phn, isLoading } = this.state;
        return (
            <form className="p20 user-entry-forms login-form" onSubmit={this.onSubmit}>
                <h2 className="mt0 mb20 text-center">Registration</h2>
                <div className="row mb30">
                    <div className="col-xs-12">
                        <hr />
                    </div>
                </div>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.user_name}
                            label="User Name"
                            onChange={this.onChange}
                            value={user_name}
                            field="user_name"
                        />
                    </div>
                </div>
                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.user_phn}
                            label="user_phn"
                            onChange={this.onChange}
                            value={user_phn}
                            field="user_phn"
                        />
                    </div>
                </div>
                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.email}
                            label="email"
                            onChange={this.onChange}
                            value={email}
                            field="email"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.password}
                            label="Password"
                            onChange={this.onChange}
                            value={password}
                            field="password"
                            type="password"
                        />
                    </div>
                </div>
                {/* <Link to="/forgotpassword" className="text-center full-width block mb20 link-secondary">Forgot Password?</Link> */}
                <div className="row mb10">
                    <div className="col-xs-12">
                        <hr />
                    </div>
                </div>
                <div className="row mt30">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <button disabled={this.state.isLoading} className="btn btn-lg btn-primary full-width">
                                Register
                      </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

RegistrationForm.propTypes = {
    userRegistrationRequest: React.PropTypes.func.isRequired,
}

RegistrationForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default RegistrationForm;