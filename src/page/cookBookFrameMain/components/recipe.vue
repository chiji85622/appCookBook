<template>
  <div :class="$style.container" :style="hei">


    <div :class="$style['blur-wrapper']">
      <div :class="$style['blur-img']" ref="aa" :style="hei"></div>

    </div>
  

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
  props: {
    img:{
      type:String,
      // default:require('@static/image/224-505.jpg')
      // default:require('@static/image/300-450.jpg')
      // default:require('@static/image/500-500.jpg')
      // default:require('@static/image/558-450.jpg')
       default:require('@static/image/660-440.jpg')
    }
  },
  data: () => ({
    i:null
  }),
  computed:{
    hei(){
      console.log(this.img)
      return {
        // backgroundImage:`url(${this.img})`
        backgroundImage:`url(${this.img})`
      }
    }
  },
  created() {
    // console.log(this.img)
    // const img = new Image()
    // img.onload=()=>{
    //   console.dir(img)
    //   console.log('w',img.width)
    //   console.log('h',img.height)
    //   this.i=img.src
    // }
    // img.src=this.img
    console.log(this.hei)
  },
  mounted(){
    console.dir(this.$refs.aa)
  }
};
</script>

