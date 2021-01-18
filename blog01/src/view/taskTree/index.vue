<!--
 * @Description: 任务树
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2021-01-18 19:03:17
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="taskTree">
    <header-vue type="taskTree"></header-vue>
    <div class="bgimg">
      <div class="tree-box">
        <div class="node-border" v-for="(item, index) in treeData" :key="index">
          <div class="tasknode">
            <!-- 随机宽度、随机颜色 -->
            <div
              class="node__content"
              :style="
                'width:' +
                (item.label === 'false'
                  ? 1100 -
                    Math.floor(
                      ((item.end > now ? item.end : now) - now) / 86400000
                    ) *
                      25
                  : 900) +
                'px; background-color:' +
                (item.label === 'false'
                  ? Math.floor((item.end - now) / 86400000) > 15
                    ? 'orange'
                    : Math.floor((item.end - now) / 86400000) > 3
                    ? 'yellowgreen'
                    : 'tomato'
                  : 'green')
              "
            >
              <div class="node__time">
                {{ dateformat(item.end) }}
              </div>
              <div class="node__text">
                {{ item.content }}
              </div>
              <div class="node-deal">
                <el-button
                  @click="dealNode(item)"
                  type="primary"
                  :icon="
                    item.label === 'true' ? 'el-icon-check' : 'el-icon-loading'
                  "
                  circle
                  >{{ item.label === "true" ? "已完成" : "处理中" }}</el-button
                >
              </div>
            </div>
            <div class="node-delete">
              <el-button
                @click="deleteNode(item.tasknodeId)"
                type="danger"
                icon="el-icon-delete"
                circle
              ></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" style="width: 200; background-color: 'rgba(red,0.5)'">
      <p class="edit">编辑添加任务：</p>
      <div>
        <el-button
          @click="editNode"
          type="primary"
          icon="el-icon-edit"
          circle
        ></el-button>
      </div>
    </div>
    <!-- 添加任务对话框 -->
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <add-dialog @submit="submitAdd"></add-dialog>
    </el-dialog>
    <!-- 跟新日志对话框 -->
    <el-dialog :visible.sync="dealVisible" width="30%">
      <deal-dialog @updateLogs="updateLog" :dealdata="curItem"></deal-dialog>
    </el-dialog>
    <canvas-vue :dataList="treeData"></canvas-vue>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import canvasVue from "@/components/canvas/tabCanvas.vue";
import { dateFormat, getRandomId } from "../../utils/help.js";
import addDialog from "../../components/taskTree/addDialog.vue";
import dealDialog from "./dealDialog/index.vue";
import {
  addTaskNode,
  deleteTaskNode,
  getTaskTree,
} from "../../request/taskTreeApi.js";
export default {
  components: {
    headerVue,
    addDialog,
    canvasVue,
    dealDialog,
  },
  data() {
    return {
      treeData: [],
      dialogVisible: false,
      dealVisible: false,
      curItem: {},
      now: new Date().getTime(),
    };
  },
  methods: {
    updateLog() {
      this.dealVisible = !this.dealVisible;
      this.getall();
    },
    dealNode(item) {
      this.curItem = item;
      this.dealVisible = !this.dealVisible;
    },
    editNode() {
      this.dialogVisible = !this.dialogVisible;
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
    async deleteNode(id) {
      const res = await deleteTaskNode("deleteTask", id);
      this.treeData = this.treeData.filter((item) => item.tasknodeId != id);
      console.log(res);
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