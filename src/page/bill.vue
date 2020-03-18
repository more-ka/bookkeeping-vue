<!--
 * @Author: your name
 * @Date: 2020-03-09 21:48:48
 * @LastEditTime: 2020-03-19 02:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\page\bill.vue
 -->
<template>
  <div class="page">
    <header>
      <span class="expend active">支出</span>
      <span class="income">收入</span>
    </header>
    <section class="tab">
      <ul>
        <li class="active">按周</li>
        <li>按月</li>
        <li>按年</li>
      </ul>
    </section>
    <section class="main">
      <div class="item">
        <div class="time">
          <div>今天</div>
          <div>¥24</div>
        </div>
        <div class="content">
          <div class="row">
            <div>吃饭</div>
            <div>¥12</div>
          </div>
          <div class="row">
            <div>吃饭</div>
            <div>¥12</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time">
          <div>昨天</div>
          <div>¥24</div>
        </div>
        <div class="content">
          <div class="row">
            <div>外卖</div>
            <div>¥12</div>
          </div>
          <div class="row">
            <div>购物</div>
            <div>¥12</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'bill'
}
</script>

<style scoped>
    .page{
      max-width: 440px;
      height: calc(100vh - 50px);
      background: #ffffff;
      margin:auto;
    }
    header{
      display: flex;
      font-size: 16px;
      font-weight: bold;
    }

    header span{
      display: inline-block;
      background: #efefef;
      flex: 1;
      padding: 12px 0;
      text-align: center;
    }
    header span.active{
      background: #9b9b9b5c;
    }

    .tabs{
      /* width: 100%; */
      font-size: 14px;
    }
    .tab ul{
      display: flex;
    }
    .tab ul li{
      background: #efefef;
      flex: 1;
      text-align: center;
      list-style: none;
      padding: 8px;
      position: relative;
    }
    .tab ul li.active::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 4px;
      background: #000;
      /* background: #9b9b9b5c; */
    }
    .main{
      padding: 0;
    }
    .main .item{
      padding: 12px;
    }
    .main .item > .time{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 8px;
      background:#efefef;
    }
    .time div{
      width: 40%;
    }
    .item > .time > div:last-child{
      text-align: right;
    }
    .content{
      padding: 8px;
      display: flex;
      flex-direction: column;
    }
    .item .row{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .item .row div{
      flex: 1;
    }
    .item .row div:last-child{
      text-align: right;
    }
</style>
