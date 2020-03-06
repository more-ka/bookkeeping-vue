<!--
 * @Author: your name
 * @Date: 2020-03-05 17:26:53
 * @LastEditTime: 2020-03-06 23:28:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\App.vue
 -->
<template>
  <div id="app">
    <div class="page">
      <section class="tags">
        <span class="tag active">衣</span>
        <span class="tag">食</span>
        <span class="tag">住</span>
        <span class="tag">行</span>
      </section>
      <section class="editTag">
        <span>编辑标签</span>
      </section>
      <section class="remarks">
        <span>备注</span>
        <input type="text" placeholder="添加备注" />
      </section>
      <section class="selectBar">
        <span class="active">支出</span>
        <span>收入</span>
      </section>
      <section class="numInput">
        <input type="text" focous>
      </section>
      <section class="keyboard">
        <div class="numberLock">
          <div class="number active">
            <div class="content">1</div>
            </div>
          <div class="number">
            <div class="content">2</div>
          </div>
          <div class="number">
            <div class="content">3</div>
          </div>
          <div class="number">
            <div class="content">4</div>
          </div>
          <div class="number">
            <div class="content">5</div>
          </div>
          <div class="number">
            <div class="content">6</div>
          </div>
          <div class="number">
            <div class="content">7</div>
          </div>
          <div class="number">
            <div class="content">8</div>
          </div>
          <div class="number">
            <div class="content">9</div>
          </div>
          <div class="number">
            <div class="content">9</div>
          </div>
          <div class="number">
            <div class="content">.</div>
          </div>
        </div>
        <div class="controlLock">
          <div class="delete">
            <div class="content">删除</div>
          </div>
          <div class="clear">
            <div class="content">清空</div>
          </div>
          <div class="confirm">
            <div class="content">确定</div>
          </div>
        </div>
      </section>
    </div>
    <div class="navBar"> 
      <router-link :to="{ path: '/app' }" class="item">明细</router-link>
      <router-link :to="{ path: '/app' }" class="item active">记账</router-link>
      <router-link :to="{ path: '/app' }" class="item">统计</router-link>
    </div>
  </div>
</template>

<script>
  import '@/app.css'

</script>
