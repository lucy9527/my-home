<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2020-12-10 13:49:56
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="lifeTree">
    <header-vue type="lifeTree"></header-vue>
    <div class="tree-box">
      <div class="node-border" v-for="(item, index) in treeData" :key="index">
        <div class="lifenode">
          <!-- 随机宽度、随机颜色 -->
          <div class="node__content">
            <div class="node__time">
              {{ dateformat(item.time) }}
            </div>
            <div class="node__text">
              {{ item.text }}
            </div>
            <div class="node-delete">
              <el-button
                @click="deleteNode(index)"
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
      <p class="edit">编辑添加：</p>
      <div>
        <el-button
          @click="editNode"
          type="primary"
          icon="el-icon-edit"
          circle
        ></el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <add-dialog @submit="submitAdd"></add-dialog>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import { dateFormat } from "../../utils/help.js";
import addDialog from "../../components/lifeTree/addDialog.vue";
export default {
  components: {
    headerVue,
    addDialog,
  },
  data() {
    return {
      treeData: [
        {
          time: "1111111111111",
          text: "第一次记录",
        },
        {
          time: "1111111112222",
          text: "第二次记录",
        },
        {
          time: "1111111111111",
          text: "第一次记录",
        },
        {
          time: "1111111112222",
          text: "第二次记录",
        },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    submitAdd() {},
    deleteNode(index) {
      console.log(index);
    },
    editNode() {
      this.dialogVisible = true;
    },
    dateformat: dateFormat,
  },
  mounted() {
    // console.log(dateFormat("1111111111111"));
  },
};
</script>

<style lang="scss" src='./index.scss'></style>