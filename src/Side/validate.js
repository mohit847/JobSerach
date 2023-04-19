import toast from 'react-hot-toast'

export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    // if(values.username){
     
    //     const { status } = await authenticate(values.username);
        
    //     if(status !== 200){
    //         errors.exist = toast.error('User does not exist...!')
    //     }
    // }

    return errors;
}
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}


export async function resetpasswordValidate(values){
    const errors = passwordVerify({}, values);
    if(values.password != values.confirm_pwd){
        errors.exist = toast.error("password not matched....!")
    }
    return errors;
}


function passwordVerify(errors ={} , values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        errors.password = toast.error("password Requried");
    }else if (values.password.includes(" ")){
        errors.password = toast.error("wrong password..");
    } else if(values.password.length<4){
        errors.password=toast.error("password must be more 4 character");
    }else if(!specialChars.test(values.password)){
        errors.password=toast.error("password must have special character");
    }

    return errors;
}


function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}