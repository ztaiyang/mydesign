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
function fetchSwiper(data){
    return fetch({
        url:'api/swiper/getSwiper',
        method:'GET',
        data
    })
}
function fetchManShoesAttr(data){
    return fetch({
        url:'api/shoesattr/manattr',
        method:"GET",
        data
    })
}
function fetchWomanShoesAttr(data){
    return fetch({
        url:'api/shoesattr/womanattr',
        method:"GET",
        data
    })
}
function fetchAddGood(data){
    return fetch({
        url:'api/good/addGood',
        method:"POST",
        data
    })
}
function fetchGood(data){
    return fetch({
        url:'api/good/getGood',
        method:"GET",
        data
    })
}
export default{
    fetchRegister,
    fetchLogin,
    fetchSwiper,
    fetchManShoesAttr,
    fetchWomanShoesAttr,
    fetchAddGood,
    fetchGood
}