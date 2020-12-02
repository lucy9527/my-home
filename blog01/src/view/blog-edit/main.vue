<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-02 21:20:12
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
        <!-- <el-form-item label="插入视频:" @click="click">
          <input
            id="videobtn"
            type="file"
            value="Click me"
            accept="image/*"
            capture="user"
          />
        </el-form-item> -->
        <el-form-item label="选择图片:">
          <div class="img-filter">
            <div class="img-box">
              <img :src="img1" alt="暂无" />
              <input type="file" @click="clicked('img1')" @change="change" />
            </div>
            <div class="img-box">
              <img :src="img2" alt="../../assets/images/zhanwei.jpg" />
              <input type="file" @click="clicked('img2')" @change="change" />
            </div>
            <div class="img-box">
              <img :src="img3" alt="../../assets/images/zhanwei.jpg" />
              <input type="file" @click="clicked('img3')" @change="change" />
            </div>
            <div class="img-box">
              <img :src="img4" alt="../../assets/images/zhanwei.jpg" />
              <input type="file" @click="clicked('img4')" @change="change" />
            </div>
          </div>
          <!-- <el-input v-model="article.picture"></el-input> -->
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
// import { ip1 } from "./main.js";
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
        // video: "",
        picture: "",
      },
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      curclick: "",
    };
  },
  methods: {
    clicked(type) {
      this.curclick = type;
    },
    change(e) {
      console.log(e.target.files);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        this[this.curclick] = reader.result;
      };
    },
    onSubmit() {
      // var input = document.getElementById("videobtn");
      // alert("提交");
    },
    goTo(type) {
      this.$router.push(type);
    },
    click() {},
  },
  mounted() {
    // var p1 = ip1();
    // console.log(p1);
    // p1.then((data) => {
    //   console.log(data);
    // });
  },
};
</script>

<style lang="scss" src="./main.scss"></style>