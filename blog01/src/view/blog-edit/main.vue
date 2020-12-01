<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-11-30 18:21:23
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="edit-box">
    <div class="edit-zone">
      <el-form ref="form" :model="article" label-width="80px">
        <el-form-item label="文章标题:">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容:">
          <el-button type="primary" @click="goTo('editor')">编辑</el-button>
        </el-form-item>
        <el-form-item label="插入视频:">
          <el-input v-model="article.video"></el-input>
        </el-form-item>
        <el-form-item label="展示图片:">
          <el-input v-model="article.picture"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
        video: "",
        picture: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("提交");
    },
    goTo(type) {
      console.log(type);
      this.$router.push(type);
    },
  },
};
</script>

<style lang="scss">
.edit-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .edit-zone {
    border: 1px solid yellow;
    width: 60%;
    padding: {
      left: 10px;
      top: 10px;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>