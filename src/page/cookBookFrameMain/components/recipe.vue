<template>
  <div :class="[$style.container,$style.test]" :style="bgImage">
    
    <div :class="$style.info">

      <div :class="$style.blur" :style="bgImage"></div>

      <div :class="$style.left">
        <div :class="$style.name">{{name}}</div>
        <div :class="$style.duration">{{duration}}</div>
      </div>

      <div :class="$style.right">
        <div :class="$style.label">{{label}}</div>
      </div>
      
    </div>
    
    <!-- 被选中的标记 -->
     <!-- <div style="width:24px;background:red;position:absolute;right:0;top:0;bottom:0"></div> -->
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
      default:require('@static/image/558-450.jpg')
      //  default:require('@static/image/660-440.jpg')
    },
    name:{
      type:String,
      default:'北海道中种吐司'
    },
    duration:{
      type:String,
      default:'10h 30m',
    },
    label:{
      type:String,
      default:'22'
    }
  },
  data: () => ({

  }),
  computed:{
    bgImage(){
      return {
        backgroundImage:`url(${this.img})`
      }
    }
  },
};
</script>

// TODO:
// 1.图片懒加载
// 2.icon
// 3.页面跳转--进入详情---点击区域为非info的区域
// 4.点击事件---食谱已经加入今日菜单状态标记---右边框1pr颜色待定--长度为容器高或者info高--点击区域为info