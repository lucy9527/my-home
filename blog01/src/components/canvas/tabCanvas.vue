<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-18 09:24:05
 * @LastEditTime: 2020-12-18 10:17:03
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="canvas_box" ref="canvas">
    <el-tabs type="border-card">
      <el-tab-pane label="饼图统计">
        <canvas ref="pie" id="myCanvas" width="300" height="200"></canvas>
      </el-tab-pane>
      <el-tab-pane label="条形图统计">
        <canvas ref="bar" id="myBar" width="300" height="200"></canvas>
      </el-tab-pane>
      <el-tab-pane label="折线图统计">
        <canvas ref="line" id="myLine" width="300" height="200"></canvas>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import drawLine from "./line.js";
import drawBar from "./bar.js";
import draw from "./pie.js";

export default {
  data() {
    return {};
  },
  mounted() {
    var data = [
      {
        title: "一月",
        num: 30,
      },
      {
        title: "二月",
        num: 20,
      },
      {
        title: "三月",
        num: 80,
      },
    ];
    var myBar = this.$refs.bar;
    var ctBar = myBar.getContext("2d");
    new drawBar(ctBar, data, myBar.width, myBar.height);

    var myLine = this.$refs.line;
    var ctLine = myLine.getContext("2d");
    new drawLine(ctLine, data, myLine.width, myLine.height);

    var myPie = this.$refs.pie;
    var ctPie = myPie.getContext("2d");
    new draw(ctPie, data);
  },
};
</script>

<style>
</style>