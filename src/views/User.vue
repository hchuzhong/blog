<template>
  <div class="hello">
    <p>这是用户页面</p>
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
  @color: blue;
  p {
    color: @color;
  }
</style>
