<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2020-12-09 21:18:40
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="devtree-box">
    <header-vue type="devtree"></header-vue>
    <div class="devTree">
      <div class="node-border" v-for="(item, index) in treeData" :key="index">
        <div class="lifenode">
          <!-- 随机宽度、随机颜色 -->
          <div class="node__content">
            <div class="node__time">
              <p>{{ item.date }}</p>
            </div>
            <div class="node__text">
              <p>
                {{ item.text }}
              </p>
            </div>
            <div class="nodedelete">
              <el-button
                @click="deleteNode"
                type="danger"
                icon="el-icon-delete"
                circle
              ></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button
        @click="editNode"
        type="primary"
        icon="el-icon-edit"
        circle
      ></el-button>
    </div>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import { dateFormat } from "../../utils/help.js";
export default {
  components: {
    headerVue,
  },
  data() {
    return {
      treeData: [
        {
          time: new Date(),
          text: "第一次记录",
        },
        {
          time: new Date(),
          text: "第二次记录",
        },
      ],
    };
  },
  mounted() {
    console.log(dateFormat("1111111111111"));
  },
};
</script>

<style lang="scss" src='./index.scss'></style>