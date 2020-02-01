<template>
    <div>
        <el-table :data="hotDocData" stripe style="width: 100%">
            <el-table-column prop="docName" label="文档名称" width="175" show-overflow-tooltip>
                <template slot-scope="scope">
                    <router-link :to='{path: "/docDetailsPage", query: {lang: lang}}' class="docNameCls" target="_blank">
                        <span> {{ scope.row.docName }}</span>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="docOwner" label="文档作者" width="175">
            </el-table-column>
            <el-table-column prop="modifyTime" label="修改日期" width="175"></el-table-column>
            <el-table-column prop="docFrom" label="文档来源" width="175"></el-table-column>
            <el-table-column prop="docVersion" label="文档版本" width="175"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotDocData: [],
            lang: ''
        }
    },
    mounted() {
        const hotDoc_url = 'static/hotDocTableData.json';
        this.$ajax.get(hotDoc_url).then(res => {
            let resData = res.data.data;
            this.hotDocData = resData;
        });
    }
}
</script>

<style>
.docNameCls {
    text-decoration: none;
    color:cornflowerblue
}


</style>

