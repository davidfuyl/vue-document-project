<template>
    <div >
      <hr style="color:red;" />
      <el-container>
        <el-aside style="width:60%;">
          <el-card class="box-card">
            <div>
            </div>
          </el-card>
        </el-aside>
        <el-main style="width:40%;">
          <el-form ref="form" :model="loginForm" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="loginForm.username" placeholder="请输入用户名..."></el-input>
              <div v-show="usernameEmptyMsgShow" style="color:red;">{{erroAndEmptyMsg.usernameEmptyMsg}}</div>
            </el-form-item>

            <el-form-item label="密 码">
              <el-input type="password" v-model="loginForm.passwd"></el-input>
              <div v-show="pwdErrorMsgShow" style="color:red;">{{erroAndEmptyMsg.pwdErrorMsg}}</div>
              <div v-show="pwdEmptyMsgShow" style="color:red;">{{erroAndEmptyMsg.pwdEmptyMsg}}</div>
            </el-form-item>
            <div style="position:relative;top:20px;">
              <el-button type="primary" @click="logIn">登 录</el-button>
              <!-- <el-button @click="resetForm(form)">重 置</el-button> -->
              <a style="color:#02A388;font-size:12px;display:block;margin-top:8px;cursor:pointer;">忘记密码了吗？</a>
            </div>
          </el-form>
        </el-main>
      </el-container>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
              loginForm: {
                username: '',
                passwd: '',
              },
              erroAndEmptyMsg: {
                pwdErrorMsg: '',
                pwdEmptyMsg: '',
                usernameEmptyMsg: ''
              },
              usernameEmptyMsgShow: false,
              pwdEmptyMsgShow: false,
              pwdErrorMsgShow: false
            }
        },
        methods: {
            logIn() {
                let username = this.loginForm.username;
                let passwd = this.loginForm.passwd;

                if(!username && username === ""){
                  this.usernameEmptyMsgShow = true;
                  this.erroAndEmptyMsg.usernameEmptyMsg = "用户名不能为空";
                  return;
                }else{
                  this.usernameEmptyMsgShow = false;
                }
                if(!passwd && passwd === ""){
                  this.pwdEmptyMsgShow = true;
                  this.erroAndEmptyMsg.pwdEmptyMsg = "密码不能为空，请重写输入";
                  return;
                }else if(passwd !== "admin_123"){
                  this.pwdErrorMsgShow = true;
                  this.pwdEmptyMsgShow = false;
                  this.erroAndEmptyMsg.pwdErrorMsg = "密码错误，请重写输入";
                }else{
                  // this.pwdErrorMsgShow = false;
                  this.pwdErrorMsgShow = false;
                  alert('logon successfully!');
                }

                /* if(!username && username === "" || passwd && passwd === "admin_123"){
                  this.usernameErrorMsgShow = true;
                  this.usernameEmptyMsg = "用户名不能为空";
                }*/
                /* if(username && username !== "" && !passwd && passwd === "admin_123"){
                  alert('logon successfully!');
                  this.erroAndEmptyMsg = {}
                }  */
                // alert(`Username: ${this.loginForm.username} Password: ${this.loginForm.passwd}`);
            },
            resetForm(resetForm) {
              this.$refs.resetForm.reset("");
            }
        }
    }


</script>

<style scoped>

</style>
