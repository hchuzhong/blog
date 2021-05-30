<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" />
          <figcaption>若愚</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" />
          <figcaption>若愚</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量
          ES6语法的同学阅读...
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import request from "../helpers/request";
import auth from "../api/auth";
import blog from "../api/blog";

window.request = request;
window.auth = auth;
window.blog = blog;

export default {
  props: {
    msg: String,
  },
  methods: {
    onClick1() {
      this.$message({
        message: "这是一条消息",
      });
    },
    onClick2() {
      this.$alert("这是内容", "标题", {
        confirmButtonText: "试试",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "../assets/base.less";

#index {
  .item {
    display: grid;
    grid: auto auto / 80px 1fr;
    margin: 20px 0;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      margin-left: 0;
      text-align: center;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      figcaption {
        font-size: 12px;
        color: @textLighterColor;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;

      & > span {
        color: @textLighterColor;
        font-size: 12px;
        font-weight: normal;
      }
    }

    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }
  }
}
</style>
