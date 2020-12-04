<!--
 * @Description: 首页主题部分
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-04 13:13:44
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="main">
    <div class="main-content">
      <div class="blog-box">
        <div class="blog-intro">
          <div class="blog-name hand" @click="goTo('content')">百家讲坛</div>
          <div class="blog-date">2020-1-12</div>
        </div>
        <div class="blog-part">
          <div class="blog-img">
            <img src="../../assets/images/bjjt.jpg" alt="#" />
          </div>
          <div class="blog-content">
            三国演义:诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，最终司马炎一统三国，建立晋朝的故事
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqData} from '@/request/ajax'
export default {
  methods: {
    goTo(type) {
      this.$router.push(type);
    },
    async reqAarticle(){
      const res = await reqData('allpaper')
      console.log(res);
    }
  },
  created() {
    this.reqAarticle()
    console.log(reqData);
  },
};
</script>
<style lang="scss">
.main {
  width: 100%;
  min-width: 1300px;
  display: flex;
  justify-content: space-around;
  .main-content {
    width: 60%;
    border: 1px solid blue;
    .blog-box {
      height: 150px;
      padding: 10px 20px;
      .blog-intro {
        display: flex;
        height: 30px;
        justify-content: space-between;
        align-items: flex-end;
        .blog-name {
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          height: 26px;
        }
        .blog-date {
          font-size: 14px;
          font-weight: 300;
          line-height: 20px;
          height: 20px;
        }
      }
      .blog-part {
        height: 120px;
        display: flex;
        justify-content: space-start;
        padding: 5px 0;
        img {
          height: 100%;
          width: 150px;
          border-radius: 10px;
        }
        .blog-content {
          text-align: justify;
          padding: {
            left: 20px;
            top: 10px;
            right: 0;
            bottom: 20px;
          }
        }
      }
    }
  }
}
</style>