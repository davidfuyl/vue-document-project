<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <el-row :gutter="20" type="flex" class="row-bg" justify="space-between">
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                           <h4>{{$t('common.docDetailInfo')}}</h4>
                        </div>
                    </el-col>
                    <div>
                        <el-button type="text" @click="returnHomePage">返回</el-button>
                        <el-button type="text" @click="editDoc">编辑
                            <!-- <i class="el-icon-edit"</i> --></el-button>
                        <el-button type="text">删除
                            <!-- <i class="el-icon-delete"></i> --></el-button>
                        <el-button type="text">移动</el-button>
                    </div>
                </el-row>
            </div>
            <div v-for="docInfo in docDetailInfos" :key="docInfo"  style="line-height:80px;" class="text item">
                <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            {{$t('common.docName')}} : {{ docInfo.docName }}
                        </div>
                    </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docCode')}} : {{ docInfo.docCode }}
                    </div>
                </el-col>
                <el-col :span="6">
                <div class="grid-content bg-purple">
                        {{$t('common.createTime')}} : {{ docInfo.createTime }}
                </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.creator')}} : {{ docInfo.creator }}
                    </div>
                </el-col>
                </el-row>

                <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docOwner')}} : {{ docInfo.docOwner }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.modifyTime')}} : {{ docInfo.modifyTime }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docResource')}} : {{ docInfo.docFrom }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docVersion')}} : {{ docInfo.docVersion }}
                    </div>
                </el-col>
                </el-row>

                <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docType')}} : {{ docInfo.docType }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docSize')}} : {{ docInfo.docSize }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.docLevel')}} : {{ docInfo.docLevel }}
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        {{$t('common.assetsType')}} : {{ docInfo.assetsType }}
                    </div>
                </el-col>
                </el-row>
            </div>
        </el-card>
        <template>
            <div slot="footer" class="docDetBtnCls">
                <el-button plain @click="closePage">{{$t('buttons.close')}}</el-button>
            </div>
        </template>
        <editDocDialog @showEditDialog="showEditDialog" :editDocDialog="editDocDialogShow" :formDetailData="docDetailInfos" :lang="lang"></editDocDialog>
    </div>
</template>

<script>
import editDocDialog from "@/components/EditDocDialog"

export default {
    props: {
        // docDetailInfos: Object
    },
    components: {
        editDocDialog
    },
    mounted() {
        let lang = this.$route.query.lang;
        this.$i18n.locale = lang
        // console.log(this.$route.locale);
    },
    data() {
        return {
            value: 5,
            lang: "",
            editDocDialogShow: false,
            docDetailInfos: []
            // formDatas: {},
        }
    },
    mounted() {
        this.docDetailInfos = [{
                docName: '一个陌生人女人的来信',
                docCode: 'w001O002r003',
                createTime: '2018-12-14',
                creator: "二月河",
                docOwner: "王蒙",
                modifyTime: "2018-12-14",
                docFrom: '网络转载',
                docVersion: 'V1.0.1',
                docType: 'fffff',
                docSize: '51kb',
                docLevel: '绝密',
                assetsType: 'A.1'
            }]
    },
    methods: {
        closePage() {
            window.close();
        },
        editDoc() {
            this.editDocDialogShow = true;
        },
        showEditDialog() {
            this.editDocDialogShow = false;
            let lang = this.$route.query.lang;
            console.log('lang ===================',lang);
        },
        returnHomePage() {
            this.$router.push('HomePage');
        }
    },

}
</script>

<style scoped>
    .el-card {
        background-color: white;
    }
    .docDetBtnCls {
        margin-top: 30px;
    }
    .el-card__header {
        padding: 0px 12px;
    }
</style>


