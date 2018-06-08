<template>
  <div :class="$style.container">
    <div :class="$style.item" v-for="item in 4" :key="item">
      {{item}}
    </div>
  </div>
</template>

<style lang="postcss" module>
body {
  margin: 0;
  background-color: rgba(248, 248, 248, 1);
}

.container {
  display: flex;
  height: 82pr;
  margin: 16pr;
}

.item {
  flex-basis: 25%;
    border-radius: 8pr;
    margin: 0 8pr;
  background: red;
}

</style>

<script>
export default {
  data: () => ({}),
  methods: {
    test() {
      // console.log(1);
    }
  },
  created() {
    console.log("ok");
  }
};
</script>

TODO：414*114(多0.5)--82+16+16pr