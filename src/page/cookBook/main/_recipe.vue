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
:root {
  --containerMargin: 16pr;
  --containerHeight: 1.333333;
  --infoHeight: 0.25;
  --imgBg: {
    background: rgba(0, 0, 0, 0.5) no-repeat center/cover;
  }
}

.container {
  @apply --imgBg;
  height: calc((100vw - var(--containerMargin) * 2) / var(--containerHeight));
  margin: var(--containerMargin);
  border-radius: 16pr;
  overflow: hidden;
  position: relative;
}

.info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(var(--infoHeight) * 100%);
  box-sizing: border-box;
  padding: 8pr 24pr;
  overflow: hidden;
  line-height: 1.5;
  display: flex;
  color: white;
}

.blur {
  @apply --imgBg;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: calc(100% / var(--infoHeight));
  transform: translate(0px, calc(100% * var(--infoHeight) - 100%)) scale(1.35);
  filter: blur(20px);
}

.left {
  min-width: 80%;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.right {
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.name {
  font-size: 20pr;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-basis: 100%;
}

.duration {
  font-size: 16pr;
}

.label {
  font-size: 32pr;
  padding-left: 16pr;
}
</style>

<script>
export default {
  name: "recipe",
  props: {
    img: {
      type: String,
      // default:require('@static/image/224-505.jpg')
      // default:require('@static/image/300-450.jpg')
      // default:require('@static/image/500-500.jpg')
      default: require("@static/image/558-450.jpg")
      //  default:require('@static/image/660-440.jpg')
    },
    name: {
      type: String,
      default: "北海道中种吐司"
    },
    duration: {
      type: String,
      default: "10h 30m"
    },
    label: {
      type: String,
      default: "22"
    }
  },
  data: () => ({}),
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.img})`
      };
    }
  }
};
</script>

// TODO:
// 1.图片懒加载
// 2.icon
// 3.页面跳转--进入详情---点击区域为非info的区域
// 4.点击事件---食谱已经加入今日菜单状态标记---右边框1pr颜色待定--长度为容器高或者info高--点击区域为info