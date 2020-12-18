<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2020-12-18 09:13:13
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="leaveMsg">
    <header-vue type="leaveMsg"></header-vue>
    <div class="bgimg">
      <div class="tree-box">
        <div class="node-border" v-for="(item, index) in treeData" :key="index">
          <div class="msgNode">
            <div class="node__content">
              <div class="node__time">
                {{ dateformat(item.end) }}
              </div>
              <div class="node__text">
                {{ item.content }}
              </div>
              <div class="triangle-left"></div>
              <div class="triangle-right"></div>
              <div class="node__deal">
                <div>处理结果：</div>
                <div>待处理</div>
                <button>回复详情</button>
              </div>
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
    </el-dialog>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import { dateFormat, getRandomId } from "../../utils/help.js";
import addDialog from "../../components/leaveMsg/addDialog.vue";
import { addTaskNode, getTaskTree } from "../../request/taskTreeApi.js";
export default {
  components: {
    headerVue,
    addDialog,
  },
  data() {
    return {
      treeData: [],
      dialogVisible: false,
    };
  },
  methods: {
    editNode() {
      this.dialogVisible = true;
    },
    dateformat: dateFormat,
    getId: getRandomId,
    // ---------接口部分------------
    async submitAdd(data) {
      this.dialogVisible = false;
      data.end = data.end.getTime();
      data.tasknodeId =
        this.getId(2147483646) + sessionStorage.getItem("username");
      var res = await addTaskNode("addTask", data);
      if (res === "Y") {
        this.treeData.push(data);
      }
    },
    async getall() {
      const res = await getTaskTree("allTask");
      this.treeData = res;
    },
  },
  created() {
    this.getall();
  },
};
</script>

<style lang="scss" src='./index.scss'></style>