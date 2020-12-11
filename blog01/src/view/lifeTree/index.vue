<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-09 13:40:36
 * @LastEditTime: 2020-12-11 16:28:32
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
              {{ dateformat(item.dateBegin) }}
            </div>
            <div class="node__text">
              {{ item.content }}
            </div>
            <div class="node-delete">
              <el-button
                @click="deleteNode(item.lifenodeId)"
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
    </el-dialog>
  </div>
</template>

<script>
import headerVue from "@/components/common/header.vue";
import { dateFormat, getRandomId } from "../../utils/help.js";
import addDialog from "../../components/lifeTree/addDialog.vue";
import {
  addLifeNode,
  deleteLifeNode,
  getLifeTree,
} from "../../request/lifeTreeApi.js";
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
      data.dateBegin = data.dateBegin.getTime();
      data.dateEnd = data.dateEnd.getTime();
      data.lifenodeId = this.getId() + sessionStorage.getItem("username");
      var res = await addLifeNode("addLife", data);
      if (res === "Y") {
        this.treeData.push(data);
      } else {
        console.log("nmb");
      }
    },
    async deleteNode(id) {
      const res = await deleteLifeNode("deleteLife", id);
      this.treeData = this.treeData.filter((item) => item.lifenodeId != id);
      console.log(res);
    },
    async getall() {
      const res = await getLifeTree("allLife");
      this.treeData = res;
    },
  },
  created() {
    this.getall();
  },
};
</script>

<style lang="scss" src='./index.scss'></style>