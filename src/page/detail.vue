<!--
 * @Author: your name
 * @Date: 2020-03-09 21:40:31
 * @LastEditTime: 2020-03-19 02:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookkeeping-vue\src\page\detail.vue
 -->
<template>
    <div class="page">
    <header>
      <div class="header">
        <span class="month">3月</span>
        <span class="expendSummary">支出¥ 24</span>
        <span class="incomeSummary">收入¥ 0</span>
      </div>
    </header>
    <div class="main">
      <div class="item">
        <div class="time">
          <span class="day">3月8日 星期天</span>
          <span class="expend">支出¥ 24</span>
          <span class="income">收入¥ 0</span>
        </div>
        <div class="detail">
          <div class="row">
            <div>餐饮</div>
            <div>¥ 12</div>
          </div>
          <div class="row">
            <div>玩</div>
            <div>¥ 12</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time">
          <span class="day">3月7日 星期六</span>
          <span class="expend">支出¥ 100</span>
          <span class="income">收入¥ 0</span>
        </div>
        <div class="detail">
          <div class="row">
            <div>水电</div>
            <div>¥ 100</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style scoped>
    .page {
      max-width: 440px;
      height: calc(100vh - 50px);
      background: #ffffff;
      margin: auto;
    }

    .page .header {
      display: flex;
      background: #e5e5e5;
      width: 100%;
    }
    .header span{
      padding: 12px;
    }
    .header .month {
      width: 40%;
    }

    .header .expendSummary {
      width: 30%;
    }

    .header .incomeSummary {
      width: 30%;
    }

    .main{
      display: flex;
      padding-bottom: 0;
      flex-direction: column;
    }
    .main .item{
      padding: 12px;
    }
    .main .item .time{
      display: flex;
      /* padding: 8px 0; */
      color: #888888;
    }
    .time .day{
      width: 40%;
    }
    .time .expend{
      width: 30%;
      text-align-last: right;
    }
    .time .income{
      width: 30%;
      text-align-last: right;
    }
    .item .detail{
      padding-left: 12px;
    }
    .item .detail .row{
      display: flex;
      position: relative;
      padding: 12px 0;

    }
    .item .detail .row::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #888888;
      width: 100%;
    } 
    .item .row div{
      width: 50%;
    }
    .item .row div:last-child{
      text-align: right;
    }
</style>