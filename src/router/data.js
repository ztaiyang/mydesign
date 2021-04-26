import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Cart from '../pages/Cart.vue'
import Result from '../pages/Result.vue'
import Detail from '../pages/Detail.vue'
import ShoppingCart from '../pages/ShoppingCart.vue'
import Search from '../pages/Search.vue'
// import Me from '../pages/Me.vue'
let router =[
    {
        id:'10',
        component:Home,
        path:'/'
    },
    {
        id:'20',
        component:Login,
        path:'/Login'
    },
    {
        id:'30',
        component:Register,
        path:'/Register'
    },
    {
        id:'40',
        component:Cart,
        path:'/Cart'
    },
    {
        id:'50',
        component:Result,
        path:'/Result'
    },
    {
        id:'60',
        component:Detail,
        path:'/Detail'
    },
    {
        id:'70',
        component:ShoppingCart,
        path:'/ShoppingCart'
    },
    {
        id:'80',
        component:Search,
        path:'/Search'
    }
    
]
export default router