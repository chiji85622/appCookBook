<template>
  <div :class="$style.container">
    <div :class="$style.aa">
      <div :class="$style.a">1</div>
      <div :class="$style.a">2</div>
    </div>
    <div :class="$style.recipe">1</div>
    <div :class="$style.recipe">1</div>
    <div :class="$style.recipe">1</div>
    <div :class="$style.ac">1</div>
  </div>
</template>

<style lang="postcss" module>
@import "../style/app";
</style>

<script>
export default {
  
  data: () => ({
  
  }),
  methods: {
    test() {
      // console.log(1);
    }
  },
  created(){
    console.log('ok')
  }
};
</script>

TODO：124*716