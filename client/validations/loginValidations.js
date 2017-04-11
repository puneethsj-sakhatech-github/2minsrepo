import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  console.log("In validateInput");
  let errors = {};
  if(data.email.length < 6 && data.email.length >30 ) {
    errors.email = "Email should contain 6 to 30 leters";
  }

//   if(data.user_name.length < 6 && data.user_name.length >30 ) {
//     errors.user_name = "User Name should contain 6 to 30 leters";
//   }

// if(Validator.isEmpty(data.user_name)) {
//     errors.user_name = "Please enter User Name";
//   }

  if(Validator.isEmpty(data.email)) {
    errors.email = "Please enter Email";
  }

  if( data.password.length < 6 || data.password.length > 15 ) {
    errors.password = "Password should be between 6 and 15 characters long";
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = "Please enter password";
  }

  return {
    errors,
    isValid:isEmpty(errors)
  }
}
