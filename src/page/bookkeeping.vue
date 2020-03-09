<!--
 * @Author: your name
 * @Date: 2020-03-09 21:33:21
 * @LastEditTime: 2020-03-09 21:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\page\bookkeeping.vue
 -->
<template>
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
      <input type="text" focous />
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
</template>

<script>
export default {
  name: "bookkeeping"
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

.page {
  border: 1px solid #000;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* 标签部分 */
.tags {
  padding: 8px;
}
.tags .tag {
  font-size: 16px;
  font-weight: bold;
  padding: 4px 16px;
  display: inline-block;
  background: #efefef;
  border-radius: 6px;
  margin-right: 8px;
}
.tags .tag.active {
  background: #9b9b9b5c;
}
/* 编辑标签 */
.editTag {
  padding: 8px;
}
.editTag span {
  border-bottom: 1px solid black;
}
/* 备注 */
.remarks {
  padding: 8px;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  background: #efefef;
}
.remarks input {
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  margin-left: 12px;
}

/* 选择栏 */
.selectBar {
  width: 100%;
  display: flex;
  font-size: 16px;
  background: #9b9b9b5c;
}
.selectBar span {
  flex: 1;
  padding: 12px 0;
  display: inline-block;
  text-align: center;
  position: relative;
}
.selectBar span.active::before {
  content: "";
  width: 50%;
  height: 4px;
  background: black;
  position: absolute;
  bottom: 0;
  left: 25%;
}
.selectBar span:active {
  background: #efefef;
}
/* 数字输入框 */
.numInput {
  width: 100%;
}
.numInput input {
  width: 90%;
  border: none;
  outline: none;
  line-height: 48px;
  font-size: 24px;
  text-align: right;
  padding: 0 5%;
}
/* 键盘区域 */
.keyboard {
  display: flex;
  font-weight: bold;
  background: #9b9b9b5c;
  width: 100%;
  padding-bottom: 6px;
  font-size: 20px;
}
.keyboard > div > div:active {
  background: #efefef;
}
.numberLock {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.numberLock > div {
  background: #ffffff;
  padding: 20px 0;
  width: 30%;
  display: flex;
  margin: 0;
  margin-top: 6px;
  align-self: center;
  justify-content: space-around;
  align-items: center;
}
.numberLock div:nth-child(10) {
  width: 62.5%;
}

.controlLock {
  width: 20%;
  margin-right: 6px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
}
.controlLock > div {
  padding: 20px 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
.controlLock > div:first-child {
  margin-top: 0;
}
.controlLock > div:last-child {
  margin-top: 6px;
  flex-grow: 1;
}
/* 导航栏 */
.navBar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  text-align: center;
  font-weight: bold;
}
.navBar .item {
  height: 48px;
  line-height: 48px;
  flex: 1;
  color: black;
  text-decoration: none;
  background: #ffffff;
}
.navBar .item.active {
  color: rgb(255, 214, 85);
}
</style>