<!--
 * @Author: your name
 * @Date: 2020-03-05 17:26:53
 * @LastEditTime: 2020-03-06 00:04:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\App.vue
 -->
<template>
  <div id="app">
    <div class="page">
      <section>
        <h2 class="title">记账本</h2>
      </section>
      <section class="tags">
        <span class="tag">衣</span>
        <span class="tag">食</span>
        <span class="tag">住</span>
        <span class="tag">行</span>
      </section>
      <section class="remarks">
        <span>备注</span>
        <input type="text" placeholder="添加备注" />
      </section>
      <section class="keyboard">
        <div class="numberLock">
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
          <div class="number">0</div>
          <div class="number">.</div>
        </div>
        <div class="controlLock">
          <div class="number">删除</div>
          <div class="number">确定</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 440px;
  margin: 0 auto;
  color: black;
  height: 100vh;
  display: block;
}
h2 {
}
.page {
  border: 1px solid #000;
  height: 100vh;
}

/* 标签部分 */
.tags {
  border: 1px solid #000;
  padding: 8px;
}
.tags .tag {
  font-size: 14px;
  font-weight: bold;
  padding: 2px 12px;
  display: inline-block;
  background: lightgrey;
  border-radius: 4px;
}

/* 备注 */
.remarks {
  padding: 8px;
}
.remarks input {
  border: none;
  border-bottom: 1px solid lightgrey;
  background: none;
  outline: none;
}
/* 键盘区域 */
.keyboard {
  bottom: 0;
  position: fixed;
  max-width: 440px;
  display: flex;
  font-weight: bold;
  background: #999999;
  width: 100%;
}
.numberLock{
  border: 1px solid #000;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.numberLock div{
  background: #ffffff;
  padding: 12px 0;
  width: 30%;
  margin: auto;
  display: flex;
  margin-top: 6px;
  align-self: center;
  justify-content: space-around;
  align-items: center;
}
.numberLock div:nth-child(10){
  flex-grow: 1;
  margin: 5px;
}
.numberLock div:last-child{
  margin: 5px;
}
.controlLock{
  width: 20%;
  margin: 6px;
  display: flex;
  flex-direction: column;
}
.controlLock div{
  flex: 1;
  padding: 20px;
  background: #fff;
  display: flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
}
.controlLock div:last-child{
  flex: 4;
  margin-top: 6px;
}
</style>
