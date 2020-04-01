import Vue from 'vue'
import VueRouter from 'vue-router'
import Item1 from "../views/admin/Item1";
import Item2 from "../views/admin/Item2";

const routes = [
    {path: '/item1', component: Item1, name: 'item1'},
    {path: '/item2', component: Item2, name: 'item2'},
];

const router = new VueRouter({
    routes
});


// router.beforeEach((to, from, next) => {
//
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         alert("asdsa");
//
//         if (localStorage.getItem('jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if(to.matched.some(record => record.meta.is_admin)) {
//                 if(user.is_admin == 1){
//                     next()
//                 }
//                 else{
//                     next({ name: 'userboard'})
//                 }
//             }else {
//                 next()
//             }
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         alert("asd");
//         if(localStorage.getItem('jwt') == null){
//             next()
//         }
//         else{
//             next({ name: 'userboard'})
//         }
//     }else {
//         next()
//     }
// })


Vue.use(VueRouter);
export default router;