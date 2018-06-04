<template>
  <div :class="$style.container">

    <!-- <div :class="$style.img"></div> -->
<img :src="pic" alt="" style="height:100%">
    <div :class="$style['blur-wrapper']">
      <!-- <div :class="$style['blur-img']"></div> -->
      <img :src="pic" alt="" :class="$style['blur-img-a']">
    </div>
    <!-- <div :class="$style.img"></div> -->
    <!-- <img :src="pic" alt="" style="width:100%"> -->

    <div :class="$style.info">
      <div :class="$style.left">
        <div :class="$style.name">
          北海道中种吐司
        </div>
        <div>10h 30m</div>
      </div>
      <div :class="$style.right">
        <div :class="$style.label">22</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" module>
@import "../style/recipe";
</style>

<script>
export default {
  name: "recipe",
  props: {},
  data: () => ({
    // pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528108010640&di=ba1cbd1cc78a6ef6eaae5349be4970c4&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2014%2F305%2F10%2FLFZWH7G58B43.jpg"
      pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528102890956&di=0d27bed786b7cfa5edeb53add7666966&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160804%2F9-160P4201Q8.jpg"
  }),
  created() {}
};
</script>

