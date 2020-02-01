<template>
    <div>
        <el-dialog title="编辑文档" class="editDocCls" :visible.sync="editDocDialog" :close-on-click-modal="false" 
            :show-close="false"
            top="10vh"
            :close-on-press-escape="false">
            <div style="margin-top:-30px;"><hr></div>
            <el-form :inline="true" :model="formData" :rules="rules">
            <div>
                <el-form-item label="文档名称" prop="docName">
                    <el-input v-model="formData.docName"></el-input>
                </el-form-item>
                <el-form-item label="文档编码" prop="docCode">
                    <el-input v-model="formData.docCode"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="创建时间">
                    <el-input v-model="formData.createTime"></el-input>
                </el-form-item>
                <el-form-item label="创建者">
                    <el-input v-model="formData.creator"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="文档来源" prop="docResource">
                    <el-input v-model="formData.docResource"></el-input>
                </el-form-item>
                <el-form-item label="文档版本">
                    <el-input v-model="formData.docVersion"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="文档类型">
                    <el-input v-model="formData.docType"></el-input>
                </el-form-item>
                <el-form-item label="文档大小">
                    <el-input v-model="formData.docSize"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="文档层级" prop="docLevel">
                    <el-input v-model="formData.docLevel" ></el-input>
                </el-form-item>
                <el-form-item label="资产类别">
                    <el-input v-model="formData.assetsType" ></el-input>
                </el-form-item>
            </div>
            <div style="margin-top:25px;">
                <el-form-item>
                    <el-button type="primary" @click="confirmBtn">{{$t('buttons.confirm')}}</el-button>
                    <el-button @click="cancelBtn">{{$t('buttons.cancel')}}</el-button>
                </el-form-item>
            </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // editDocDialog: true,
            formData: {
                docName: '',
                creator: '',
                docSource: '',
                docType: '',
                assetsType: '',
                docSize: '',
                docVersion: '',
                docLevel: '',
                createTime: '',
                docCode: '',
            },
            rules: {
                docName: [{required: true, message: '请输入文档名称',trigger: 'blur'}],
                docCode: [{required: true, message: '请输入文档编码',trigger: 'blur'}],
                docOwner: [{required: true, message: '请输入文档作者',trigger: 'blur'}],
                docResource: [{required: true, message: '请输入文档来源',trigger: 'blur'}],
                docLevel: [{required: true, message: '请输入文档层级',trigger: 'blur'}],
            }
        }
    },
    props: {
        editDocDialog: Boolean,
        formDetailData: Array,
        lang: String
    },
    mounted() {
        // this.formData = this.formDetailData;
    },
    methods: {
        confirmBtn() {
            console.log('confirmBtn');
        },
        cancelBtn() {
            this.$emit("showEditDialog");
        }
    },
    watch: {
        formDetailData: {
            // this.docCode = this.formData.docCode;

        }
    }
}
</script>

<style scoped>
.demo-form-inline {
    color:darkgrey;
}
.el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: black;
    font-weight: bold;
    /* margin-left: -559px; */
}
.el-dialog__header {
    background-color: #acccac;
}
.editDocCls {
    float: left;
}
</style>


