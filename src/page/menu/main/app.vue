<template>
  <div>
    <div :class="$style.info">
      <div :class="$style.date">5月31日 星期四</div>
      <div :class="$style.down">
        <span :class="$style['from-now']">今天</span>
        <div :class="$style.num">
          21道
          <!-- <div :class="$style.one">10</div> -->
          <!-- <div :class="$style.two">1</div> -->
          <!-- <div :class="$style.three">10</div> -->
        </div>
      </div>
    </div>
    <div :class="$style.container" @scroll="test">
      <recipe v-for="item in 10" :key="item"></recipe>
    </div>
  </div>

</template>

<style lang="postcss" module>
body {
  margin: 0;
}

.info {
  // height: 200px;
  margin: 16pr 16pr 16pr 16pr;
  line-height: 1.5;
}

.date {
  font-size: 14pr;
  color: rgb(187, 187, 187);
}

.down{
  display: flex;
  justify-content: space-between;
  align-items: flex-end
}

.from-now {
  font-size: 22pr;
  font-weight: bold;
  // margin-right: 20px;
}

.num{
  font-size: 14pr;
  color: rgb(187, 187, 187);
  height:21px;
  // padding: 0 8pr;
  display: flex;
  //  margin-right: 0px;
}

.one{
  padding: 0 4pr;
  background: lightblue;
   color: white;
   min-width: 21pr;
   text-align: center
}

.two{
 padding: 0 4pr;
 background: lightgreen;
 color:white;
 min-width: 21pr;
 text-align: center
}

.three{
   padding: 0 4pr;
   color: white;
  background: lightcoral;
  min-width: 21pr;
  text-align: center
}

.container {
  height: calc(100vh - 70pr);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

<script>
import Recipe from "./_recipe";

export default {
  components: { Recipe },
  data: () => ({}),
  methods: {
    test() {
      // console.log(1);
    }
  }
};
</script>

TODO：
1.性能优化--虚拟滚动
2.滚动方向监听等跟滚动相关的数据信息，如需要的话