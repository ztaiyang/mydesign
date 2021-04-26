import fetch from './axios'
function fetchRegister(data){
    return fetch({
        url:'api/users/register',
        method:'POST',
        data
    })
}
 function fetchLogin(data){
    return fetch({
        url:'api/users/login',
        method:'POST',
        data
    })
}
export default{
    fetchRegister,
    fetchLogin
}