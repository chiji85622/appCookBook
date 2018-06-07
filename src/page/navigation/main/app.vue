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
body{
  margin: 0;
  background-color: rgba(248,248,248,1)
}

.container{
  height: 100vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.recipe{
  height: 60pr;
  /* width: 100%; */
  margin: 16pr;
  border-radius: 8pr;
  background: red
}
.aa{
  height: 60pr;
  /* width: 100%; */
  margin: 16pr ;
  /* border-radius: 8pr; */
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.a{
  flex-basis: 50%;
  height: 24pr;
  width: 24pr;
  margin: 8pr;
  text-align: center;
  background-color: white
}

.ac{
  height: 60pr;
  /* width: 100%; */
  margin: 16pr;
  border-radius: 8pr;
  background: red;
  position: absolute;
  bottom: 0;
left: 0;
right: 0;
}
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