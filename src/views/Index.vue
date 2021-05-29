<template>
  <div class="hello">
    <el-button type="success" @click="onClick1">成功按钮</el-button>
    <el-button type="fail" @click="onClick2">失败按钮</el-button>
    <p>这是首页</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    onClick1() {
      this.$message({
        message: "这是一条消息"
      })
    },
    onClick2() {
      this.$alert('这是内容', '标题', {
        confirmButtonText: "试试",
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  p {
    color: red;
  }
</style>
