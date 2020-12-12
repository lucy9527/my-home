<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-12 15:31:08
 * @LastEditTime: 2020-12-12 19:32:37
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="page-box">
    <el-pagination
      background
      hide-on-single-page
      layout="prev, pager, next"
      :page-size="12"
      @current-change="currentPage"
      @prev-click="currentPage"
      @next-click="currentPage"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["total"],
  data() {
    return {};
  },
  methods: {
    currentPage(pageNo) {
      this.$emit("pageChange", pageNo);
    },
  },
};
</script>

<style lang="scss">
.page-box {
  .el-pagination {
    width: 800px;
  }
}
</style>