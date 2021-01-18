<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-12-18 09:24:05
 * @LastEditTime: 2021-01-18 19:12:29
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="canvas_box" ref="canvas">
    <el-tabs type="border-card">
      <el-tab-pane label="饼图统计">
        <canvas ref="pie" id="myCanvas" width="500" height="350"></canvas>
      </el-tab-pane>
      <el-tab-pane label="条形图统计">
        <canvas ref="bar" id="myBar" width="500" height="350"></canvas>
      </el-tab-pane>
      <el-tab-pane label="折线图统计">
        <canvas ref="line" id="myLine" width="500" height="350"></canvas>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import drawLine from "./line.js";
import drawBar from "./bar.js";
import draw from "./pie.js";

export default {
  props: ["dataList"],
  data() {
    return {};
  },
  watch: {
    dataList: {
      immediate: true,
      handler: function (newV) {
        this.drawCanvas(newV);
      },
    },
  },
  methods: {
    drawCanvas(datas) {
      var trueCount = 0;
      // var waitCount = 0;
      datas.forEach((element) => {
        if (element.label === "true") trueCount += 1;
      });
      // datas.forEach((element) => {
      //   if (element.end > new Date().getTime()) waitCount += 1;
      // });
      var doingCount = datas.length - trueCount;
      var data = [
        {
          title: "已完成",
          num: trueCount,
        },
        // {
        //   title: "已逾期",
        //   num: waitCount,
        // },
        {
          title: "未完成",
          num: doingCount,
        },
      ];
      console.log("data", data);
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
  },
  mounted() {
    this.drawCanvas(this.dataList);
  },
};
</script>

<style>
</style>