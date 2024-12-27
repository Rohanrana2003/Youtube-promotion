export const checkValidData = (email, password) =>{

    const isEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPassword = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|;:'",.<>?/`~-]{5,}$/.test(password);

    if(!isEmail)return 'Your Email address is not valid';
    if(!isPassword) return 'Your Password is not valid';

    return null;
}