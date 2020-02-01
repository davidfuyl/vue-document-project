<template>
    <div>
        <el-container class="regPageBackCls">
            <el-header>
                <p>请注册您的个人信息</p>
            </el-header>
                <el-main>
                    <el-form :model="regForm" status-icon :rules="regRules" ref="regForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' }]">
                            <el-input v-model.number="regForm.username" required placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="passwd" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                            <el-input type="password" v-model="regForm.passwd" required autocomplete="off" placeholder="请输入6位数字加字母"></el-input>
                        </el-form-item>
                        <el-form-item label="个人邮箱" prop="email" :rules="[{ required: true, message: '请输入您的邮箱', trigger: 'blur' }]">
                            <el-input type="email" v-model="regForm.email" required placeholder="请输入正确的邮箱" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
                            <el-button @click="resetForm('regForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
        </el-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            regForm: {
                username: '',
                passwd: '',
                email: ''
            },
            regRules: {
                username: '',
                passwd: '',
                email: ''
            }
        }
    },
    methods: {
        submitForm(regForm) {
            this.$router.push("/HomePage");
            console.log(this.regForm);
        },
        resetForm(regForm) {
            this.$refs[regForm].resetFields();
      }
    }
}
</script>

<style>
.regPageBackCls {
    background-color: tan;
    width: 41%;
    margin-left: 432px;
}




</style>


