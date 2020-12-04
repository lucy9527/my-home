<!--
 * @Description: 首页主题部分
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-04 18:49:11
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="main">
    <div class="main-content">
                  <img v-if="item.img1 !== ''" :src="img1" alt="#" />
      <div class="blog-box" v-for="item in blogData" :key="item">
        <div class="blog-intro">
          <div class="blog-name hand" @click="goTo('content')">
            <p>{{item.title}}</p>
            <p>{{item.intro}}</p>
          </div>
          <div class="blog-date">2020-1-12</div>
        </div>
        <div class="blog-part">
          <div class="blog-img" >
            <img v-if="item.img1 !== ''" :src="img1" alt="#" />
            <!-- <img v-if="item.img2 !== ''" :src="item.img2" alt="#" />
            <img v-if="item.img3 !== ''" :src="item.img3" alt="#" />
            <img v-if="item.img4 !== ''" :src="item.img4" alt="#" /> -->
          </div>
          <div class="blog-content">
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqData} from '@/request/ajax'
export default {
  data() {
    return {
      blogData:'',
      img1:""
    }
  },
  methods: {
    goTo(type) {
      this.$router.push(type);
    },
    async reqAarticle(){
      const res = await reqData('allpaper')
      // this.blogData = res
      console.log(res);
    }
  },
  mounted() {
    this.reqAarticle()
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