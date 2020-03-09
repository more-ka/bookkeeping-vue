/*
 * @Author: your name
 * @Date: 2020-03-05 17:26:53
 * @LastEditTime: 2020-03-09 21:50:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import detail from '../page/detail'
import bookkeeping from '../page/bookkeeping'
import bill from '../page/bill'

const routes = [
  { path: '/bill', component: bill },
  { path: '/detail', component: detail },
  {path: '/bookkeeping', component: bookkeeping}
]

Vue.use(Router)

export default new Router({
  routes
})
