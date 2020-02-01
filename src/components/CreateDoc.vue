<template>
    <div>
        <span class="create-doc-header-text">创建文档</span>
        <div style="float:right;margin-top:-45px;">
            <el-button type="text" @click="returnHome">返回首页</el-button>
            <!-- <el-button type="text">首页</el-button>
            <el-button type="text">首页</el-button> -->
        </div>
        <hr>
        <el-form :inline="true" :model="createDocForm" :rules="rules"  style="margin-top:30px;" size="medium" ref="ruleForm" label-width="150px">
            <el-form-item label="文档名称" prop="docName">
                <el-input v-model="createDocForm.docName" placeholder="文档名称"></el-input>
            </el-form-item>

            <el-form-item label="文档编码" prop="docCode">
                <el-select v-model="createDocForm.docCode" placeholder="文档编码">
                <el-option label="c001" value="00c"></el-option>
                <el-option label="v001" value="00v"></el-option>
                <el-option label="d001" value="00d"></el-option>
                <el-option label="w001" value="00w"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="创建时间">
                <el-date-picker v-model="createDocForm.createTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>

            <div style="margin-left:-19px;">
                <el-form-item label="创建者">
                <el-input v-model="createDocForm.creator"></el-input>
                </el-form-item>

                <el-form-item label="文档作者" prop="docOwner">
                    <el-input v-model="createDocForm.docOwner"></el-input>
                </el-form-item>

                <el-form-item label="修改时间">
                    <el-date-picker v-model="createDocForm.modifyTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
            </div>

            <div style="margin-left:-376px;">
                <el-form-item label="类别申明" prop="typeMark">
                    <el-radio-group v-model="createDocForm.typeMark">
                        <el-radio label="禁止转载"></el-radio>
                        <el-radio label="允许转载"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="文档层级" prop="docLevel">
                    <el-select v-model="createDocForm.docLevel" placeholder="文档编码">
                        <el-option label="机密" value="001"></el-option>
                        <el-option label="绝密" value="002"></el-option>
                        <el-option label="秘密" value="003"></el-option>
                        <el-option label="内部公开" value="004"></el-option>
                        <el-option label="全部公开" value="005"></el-option>
                    </el-select>
                </el-form-item>
            </div>

            <div style="margin-left:-201px;">
                <el-form-item label="打开共享" prop="openShare">
                    <el-switch v-model="createDocForm.openShare"></el-switch>
                </el-form-item>
                <el-form-item label="资产类型">
                    <el-select v-model="createDocForm.assetsType" placeholder="文档编码">
                        <el-option label="机密" value="001"></el-option>
                        <el-option label="绝密" value="002"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="附加信息" prop="additionalInfos">
                <el-checkbox-group v-model="createDocForm.additionalInfos">
                    <el-checkbox label="美食" name="additionalInfos1"></el-checkbox>
                    <el-checkbox label="地推活动" name="additionalInfos"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            </div>

            <div style="margin-left:-380px;">
                <el-form-item label="文档来源" prop="docResource">
                    <el-select v-model="createDocForm.resource" placeholder="文档来源">
                        <el-option label="转载" value="borrow"></el-option>
                        <el-option label="原创" value="resource"></el-option>
                        <el-option label="网络" value="network"></el-option>
                        <el-option label="报纸" value="newspaper"></el-option>
                        <el-option label="特刊" value="book"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文档备注" prop="comments">
                    <el-input type="textarea" v-model="createDocForm.comments"></el-input>
                </el-form-item>
            </div>
           
            <div style="margin-top:20px;">
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            createDocForm: {
                docName: '',
                docCode: '',
                comments: '',
                resource: '',
                additionalInfos: [],
                assetsType: '',
                docLevel: '',
                typeMark: true,
                docOwner: '',
                openShare: false,
                createTime: '',
                modifyTime: ''
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
    methods: {
        returnHome() {
            this.$router.push("/HomePage");
        },
        submitForm() {
            let createDocFormValues = this.createDocForm;
            console.log(`Submit Form Values: ${JSON.stringify(createDocFormValues)}`);
        },
        resetForm() {
            let docForm = this.createDocForm;
            // this.docForm.setValues('');
        }
    }
}
</script>

<style scoped>

.create-doc-header-text {
    font-size:16px;
    margin-top:-35px;
    margin-left:20px;
    float:left;
    font-weight: bold;
}


</style>


