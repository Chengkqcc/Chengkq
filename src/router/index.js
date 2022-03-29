import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {
        path:"2-1",
        name:"list",
        component:()=>import("../components/NewsList.vue")
      },
      {
        path:"2-2",
        name:"junk",
        component:()=>import("../components/JunkPage.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/LoginPage.vue")
  }
];
const router = new VueRouter({
  routes,
});
router.beforeEach(function(to,from,next){
  let token = localStorage.getItem('token')
  if(to.name ==="login"){
    next()
  }else{
    if(token) {
      next()
      if(to.name==='home'){
        next({name:"list"})
      }
    }else{
      return next({name:"login"})
    }
  }

})
export default router;
