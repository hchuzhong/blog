<template>
  <div class="hello">
    <p>这是我的页面</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
  @import "../assets/base.less";

  p {
    color: @themeColor;
  }
</style>
