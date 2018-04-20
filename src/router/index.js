import Vue from 'vue'
import Router from 'vue-router'

/* 引入主组件子路由 */
import Login from "../components/account/Login.vue"
import Shop  from "../components/shop/Shop.vue"
/* 引入商品的每个子路由 */
import Detail from "../components/shop/goods/Detail.vue"
import List from "../components/shop/goods/List.vue"
import Complate from "../components/shop/ords/Complate.vue"
import Pay from "../components/shop/ords/Pay.vue"
import Site from "../components/shop/ords/Site.vue"
import Shopcart from "../components/shop/shopcart/Shopcart.vue"

Vue.use(Router)

const goods = [
  { name: "detail", path: "detail/:id", component: Detail},
  { name: "list", path: "list", component: List },
]
const ords = [
  { name: "complate", path: "complate", component: Complate },
  { name: "pay", path: "pay", component: Pay },
  { name: "site", path: "site/:id", component: Site },
]
const shopcart = [
  { name: "shopcart", path: "shopcart", component: Shopcart },
]

export default new Router({
  routes: [
      {name:"login",path:"/login",component:Login},
       { name: "shop", path: "/shop", component: Shop,
       children:[
         ...goods,...ords,...shopcart
        ]
      }
    
  ]
})
