<template>
    <div>
        <el-container>
            <el-header style="height:90px;background:#acccac;margin-top:-60px;">
                <div>
                    <i class="el-icon-menu"  style="cursor:pointer;float:left;margin-top:35px;" title="Doc Menus" @click="collapseTreePanel"></i>
                    <span style="margin-top:40px;float:right;">
                        <el-button type="text" @click="logOn">{{$t('buttons.login')}}</el-button>
                        <el-button type="text" @click="register">{{$t('buttons.registration')}}</el-button>
                        <span>
                            <el-dropdown trigger="click" @command="switchLang">
                                <span style="margin-left:15px;cursor:pointer;">
                                    <span v-if="isZh">中文</span>
                                    <span v-else>English</span>
                                    <i class="el-icon-arrow-down" style="margin-left:5px;cursor:pointer;"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="zh">中文</el-dropdown-item>
                                    <el-dropdown-item command="en">English</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </span>
                    </span>
                </div>
            </el-header>
            <el-container>
                <el-aside style="height:510px;width:19%;" v-if="showOrHide">
                    <el-tree class="filter-tree" :data="treeData" default-expand-all ref="asideTree"></el-tree>
                </el-aside>
                <el-main style="height:510px;width:50%;background:#FAFAFA;">
                    <el-tabs v-model="activeName">
                        <el-tab-pane :label="$t('common.hotDocuments')" name="first">
                            <div>
                                <el-carousel height="350px">
                                    <el-carousel-item v-for="item in 4" :key="item">
                                        <h3>{{ item }}</h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('common.latestScanDocs')" name="second">
                            <latest-scan-doc></latest-scan-doc>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('common.myFavorites')" name="third">
                            <myfavorite-doc></myfavorite-doc>
                        </el-tab-pane>
                        <el-tab-pane :label="$t('common.docsRankLists')" name="fourth">
                            <doc-rank-lists></doc-rank-lists>
                        </el-tab-pane>
                    </el-tabs>
                </el-main>
                <el-aside style="height:510px;width:19%;">
                    <el-card class="box-card">
                        <div slot="header" class="bullteCls">
                            <span><i class="el-icon-edit-outline">{{$t('common.latestBulletin')}}</i></span>
                        </div>
                        <div class="cardContenCls">
                            <span>列表内容 1</span>
                            <span>列表内容 1</span>
                            <span>列表内容 1</span>
                        </div>
                    </el-card>

                    <el-card class="box-card2">
                        <div slot="header" class="bullteCls">
                            <span><i class="el-icon-setting">{{$t('common.systemUpgrade')}}</i></span>
                        </div>
                        <div class="cardContenCls">
                            <span>列表内容 1</span>
                            <span>列表内容 1</span>
                            <span>列表内容 1</span>
                        </div>
                    </el-card>
                </el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import hotDocuments from '@/components/HotDocuments'
import latestScanDoc from '@/components/LatestScanDoc'
import myfavoriteDoc from '@/components/MyFavoriteDoc'
import docRankLists from '@/components/DocRankLists'

export default {
    components: {
        hotDocuments,
        latestScanDoc,
        myfavoriteDoc,
        docRankLists
    },
    mounted() {
        const url = 'static/asideTreeData.json';
        this.$ajax.get(url).then(res => {
            if(res.data.isSuccess === "true"){
                let asideTreeData = res.data.data;
                this.treeData = asideTreeData;
            }else{
                console.log(`The server is ${res.data.msg},please refres and try again`);
            }
        });
    },
    data() {
        return {
            treeData: [],
            showOrHide: true,
            activeName: 'first',
            isZh: true,
            lang: ''
        }
    },
    methods: {
        collapseTreePanel() {
            this.showOrHide = !this.showOrHide;
        },
        switchLang() {
            let lang = this.$i18n.locale === "zh" ? "en" : "zh";
                this.lang = lang;
                if(lang === "zh"){
                    this.isZh = true;
                }else{
                    this.isZh = false;
                }
                this.$i18n.locale = lang
        },
        logOn() {
            this.$router.push('/loginPage');
        },
        register() {
            this.$router.push('/registerPage');
        }
    }
}
</script>


<style scoped>
    .box-card {
        width: 95%;
        margin-left: 5px;
        margin-top: 5px;
        height: 30%;
    }
    .box-card2 {
        width: 95%;
        margin-left: 5px;
        margin-top:8px;
        height: 30%;
    }
    .bullteCls {
        margin-left:-40px;
        font-size: 14px;
    }
    .cardContenCls span {
        font-size: 14px;
        cursor: pointer;
        display: block;
        margin-left: -125px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 350px;
        margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>


