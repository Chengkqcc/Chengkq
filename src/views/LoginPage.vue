<template>
  <div class="login">
    <div class="form">
      <h3 class="title">Login Form</h3>
      <el-form :rules="rules" v-model="formData">
        <el-form-item prop="user">
          <el-input
            v-model="formData.user"
            placeholder="username"
           
          ></el-input>
        </el-form-item>
        <el-form-item prop="psd">
          <el-input
            v-model="formData.pw"
            placeholder="password"
            
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="upclick"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <p class="tips">username：admin &nbsp;&nbsp;password：any</p>
    </div>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "LoginPage",
  methods: {
    upclick() {
      this.login();
    },
    async login() {
      let user = this.formData.user;
      let pw = this.formData.pw;
      let { data } = await instance.post("/login", { user, pw });
      console.log(data);
      if (data.message == "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登陆成功",
          duration: 2000,
          onClose: () => {
            this.$router.push("/");
          },
        });
      }
      if (data.message == "failed") return this.$message.error("登录失败");
    },
  },
  data() {
      let userfn =function(rule,value,callback){
        console.log(rule)
        let reg =/^[0-9a-zA-Z_]{5,10}$/
        if(reg.test(value)){
            return
        }else{
            return callback(new Error("用户格式不对,用户名须为5-10长度字符"))       
        }
    }
        let pwdfn =function(rule,value,callback){
        console.log(rule)
        console.log(value)
        let gui =/^[a-zA-Z0-9]+$/
        if(gui.test(value)){
            return
        }else{
            return callback(new Error("用户格式不对,用户名须为5-10长度字符"))       
        }
    }
    return {
      formData: {
        user: "111",
        pw: "111",
      },
      rules: {
         user: [
             { validator: userfn, trigger: "blur" }
          ],
        psd: [{ validator: pwdfn, trigger: "blur" }],
      },
    };
  },
};
</script>
<style scoped>
.tips {
  color: #fff;
}
.login .btn {
  width: 100%;
}
.login {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
}
.title {
  color: #fff;
  text-align: center;
}
.login .form {
  width: 570px;
  height: 260px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130px;
  box-sizing: border-box;
  padding: 20px 20px 0px;
}
</style>