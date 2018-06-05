<template>
  <div :class="$style.container" @scroll="test">
    <recipe v-for="item in 1" :key="item"></recipe>
  </div>
</template>

<style lang="postcss" module>
@import "../style/app";
</style>

<script>
import Recipe from "./recipe";

export default {
  components: { Recipe },
  data: () => ({
  
  }),
  methods: {
    test() {
      console.log(1);
    }
  },
};
</script>

TODO：
1.性能优化--虚拟滚动
2.滚动方向监听等跟滚动相关的数据信息，如需要的话