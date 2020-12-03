<!--
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-19 10:25:40
 * @LastEditTime: 2020-12-03 20:14:00
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
        username: "",
        password: "",
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
        console.log("res", res);
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

<style lang="scss">
@import "./index";
.login-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include center;
  .login-container {
    width: 35%;
    height: 30%;
    border: 1px solid lightblue;
    background-color: rgb(199, 237, 204);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .login-input {
      @include center;
      .input-box {
        display: flex;
        font-size: 13px !important;
        line-height: 28px !important;
        padding: 10px 10px 10px 0;
        label {
          width: 100px;
        }
        .el-input {
          @include inputBox;
        }
      }
    }
    .login-btn {
      .el-button {
        span {
          padding: 0 90px;
        }
      }
    }
  }
}
</style>