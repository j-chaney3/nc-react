export const validateContactForm = (values) => {
    const errors = {};

    //first name
    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if(values.firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 characters.';
    } else if(values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    //last name
    if(!values.lastName) {
        errors.lastName = 'Required';
    } else if(values.lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2.';
    } else if(values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    //phone
    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The Phone number should contain only numbers';
    }

    //email
    if(!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;

}