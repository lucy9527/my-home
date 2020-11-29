<template>
    <div class="main">
      <div class="main-content">
        <div class="blog-box">
          <div class="blog-intro">
            <div class="blog-name">百家讲坛</div>
            <div class="blog-date">2020-1-12</div>
          </div>
          <div class="blog-part">
            <div class="blog-img">
              <img src="../../assets/images/bjjt.jpg" alt="#" />
            </div>
            <div class="blog-content">三国演义:诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，最终司马炎一统三国，建立晋朝的故事</div>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-intro">
            <div class="blog-name">vue</div>
            <div class="blog-date">2020.01.02</div>
          </div>
          <div class="blog-part">
            <div class="blog-img">
              <img src="../../assets/images/vue.jpg" alt="" />
            </div>
            <div class="blog-content">vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{

  }
}
</script>
<style lang="scss">
.main{
  width: 100%;
  min-width: 1300px;
  display: flex;
  justify-content: space-around;
  .main-content{
    width: 60%;
    border: 1px solid blue;
    .blog-box{
      height: 150px;
      padding: 10px 20px;
      .blog-intro{
        display: flex;
        height: 30px;
        justify-content: space-between;
        align-items: flex-end;
        .blog-name{
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          height: 26px;
        }
        .blog-date{
          font-size: 14px;
          font-weight: 300;
          line-height: 20px;
          height: 20px;
        }
      }
      .blog-part{
        height: 120px;
        display: flex;
        justify-content: space-start;
        padding: 5px 0;
        img{
          height: 100%;
          width: 150px;
          border-radius: 10px;
        }
        .blog-content{
          text-align: justify;
          padding: {
            left: 20px;
            top: 10px;
            right: 0;
            bottom: 20px
          }
        }
      }
    }
  }
}
</style>