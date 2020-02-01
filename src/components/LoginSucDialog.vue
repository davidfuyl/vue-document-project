<template>
    <div>
        <div style="text-align:left;">
            <el-dialog title="登录提示" :visible.sync="dialogVisible" width="30%" 
                :close-on-click-modal="false" 
                :show-close="false"
                :close-on-press-escape="false"
                :before-close="handleClose">
                <div v-text="welcomeMsg">{{ $store.state.userName }}</div>
                <div v-text="logSuccessMsg"><i class="el-icon-success"></i></div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @keyup.enter.native="confirmLogon" @click="confirmLogon">确 定</el-button>
                </span>
            </el-dialog>   
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dialogVisible: Boolean,
        userName: String
    },
    data() {
        return {
            welcomeMsg: 'Welcome!',
            logSuccessMsg: '登录成功！'
        }
    },
    mounted() {},
    methods: {
        confirmLogon() {
            this.$emit('showOrhideDia');
        },
        handleClose() {
            alert("hello");
        }
    }
}
</script>

<style scoped >

</style>





</style>


