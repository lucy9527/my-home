<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 10:25:40
 * @LastEditTime: 2020-12-08 11:21:26
 * @LastEditors: HongXuan.Lu
-->
<template>
  <div class="login-box">
    <div class="login-container">
      <div class="login-input">
        <div>
          <div class="input-box">
            <label for="username">用户名：</label>
            <el-input
              id="username"
              v-model="userData.username"
              suffix-icon="el-icon-user"
            ></el-input>
          </div>
          <div class="input-box">
            <label for="password">密码：</label>
            <el-input
              id="password"
              v-model="userData.password"
              suffix-icon="el-icon-lock"
            ></el-input>
          </div>
        </div>
      </div>
      <div>
        <a href="javascript:void(0);" @click="register"> 注册 </a>
      </div>
      <div class="login-btn">
        <el-button type="primary" @click="loginBtn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/request/ajax";
export default {
  name: "Login",
  data() {
    return {
      userData: {
        username: "lhx",
        password: "123456",
      },
    };
  },
  methods: {
    isEmpty() {
      if (this.userData.username.trim() == "") {
        this.$message.error("用户名不能为空");
        return false;
      }
      if (this.userData.password.trim() == "") {
        this.$message.error("密码不能为空");
        return false;
      }
      return true;
    },
    //-----------存储用户登录信息-------------
    storeUser(userData) {
      sessionStorage.setItem("username", userData.username);
      sessionStorage.setItem("password", userData.password);
    },
    async loginBtn() {
      if (this.isEmpty()) {
        const res = await request("login", this.userData);
        if (res === "yes") {
          this.$message.success("登录成功！");
          this.$router.push("home");
          this.storeUser(this.userData);
        } else {
          this.$message.error("登录失败！用户名或密码错误");
        }
      }
    },
    async register() {
      if (this.isEmpty()) {
        const res = await request("register", this.userData);
        console.log(res);
        if (res === "yes") {
          this.$message.success("注册成功！");
          this.$router.push("home");
          this.storeUser(this.username, this.password);
        } else {
          this.$message.error("注册失败！用户名已存在");
        }
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" src="./index.scss"></style>