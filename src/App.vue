<!--
 * @Author: your name
 * @Date: 2020-03-05 17:26:53
 * @LastEditTime: 2020-03-10 23:30:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <div class="navBar">
      <router-link :to="{ path: '/detail' }" class="item">明细</router-link>
      <router-link :to="{ path: '/bookkeeping' }" class="item active">记账</router-link>
      <router-link :to="{ path: '/bill' }" class="item">统计</router-link>
    </div>
  </div>
</template>

<script>
import '@/app.css'
</script>
