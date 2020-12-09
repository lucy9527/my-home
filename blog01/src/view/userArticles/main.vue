<template>
  <div class="main-box">
    <div class="article-main">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="标题" width="400">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <span>{{ scope.row.title }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px"
              >{{ scope.row.date }}2020-01-01</span
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
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getUserBlog } from "@/request/ajax";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.$store.commit("allpaper/setcurpaper", row);
      this.$message.warning('还未开发')
      // this.$router.push("edit");
    },
    handleDelete() {
      this.$message.warning('还未开发')
    },
    async getData() {
      const res = await getUserBlog(
        "userpaper",
        sessionStorage.getItem("username")
      );
      this.tableData = res;
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
  display: flex;
  justify-content: space-around;
  .article-main {
    width: 80%;
  }
}
</style>