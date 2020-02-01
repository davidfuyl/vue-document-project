<template>
    <div>
        <el-dialog title="登录" :visible.sync="dialogFormVisible" width="40%;" top="20vh" :before-close="handleClose">
            <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="70px">
                <!-- <el-form-item label="用户名" :rules="[{ required: true, message: '请输入您的用户名', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                    <el-input v-model="loginForm.username" placeholder="请输入您的用户名"></el-input>
                </el-form-item> -->
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>

                <el-form-item label="密 码" prop="passwd">
                    <el-input type="password" v-model="loginForm.passwd" @keyup.enter.native="logIn" placeholder="请输入密码">
                </el-input>
                <p v-if='errorPwd' style="color:red;margin-top:-5px;font-size:12px;float:left;">{{this.errorMsg}}</p>
                 <!-- <a style="color:#02A388;font-size:13px;display:block;margin-top:8px;cursor:pointer;float:right;">忘记密码</a>      -->
                </el-form-item>
            <div style="position:relative;top:5px;">
              <el-button type="primary" size="midum" @click="logIn">登 录</el-button>
              <el-button @click="resetForm('loginForm')">重 置</el-button>
              <!-- <el-button id="#clickme">Pass Arguments</el-button> -->
            </div>
          </el-form>
        </el-dialog>
        <login-suc-dialog @showOrhideDia="showDialog" :dialogVisible="isShowOrHide" :userName="logonUserName"></login-suc-dialog>
    </div>
</template>


<script>
import loginSucDialog from '@/components/LoginSucDialog'

    export default {
        components: {
            loginSucDialog
        },
        data () {
            return {
                dialogFormVisible: true,
                isShowOrHide: false,
                logonUserName: '',
                errorPwd: false,
                errorMsg: '密码不正确，请重新输入',
                lang: '',
                loginForm: {
                    username: '',
                    passwd: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入您的用户名', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入您的密码', trigger: 'blur'  },
                        { min: 3, message: '密码长度必须多余 3 个字符', trigger: 'blur' },
                        { min: 3, message: '密码不正确，请重新输入', trigger: 'login' }
                    ]
                }
            }
        },
        mounted() {
            let lang = this.$route.query.lang === "zh" ? "en" : "zh";
            this.$i18n.locale = lang
        },
        methods: {
            logIn() {
                let username = this.loginForm.username;
                let passwd = this.loginForm.passwd;
                // let logonUserName = this.loginForm.username;
                console.log(this.logonUserName);
                if(username && username !== "" && passwd && passwd === "admin_123"){
                    this.isShowOrHide = true;
                    this.logonUserName = this.loginForm.username;
                }
                if(passwd !== 'admin_123'){
                    this.errorPwd = true;
                }
            },
            showDialog() {
                this.isShowOrHide = false;
                this.$router.push('/HomePage');
            },
            handleClose() {
                this.$router.push('/');
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.errorPwd = false;
            }
        }
}
</script>

<style scoped>

</style>

