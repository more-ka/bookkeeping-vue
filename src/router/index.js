/*
 * @Author: your name
 * @Date: 2020-03-05 17:26:53
 * @LastEditTime: 2020-03-09 21:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import bookkeeping from '../page/bookkeeping'
const bill = { template: '<div>foo</div>' }
const detail = { template: '<div>bar</div>' }

const routes = [
  { path: '/bill', component: bill },
  { path: '/detail', component: detail },
  {path: '/bookkeeping', component: bookkeeping}
]

Vue.use(Router)

export default new Router({
  routes
})
