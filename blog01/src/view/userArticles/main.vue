<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-30 08:40:53
 * @LastEditTime: 2020-12-16 10:07:47
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="main-box">
    <div class="article-main">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="标题" width="400">
          <template slot-scope="scope">
            <div
              slot="reference"
              class="name-wrapper"
              @click="goTo('blog', scope.row.articleId)"
              style="cursor: pointer"
            >
              <span>{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">
              {{ dateformat(scope.row.date) }}</span
            >
          </template>
        </el-table-column>
        <el-table-column label="阅读量" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.count }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.articleId)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <page-vue :total="totalSize" @pageChange="pageChange"></page-vue>
    </div>
  </div>
</template>
<script>
import pageVue from "@/components/common/pagination.vue";
import { getUserBlog, deleteBlog } from "@/request/ajax";
import { dateFormat } from "../../utils/help.js";
export default {
  components: {
    pageVue,
  },
  data() {
    return {
      tableData: [],
      totalSize: 0,
      pageNo: 1,
    };
  },
  methods: {
    dateformat: dateFormat,
    pageChange(pageNo) {
      this.getData(pageNo);
    },
    goTo(type, id) {
      if (type == "blog") this.$store.commit("allpaper/setarticleId", id);
      this.$router.push({ name: type, params: { type: "edit" } });
    },
    handleEdit(row) {
      this.$store.commit("allpaper/setcurpaper", row);
      this.$router.push({ name: "edit", params: { type: "edit" } });
    },
    async handleDelete(articleId) {
      const res = await deleteBlog("delPaper", articleId);
      if (res === "ok") {
        this.tableData = this.tableData.filter((item) => {
          item.articleId != articleId;
        });
      }
      this.getData(this.pageNo);
      this.$message.success("删除成功");
    },
    async getData(pageNo = 1) {
      this.pageNo = pageNo;
      const res = await getUserBlog(
        "userpaper",
        sessionStorage.getItem("username"),
        pageNo
      );
      this.tableData = res.data;
      this.totalSize = res.total;
    },
  },
  mounted() {},
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
.main-box {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  .article-main {
    width: 80%;
  }
  .el-table {
    margin-top: 10px;
    opacity: 0.8;
    td {
      padding: 3px 0;
    }
  }
}
</style>