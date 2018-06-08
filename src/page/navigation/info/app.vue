<template>
  <div>
    <div :class="$style.header">
      <div :class="$style.left"></div>
      <div :class="$style.right"></div>
    </div>
    <!-- 这里在下个版本可以添加统计信息显示 -->
  </div>
</template>

<style lang="postcss" module>
body {
  margin: 0;
  background-color: rgba(248, 248, 248, 1);
}
.header {
  position: fixed;
  height: 32pr;
  padding: 8pr;
  top: 0;
  left: 0;
  right: 0;
  background: red;
  display: flex;
  justify-content:space-between;
}

.left {
  flex-basis: 32pr;
  background: yellow;
}

.right {
  flex-basis: 32pr;
  background: yellow;
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