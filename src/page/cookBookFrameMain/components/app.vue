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
    lits: Array(200),
    a:require('@static/image/224-505.jpg'),
    pic:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528108010640&di=ba1cbd1cc78a6ef6eaae5349be4970c4&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2014%2F305%2F10%2FLFZWH7G58B43.jpg"
    // pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528102890956&di=0d27bed786b7cfa5edeb53add7666966&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160804%2F9-160P4201Q8.jpg',
  }),
  methods: {
    test() {
      console.log(1);
    }
  },
  created() {
    // console.log(this.$style);
  },
  mounted() {}
};
</script>


