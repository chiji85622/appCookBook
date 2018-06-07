<template>
  <div :class="$style.container" @scroll="test">
    <recipe v-for="item in 1" :key="item"></recipe>
  </div>
</template>

<style lang="postcss" module>
body {
  margin: 0;
}

.container {
  height: 100vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.test {
  position: absolute;
  bottom: 32pr;
  left: 16pr;
  height: 46pr;
  width: 46pr;
  background-color: red;
  border-radius: 50%;
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