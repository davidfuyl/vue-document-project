<template>
    <div>
        <el-container>
            <div style="float:left;border:1px solid red;">
                <a href="static/logovue.png"></a>
            </div>
            <loginUser></loginUser>
            <el-header height="85px">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/'}">{{$t("common.home")}}</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: 'registerPage', query: { lang: this.lang }}">{{$t("common.docManagment")}}</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: 'docDetailsPage', query: { lang: this.lang }}">{{$t("common.docLists")}}</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: 'docDetailsPage', query: { lang: this.lang }}">{{$t("common.docDetailInfo")}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="headCls">
                        <el-popover placement="bottom" width="25" trigger="hover">
                        <div><el-button type="text" @click="editDoc">{{$t('buttons.editDoc')}}</el-button></div>
                        <div><el-button type="text" @click="deleteDoc">{{$t('buttons.deleteDoc')}}</el-button></div>
                        <div><el-button type="text" @click="downloadDoc">{{$t('buttons.downloadDoc')}}</el-button></div>
                        <div><el-button type="text" @click="uploadDoc">{{$t('buttons.uploadDoc')}}</el-button></div>
                        <div><el-button type="text" @click="createDoc">{{$t('buttons.createDoc')}}</el-button></div>
                        <el-button slot="reference" size="small">{{$t('buttons.operations')}}</el-button>
                    </el-popover>
                    <el-input class="searCls" v-model="searchConditions" @keyup.enter.native="searchResults" clearable size="small" :placeholder="$t('common.searchConditions')">
                    </el-input>
                    <el-button icon="el-icon-search" plain size="small" @click="searchResults"></el-button>
                    <router-link :to="{ path:'/'}" class="logOutCls">{{$t('buttons.logout')}}</router-link>
                    <span>{{$store.state.username}}</span>
                    <el-button type="text" v-if="isZh " @click="switchLanguage" style="margin-left:8px;">中文</el-button>
                    <el-button type="text" v-else @click="switchLanguage">English</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="260px">
                    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-aside>
                    <el-container>
                        <el-main>
                            <el-table :data="tableData" height="420"  @selection-change="selectChange" stripe border>
                                <el-table-column type="index" label="No." prop="id"></el-table-column>
                                <el-table-column type="selection" width="55"></el-table-column>
                                <el-table-column prop="docName" :label="$t('common.docName')"  show-overflow-tooltip sortable width="180">
                                    <template slot-scope="scope">
                                        <router-link :to='{path: "/docDetailsPage", query: {lang: lang}}' class="docNameCls" target="_blank">
                                            <span> {{ scope.row.docName }}</span>
                                        </router-link>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="docCode" :label="$t('common.docCode')" sortable width="135"></el-table-column>
                                <el-table-column prop="createTime" :label="$t('common.createTime')" sortable width="135">
                                    <template slot-scope="scope">
                                        <i class="el-icon-time"></i>
                                        <span>{{ scope.row.createTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="creator" :label="$t('common.creator')" sortable width="135"></el-table-column>
                                <el-table-column prop="docOwner" :label="$t('common.docOwner')" sortable width="135"></el-table-column>
                                <el-table-column prop="modifyTime" sortable :label="$t('common.modifyTime')" width="135">
                                    <template slot-scope="scope">
                                        <i class="el-icon-time"></i>
                                        <span>{{ scope.row.modifyTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="docType" sortable :label="$t('common.docType')" width="135"></el-table-column>
                                <el-table-column prop="docSize" sortable :label="$t('common.docSize')" width="135"></el-table-column>
                                <el-table-column prop="docLevel" sortable :label="$t('common.docLevel')" width="135"></el-table-column>
                                <el-table-column prop="assetsType" sortable :label="$t('common.assetsType')" width="135"></el-table-column>
                                <el-table-column prop="docFrom" sortable :label="$t('common.docFrom')" width="150"></el-table-column>
                                <el-table-column prop="docVersion" sortable :label="$t('common.docVersion')" width="135"></el-table-column>
                            </el-table>
                            <div class="paginationCls">
                                <el-pagination>
                                </el-pagination>
                            </div>
                        </el-main>
                    </el-container>
            </el-container>
        </el-container>
        <edit-doc-dialog @showEditDialog="showEditDialog" :editDocDialog="editDocDialogShow" :lang="lang"></edit-doc-dialog>
    </div>
</template>

<script>
import docDetailsPage from '@/components/DocDetailsPage'
import editDocDialog from '@/components/EditDocDialog'
import loginUser from '@/components/LoginUser'
import logonHomePage from '@/components/LogonHomePage'

    export default {
        components: {
            docDetailsPage,
            editDocDialog,
            loginUser,
            logonHomePage,
        },
        mounted() {
            const table_url = 'static/tableData.json';
            const tree_url = 'static/treeData.json';
            this.$ajax.get(table_url).then(res => {
                if(res.data.isSuccess === "true"){
                    let tableData = res.data.data;
                    this.tableData = tableData;
                }else{
                    console.log(`The server is ${res.data.msg},please refres and try again`);
                }
            });
            this.$ajax.get(tree_url).then(res => {
                if(res.data.isSuccess === "true"){
                    let treeData = res.data.data;
                    this.treeData = treeData;
                }else{
                    console.log(`There is a exception ${res.data.msg} happend`);
                }
            });
        },
        data () {
            return {
                searchConditions: '',
                editDocDialogShow: false,
                tableData: [],
                treeData: [],
                data: [],
                lang: '',
                isZh: true,
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            searchResults() {
                let searchConditions = this.searchConditions;
                if(!searchConditions){
                    return;
                }
                alert(searchConditions);
            },
            switchLanguage() {
                let lang = this.$i18n.locale === "zh" ? "en" : "zh";
                this.lang = lang;
                if(lang === "zh"){
                    this.isZh = true;
                }else{
                    this.isZh = false;
                }
                this.$i18n.locale = lang
            },
            createDoc() {
                this.$router.push({name: 'createDoc'});
            },
            editDoc() {
                this.editDocDialogShow = true;
            },
            deleteDoc() {

            },
            uploadDoc() {

            },
            downloadDoc() {

            },
            showEditDialog() {
                this.editDocDialogShow = false;
            },
            selectChange() {
                alert(11111);
            }
            /* jumpToDocDetail() {
                this.$router.push(
                    name: 'DocDetailPage',
                    params: {
                        lang: this.lang
                    }
                );
            } */
        }
    }
</script>

<style scoped>

.el-card__headerr {
    background-color: #acccac;
}
.el-header {
    background-color: #acccac;
    text-align: center;
    height: 85px;
    margin-top: -60px;
}
.el-table {
    overflow-x: auto;
    overflow-y: auto;
}

.el-footer {
    background-color: #F1F8F1;
}
.el-aside, .el-tree{
    background-color: #F1F8F1;
    text-align: center;
}

.el-main {
    background-color: #E9EEF3;
    text-align: center;
}

/* body > .el-container {
    margin-bottom: 20px;
} */

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 360px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
.searCls {
    width: 180px;
}
.headCls {
    margin-top: -30px;
    float: right;
}
.el-breadcrumb {
    margin-left: 245px;
    margin-top: 52px;
}
.paginationCls {
    margin-left: 30px;
    margin-top: 20px;
}
.footerCls {
    margin-top:10px;
}
.docNameCls {
    text-decoration: none;
    color:cornflowerblue
}
.logOutCls {
    font-size: 14px;
    text-decoration: none;
    margin-left:20px;
}
</style>
